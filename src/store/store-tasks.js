import Vue from 'vue'
import { uid, Notify } from 'quasar'
import { firebaseDb } from 'boot/firebase'
import { firebaseAuth } from 'boot/firebase'
import { showErrorMessage } from 'src/functions/function-show-error-message'

const state = {
  tasks: {},
  search: '',
  sort: 'name',
  tasksLoaded: false
}

const mutations = {
  addTask(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task)
  },
  updateTask(state, payload) {
    console.log('payload from mutation', payload)
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state, taskId) {
    Vue.delete(state.tasks, taskId)
  },
  clearTasks(state) {
    state.tasks = {}
  },
  setSearch(state, value) {
    state.search = value
  },
  setSort(state, value) {
    state.sort = value
  },
  setTasksLoaded(state, value){
    state.tasksLoaded = value
  }
}

const actions = {
  addTask({ dispatch }, task) {
    let taskId = uid()
    let payload = {
      id: taskId,
      task: task
    }
    // commit('addTask', payload)

    dispatch('fbAddTask', payload)

  },
  updateTask({ dispatch }, payload) {
    dispatch('fbUpdateTask', payload)
  },
  deleteTask({ dispatch }, taskId) {
    dispatch('fbDeleteTask', taskId)
  },
  setSearch({ commit }, value) {
    commit('setSearch', value)
  },
  setSort({ commit }, value) {
    commit('setSort', value)
  },

  fbReadData({ commit }) {
    let userId = firebaseAuth.currentUser.uid
    let userTasks = firebaseDb.ref('tasks/' + userId)

    // initial check for data
    userTasks.once('value', snapshot => {
      commit('setTasksLoaded', true)
    }, error => {
      if(error){
        showErrorMessage(error.message)
        this.$router.replace('/auth')
      }
    })

    // child added
    userTasks.on('child_added', snapshot => {
      let task = snapshot.val()
      let payload = {
        id: snapshot.key,
        task: task
      }
      commit('addTask', payload)
    })

    // child changed
    userTasks.on('child_changed', snapshot => {
      let task = snapshot.val()
      let payload = {
        id: snapshot.key,
        updates: task
      }
      commit('updateTask', payload)
    })

    // child removed
    userTasks.on('child_removed', snapshot => {
      let taskId = snapshot.key
      commit('deleteTask', taskId)
    })
  },
  fbAddTask({}, payload) {
    let userId = firebaseAuth.currentUser.uid
    let taskRef = firebaseDb.ref(`tasks/${userId}/${payload.id}`)
    taskRef.set(payload.task, error => {
      if(error){
        showErrorMessage(error.message)
      } else {
        Notify.create({ color: 'teal', message: 'New task added!', position:'bottom-right' })
      }
    })
  },
  fbUpdateTask({}, payload) {
    let userId = firebaseAuth.currentUser.uid
    let taskRef = firebaseDb.ref(`tasks/${userId}/${payload.id}`)
    taskRef.update(payload.updates, error => {
      if(error){
        showErrorMessage(error.message)
      } else {
        let keys = Object.keys(payload.updates)
        if(!(keys.includes('completed') && keys.length === 1))
        Notify.create({ color: 'teal', message: 'Task has been updated!', position:'bottom-right' })
      }
    })
  },
  fbDeleteTask({}, taskId){
    let userId = firebaseAuth.currentUser.uid
    let taskRef = firebaseDb.ref(`tasks/${userId}/${taskId}`)
    taskRef.remove(error => {
      if(error){
        showErrorMessage(error.message)
      } else {
        Notify.create({ color: 'teal', message: 'Task has been deleted!', position:'bottom-right' })        
      }
    })
  }
}

const getters = {
  tasksSorted: (state) => {

    let tasksSorted = {},
      keysOrdered = Object.keys(state.tasks)

    keysOrdered.sort((a, b) => {
      let taskAProp = state.tasks[a][state.sort].toLowerCase(),
        taskBProp = state.tasks[b][state.sort].toLowerCase()
      if (taskAProp > taskBProp) return 1
      else if (taskAProp < taskBProp) return -1
      else return 0
    })

    keysOrdered.forEach(key => {
      tasksSorted[key] = state.tasks[key]
    })

    return tasksSorted
  },
  tasksFiltered: (state, getters) => {
    let tasksSorted = getters.tasksSorted,
      tasksFiltered = {}

    if (state.search) {
      let searchLowerCase = state.search.toLowerCase();
      Object.keys(tasksSorted).forEach(key => {
        let task = tasksSorted[key],
          taskNameLowerCase = task.name.toLowerCase();
        if (taskNameLowerCase.includes(searchLowerCase)) {
          tasksFiltered[key] = task
        }
      })
      return tasksFiltered
    }

    return tasksSorted
  },
  tasksTodo: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered
    let tasksTodo = {}

    Object.keys(tasksFiltered).forEach(key => {
      let task = tasksFiltered[key];
      if (!task.completed) {
        tasksTodo[key] = task
      }
    })

    return tasksTodo
  },
  tasksCompleted: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered
    let tasksCompleted = {}

    Object.keys(tasksFiltered).forEach(key => {
      let task = tasksFiltered[key];
      if (task.completed) {
        tasksCompleted[key] = task
      }
    })

    return tasksCompleted
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}