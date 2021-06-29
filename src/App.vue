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
    this.statePlayers.action_createPlayers(3)
    this.stateSettings.action_setNumSelectorRangeSlides()
  }
}
</script>

<style></style>
