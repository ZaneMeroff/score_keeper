<template>

  <transition
    appear
    enter-active-class="animated animate__slideInLeft"
    leave-active-class="animated animate__slideOutRight"
  >
    <q-card class="q-card" :style="`background-color: ${statePlayers.getPlayerData[playerId].color}`">

      <!-- name input with edit & delete btns -->
      <name-input :playerId="playerId" />

      <!-- score display with +/- btns -->
      <num-selector :playerId="playerId" />

      <div class="q-px-lg">
        <q-slider
          v-model="statePlayers.getPlayerData[playerId].score"
          color="black"
          :min="stateSettings.getMinScore"
          :max="stateSettings.getMaxScore"
          :step="1"
        ></q-slider>
      </div>

    </q-card>
  </transition>

</template>

<script lang="ts">

// Decorators
import { Component, Prop, Vue } from 'vue-property-decorator'

// Vuex
import { statePlayers, stateSettings } from '@/store/index'

// Components
import NameInput from './NameInput.vue'
import NumSelector from './NumSelector.vue'

@Component({
  components: {
    'name-input': NameInput,
    'num-selector': NumSelector,
  }
})
export default class PlayerCard extends Vue {
  
  @Prop(String) private playerId!: string

  statePlayers = statePlayers
  stateSettings = stateSettings
}
</script>

<style scoped>

  .q-card {
    /* background-color: #0089ff; */
    height: auto;
    margin: 12px 0px;
    width: 100%;
  }

</style>