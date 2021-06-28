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
import { v4 as uuidv4 } from 'uuid'

@Component({
  components: {
    'menu-drawer' : MenuDrawer,
  }
})
export default class App extends Vue {

  statePlayers = statePlayers
  stateSettings = stateSettings

  onAppStart(numOfPlayers: number) {
    // create playerData item(s) on app start
    for (let i = 1; i <= numOfPlayers; i++) {
      statePlayers.action_createPlayer({
        id: uuidv4(),
        name: `Player ${i}`,
        score: 0,
      })
    }
  }

  mounted() {
    this.onAppStart(3)
    this.stateSettings.action_setNumSelectorRangeSlides()
  }
}
</script>

<style></style>
