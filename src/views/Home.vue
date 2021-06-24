<template>

  <section>
    <score-counter 
      v-for="(player, index) in statePlayers.getPlayerData" 
      :key="index"
      :playerData="player" 
    />
  </section>

</template>

<script lang="ts">

// Decorators
import { Component, Vue } from 'vue-property-decorator'

// Vuex
import { statePlayers } from '@/store/index'

// Components
import ScoreCounter from '@/components/ScoreCounter.vue'

@Component({
  components: {
    'score-counter' : ScoreCounter,
  }
})
export default class Home extends Vue {

  statePlayers = statePlayers

}

</script>

<style>

  section {
    border: 1px solid #151515;
    background-color: #151515;
    height: 100vh;
  }

</style>
