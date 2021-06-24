<template>

  <q-layout view="hHh Lpr lff" container style="height: 100vh" class="shadow-2">
    <menu-drawer />
    <router-view />
  </q-layout>

</template>

<script lang="ts">

// Decorators
import { Component, Vue } from 'vue-property-decorator'

// Vuex
import { statePlayers } from '@/store/index'

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

  onAppStart(numOfPlayers: number) {
    // create playerData item(s) on app start
    for (let i = 1; i <= numOfPlayers; i++) {
      statePlayers.action_setPlayerData({
        id: uuidv4(),
        score: 0,
        name: `Player ${i}`
      })
    }
  }

  mounted() {
    this.onAppStart(2)
  }
}
</script>

<style></style>
