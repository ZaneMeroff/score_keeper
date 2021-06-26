<template>

  <q-item-section class="component-perimeter">

    <q-item>
   
      <q-btn 
        flat 
        class="q-mr-sm"
        @click="statePlayers.action_setPlayerScore({ id: playerId, score: statePlayers.getPlayerData[playerId].score - 1 })"
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
          v-for="n in slideRange" 
          class="q-carousel-slide" 
          :key="n" 
          :name="n"
        ><q-item class="q-item">{{ n }}</q-item>                                   
        </q-carousel-slide>

      </q-carousel>  

      <q-btn 
        flat
        class="q-ml-sm" 
        @click="statePlayers.action_setPlayerScore({ id: playerId, score: statePlayers.getPlayerData[playerId].score + 1 })"
      ><q-icon name="add_circle_outline"></q-icon></q-btn>

    </q-item>

  </q-item-section>

</template>

<script lang="ts">

// Decorators
import { Component, Prop, Vue } from 'vue-property-decorator'

// Vuex
import { statePlayers } from '@/store/index'

@Component
export default class NumSelector extends Vue {

  @Prop(String) private playerId!: string

  statePlayers = statePlayers

  slideRange: string[] = []

  get currentSlide() {
    return statePlayers.getPlayerData[this.playerId].score.toString()
  }

  setSlideRange() {
    for (let i = -100; i <= 100; i++) {
      this.slideRange.push(i.toString())
    }
  }

  mounted() {
    this.setSlideRange()
  }
}
</script>

<style scoped>

  .component-perimeter {
    height: 60px; 
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .q-carousel {
    width: auto;
  }

  .q-carousel-slide {
    padding: 0px; 
  }

  .q-item {
    font-size: 40px;
    padding: 0px;
  }

</style>