<template>
  <q-page padding>
    <q-card class="auth-tabs">
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        align="justify"
        active-color="primary"
		    indicator-color="primary"
        narrow-indicator
      >
        <q-tab name="login" label="Login" class="text-blue" />
        <q-tab name="register" label="Register" class="text-green" />
      </q-tabs>
      <q-separator />
      <q-tab-panels
        v-model="tab"
        animated
        transition-prev="scale"
        transition-next="scale">
        <q-tab-panel name="login">
          <login-register :tab="tab" />
        </q-tab-panel>
        <q-tab-panel name="register">
          <login-register :tab="tab" />
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      tab: 'login'
    }
  },
  components: {
    'login-register': require('components/Auth/LoginRegister.vue').default
  },
  filters: {
    capitalize(value) {
    	return value.charAt(0).toUpperCase() + value.slice(1)
    }
	}
}
</script>
<style>
	.auth-tabs {
		max-width: 500px;
		margin: 0 auto;
	}
</style>