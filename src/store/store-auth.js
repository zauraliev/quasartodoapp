import { LocalStorage, Loading } from 'quasar'
import { firebaseAuth } from 'boot/firebase'
import { showErrorMessage } from 'src/functions/function-show-error-message'
const state = {
  user: {
    displayName: '',
    email: ''
  },
  loggedIn: false
}

const mutations = {
  setLoggedIn(state, value) {
    state.loggedIn = value
  },
  setUserDetails(state, payload) {
    if(payload){
      state.user.displayName = payload.displayName
      state.user.email = payload.email
    } else {
      state.user = {
        displayName: '',
        email: ''
      }
    }
  }
}

const actions = {
  registerUser({}, payload) {
    Loading.show()
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
                .then(response => {
                  console.log('response', response)
                })
                .catch(error => {
                  showErrorMessage(error.message)
                })
  },
  loginUser({}, payload) {
    Loading.show()
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
                .then(response => {
                  console.log('response', response)

                })
                .catch(error => {
                  showErrorMessage(error.message)
                })
  },
  logoutUser() {
    firebaseAuth.signOut()
  },
  handleAuthStateChange({commit, dispatch}) {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        let userDetails = {
          displayName: user.displayName,
          email: user.email
        }
        Loading.hide()
        commit('setLoggedIn', true)
        commit('setUserDetails', userDetails)
        LocalStorage.set('loggedIn', true)
        LocalStorage.set('userDetails', userDetails)
        dispatch('tasks/fbReadData', null, { root: true })
        this.$router.push('/').catch(err => {})
      } else {
        commit('tasks/clearTasks', null, { root: true })
        commit('tasks/setTasksLoaded', false, { root: true })
        commit('setLoggedIn', false)
        commit('setUserDetails', null)
        LocalStorage.set('loggedIn', false)
        LocalStorage.remove('userDetails')
        this.$router.replace('/auth').catch(err => {})
      }
    });
  }
}

const getters = {
  getUserDetails: (state) => {
    return state.user
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}