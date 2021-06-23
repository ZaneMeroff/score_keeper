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
      <q-btn @click="updateCounter('plus')" class="q-btn"><q-icon name="add"></q-icon></q-btn>
      <q-btn @click="updateCounter('minus')" class="q-btn"><q-icon name="remove"></q-icon></q-btn>
    </q-item-section>

  </q-item-section>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NumSelector extends Vue {
  
  currentSlide: string = '1'
  slideRange: string[] = []

  updateCounter(increment: 'plus' | 'minus') {
    let current = parseInt(this.currentSlide)
    if (increment === 'plus') current++
    else if (increment === 'minus') current--
    this.currentSlide = current.toString()
  }

  setSlideRange() {
    for (let i = 1; i <= 100; i++) {
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