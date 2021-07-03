<template>

  <q-layout view="hHh Lpr lff" container style="height: 100vh">
    <menu-drawer />
    <router-view />
  </q-layout>

</template>

<script lang="ts">

// Decorators
import { Component, Vue } from 'vue-property-decorator'

// Vuex
import { statePlayers, stateSettings } from '@/store/index'

// Components
import MenuDrawer from '@/components/MenuDrawer.vue'

// Utils
import localforage from 'localforage'

@Component({
  components: {
    'menu-drawer' : MenuDrawer,
  }
})
export default class App extends Vue {

  statePlayers = statePlayers
  stateSettings = stateSettings

  async mounted() {
    // check for stored localforage keys
    await localforage.length()
      .then(keys => {
        // if no keys exist, set defaults for players and min/max
        if (!keys) {
          this.statePlayers.action_createPlayers(2)
          this.stateSettings.action_setScoreLimits({ min: 0, max: 10 })
        }
      })
  }
}
</script>

<style>

  * {
    font-family: 'Poppins';
  }

</style>
