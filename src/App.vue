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

@Component({
  components: {
    'menu-drawer' : MenuDrawer,
  }
})
export default class App extends Vue {

  statePlayers = statePlayers
  stateSettings = stateSettings

  mounted() {
    // create 2 players on start by default
    this.statePlayers.action_createPlayers(2)
    // create q-carousel slides for the default score limits (0-10)
    this.stateSettings.action_setNumSelectorRangeSlides()
  }
}
</script>

<style>

  * {
    font-family: 'Poppins';
  }

</style>
