<template>

  <transition
    appear
    enter-active-class="animated animate__zoomIn"
    leave-active-class="animated animate__backOutDown"
  >
    <q-card class="q-card">

      <!-- name input w/ edit & delete btn -->
      <name-input :playerId="playerId" />

        <div class="flex justify-center">
          <!-- <q-btn flat class="q-mr-md"><q-icon name="remove_circle_outline"></q-icon></q-btn> -->
          <!-- <p style="font-size: 40px; text-align: center; margin: 0px">{{ value }}</p> -->
          <num-selector :playerId="playerId" />
          <!-- <q-btn flat class="q-ml-md"><q-icon name="add_circle_outline"></q-icon></q-btn> -->
        </div>

        <q-slider
          v-model="value"
          :min="0"
          :max="10"
          :step="1"
          dark
          color="light-green"
        ></q-slider>

      <!-- ***********************************- -->
      <!-- ***********************************- -->
      <!-- number selector with +/- btns -->
      <!-- <num-selector :playerId="playerId" /> -->
      <!-- ***********************************- -->
      <!-- ***********************************- -->

    </q-card>
  </transition>

</template>

<script lang="ts">

// Decorators
import { Component, Prop, Vue } from 'vue-property-decorator'

// Components
import NameInput from './NameInput.vue'
import NumSelector from './NumSelector.vue'

@Component({
  components: {
    'name-input': NameInput,
    'num-selector': NumSelector,
  }
})
export default class ScoreCounter extends Vue {
  
  @Prop(String) private playerId!: string

  value = 0
}
</script>

<style scoped>

  .q-card {
    height: 150px;
    margin: 20px;
    width: 100%;
    background-color: #0089ff;
    padding: 0px 20px 20px 20px;
  }

</style>