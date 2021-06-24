<template>

  <section>
    <score-counter 
      v-for="(player, index) in statePlayers.getPlayerData" 
      :key="index"
      :playerId="player.id" 
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
export default class Main extends Vue {

  statePlayers = statePlayers
}

</script>

<style>

  section {
    background-color: #151515;
    display: flex !important;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100vh;
    justify-content: flex-start;
    padding: 55px 10px 10px 10px;
    width: 100%;
  }

</style>
