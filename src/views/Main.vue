<template>

  <section>
    <player-card 
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
import PlayerCard from '@/components/PlayerCard.vue'

@Component({
  components: {
    'player-card' : PlayerCard,
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
    flex-direction: column;
    height: 100vh;
    padding: 60px 20px 10px 20px;
    width: 100%;
  }

</style>
