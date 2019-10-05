<template>
  <form @submit.prevent="submitForm">
    <div class="row q-mb-md">
      <q-banner 
        class="bg-grey-3 col">
      <template v-slot:avatar>
        <q-icon name="account_circle" :color="tab === 'login' ? 'primary' : 'secondary'" />
      </template>
      {{ tab | capitalize }} to access todos anywhere!
      </q-banner>
    </div>
    <div class="row q-mb-md">
      <q-input
        ref="email"
        v-model="formData.email"
        outlined
        class="col"
        label="Email"
        :rules="[ val => isValidEmail(val) || 'Please enter valid email']"
        lazy-rules
        stack-label />
    </div>
    <div class="row q-mb-md">
      <q-input
        ref="password"
        v-model="formData.password" 
        type="password"
        outlined
        class="col"
        label="Password"
        :rules="[ val => val.length >= 6 || 'Please enter at least 6 characters']"
        lazy-rules
        stack-label />
    </div>
    <div class="row">
      <q-space />
      <q-btn 
        color="primary" 
        :label="tab"
        type="submit" />
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['tab'],
  data() {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', ['registerUser', 'loginUser']),
    isValidEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    submitForm() {
      this.$refs.email.validate()
      this.$refs.password.validate()

      if(!this.$refs.email.hasError && !this.$refs.password.hasError) {
        if(this.tab === 'login') {
          this.loginUser(this.formData)
        } else {
          this.registerUser(this.formData)
        }
      }
    }
  },
  filters: {
		capitalize(value) {
			return value.charAt(0).toUpperCase() + value.slice(1)
		}
	}
}
</script>

<style>

</style>