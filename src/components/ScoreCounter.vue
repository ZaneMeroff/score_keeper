<template>

  <transition
    appear
    enter-active-class="animated animate__zoomIn"
    leave-active-class="animated animate__backOutDown"
  >
    <q-card class="q-card">

      <!-- name input with edit & delete btns -->
      <name-input :playerId="playerId" />

      <!-- score display with +/- btns -->
      <num-selector :playerId="playerId" />

      <q-slider
        v-model="statePlayers.getPlayerData[playerId].score"
        dark
        :min="0"
        :max="10"
        :step="1"
        color="light-green"
      ></q-slider>

    </q-card>
  </transition>

</template>

<script lang="ts">

// Decorators
import { Component, Prop, Vue } from 'vue-property-decorator'

// Vuex
import { statePlayers } from '@/store/index'

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

  statePlayers = statePlayers
}
</script>

<style scoped>

  .q-card {
    height: 150px;
    margin: 20px 0px;
    width: 100%;
    background-color: #0089ff;
    padding: 0px 20px 20px 20px;
  }

</style>