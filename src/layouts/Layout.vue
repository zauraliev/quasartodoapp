<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
          class="q-mr-lg"
        />

        <q-toolbar-title>
          Quasar Todo App
        </q-toolbar-title>
        <div class="q-pa-md">
        <q-btn
          v-if="!loggedIn"
          to="/auth"
          flat
          icon-right="account_circle"
          label="Login"
          class="absolute-right" />
          <q-btn 
            v-else
            flat
            :label="getUserDetails.email"
            class="absolute-right">
            <q-avatar class="q-ml-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-menu fit
              transition-show="flip-right"
              transition-hide="flip-left"
            >
              <q-list style="min-width: 100px">
                <q-item clickable>
                  <q-item-section @click="logoutUser">Logout</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
          </div>
      </q-toolbar>
    </q-header>
    <q-footer class="bg-primary text-white">
      <q-tabs>
        <q-route-tab 
            v-for="nav in navs"
            :key="nav.label"
            :to="nav.to"
            :icon="nav.icon" 
            :label="nav.label" />
      </q-tabs>
    </q-footer>
    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      bordered
      show-if-above
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label header>Navigation</q-item-label>
        <q-item v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          class="text-grey-2"
          exact
          clickable>
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{nav.label}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'Layout',

  data () {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          icon: 'list',
          label: 'Todo',
          to: '/'
        },
        {
          icon: 'settings',
          label: 'Settings',
          to: '/settings'
        },
      ]
    }
  },
  computed: {
    ...mapState('auth', ['loggedIn']),
    ...mapGetters('auth', ['getUserDetails'])
  },
  methods: {
    ...mapActions('auth', ['logoutUser'])
  }
}
</script>
