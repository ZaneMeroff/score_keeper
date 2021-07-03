<template>

  <q-item-section class="component-perimeter">

    <q-item class="q-item">
   
      <q-btn 
        flat 
        class="q-mr-sm"
        @click="statePlayers.getPlayerData[playerId].score > stateSettings.getMinScore ? statePlayers.action_setPlayerScore({ id: playerId, score: statePlayers.getPlayerData[playerId].score - 1 }) : null"
      ><q-icon name="remove_circle_outline"></q-icon></q-btn>

      <q-carousel
        animated
        padding
        swipeable
        transition-next="slide-left"
        transition-prev="slide-right"
        class="rounded-borders transparent q-carousel flex justify-center"
        height="auto"
        v-model="currentSlide"
      >
        <q-carousel-slide 
          v-for="n in stateSettings.getNumSelectorRangeSlides" 
          class="q-carousel-slide" 
          :key="n" 
          :name="n"
        ><q-item class="score-display">{{ n }}</q-item>                                   
      </q-carousel-slide>

      </q-carousel>  

      <q-btn 
        flat
        class="q-ml-sm" 
        @click="statePlayers.getPlayerData[playerId].score < stateSettings.getMaxScore ? statePlayers.action_setPlayerScore({ id: playerId, score: statePlayers.getPlayerData[playerId].score + 1 }) : null"
      ><q-icon name="add_circle_outline"></q-icon></q-btn>

    </q-item>

  </q-item-section>

</template>

<script lang="ts">

// Decorators
import { Component, Prop, Vue } from 'vue-property-decorator'

// Vuex
import { statePlayers, stateSettings } from '@/store/index'

@Component
export default class NumSelector extends Vue {

  @Prop(String) private playerId!: string

  statePlayers = statePlayers
  stateSettings = stateSettings

  slideRange: string[] = []

  get currentSlide(): string {
    return statePlayers.getPlayerData[this.playerId].score.toString()
  }
}
</script>

<style scoped>

  .component-perimeter {
    align-items: center;
    display: flex;
    height: 50px; 
    width: 100%;
  }

  .q-carousel {
    width: auto;
  }

  .q-carousel-slide {
    padding: 0px; 
  }

  .score-display {
    font-size: 40px;
    padding: 0px;
  }

  .q-item {
    display: flex;
    align-items: center;
  }

</style>