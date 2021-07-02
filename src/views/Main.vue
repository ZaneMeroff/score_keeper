<template>

  <section>
    <div v-if="Object.keys(statePlayers.getPlayerData).length">
      <player-card 
        v-for="(player, index) in statePlayers.getPlayerData" 
        :key="index"
        :playerId="player.id" 
      />
    </div>
    <div v-else class="error-wrapper">
      <p class="error-text">Players List is Empty</p>
      <p class="error-text">Select 'Add Players' from the App Menu</p>
    </div>
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
    background-color: #3E3E3E;
    display: flex !important;
    flex-direction: column;
    height: 100vh;
    overflow-y: scroll;
    padding: 60px 20px 10px 20px;
    width: 100%;
  }

  .error-text {
    color: #FFF;
    font-size: 16px;
    text-align: center;
  }

  .error-wrapper {
    margin-top: 50px;
  }

</style>
