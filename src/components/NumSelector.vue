<template>

  <q-item-section class="component-perimeter">

    <q-carousel
      animated
      padding
      swipeable
      transition-next="slide-up"
      transition-prev="slide-down"
      class="rounded-borders transparent"
      height="auto"
      v-model="currentSlide"
    >

      <q-carousel-slide v-for="n in slideRange" :key="n" :name="n">
        <q-item>{{ n }}</q-item>                                   
      </q-carousel-slide>

    </q-carousel>  

    <q-item-section>
      <!-- (+) button -->
      <q-btn 
        @click="statePlayers.action_setPlayerScore({ id: playerId, score: statePlayers.getPlayerData[playerId].score + 1 })" 
        class="q-btn"
      ><q-icon name="add"></q-icon>
      </q-btn>
      <!-- (-) button -->
      <q-btn 
        @click="statePlayers.action_setPlayerScore({ id: playerId, score: statePlayers.getPlayerData[playerId].score - 1 })"
        class="q-btn"
      ><q-icon name="remove"></q-icon></q-btn>
    </q-item-section>

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
    height: 80px; 
    width: 80px
  }

  .q-item-section {
    border: 1px solid red;
    height: 80px; 
    text-align: center; 
    width: 80px; 
  }

  .q-item {
    font-size: 30px
  }

  .q-btn {
    height: 40px; 
    width: 40px
  }

</style>