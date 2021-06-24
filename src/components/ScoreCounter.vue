<template>

  <q-card class="q-card">

    <!-- name input w/ edit & delete btn -->
    <name-input :name="playerData.name" />

    <!-- number selector with +/- btns -->
    <!-- score must be converted to string for q-carousel -->
    <num-selector :score="playerData.score.toString()" />

  </q-card>

</template>

<script lang="ts">

// Decorators
import { Component, Prop, Vue } from 'vue-property-decorator'

// Components
import NameInput from './NameInput.vue'
import NumSelector from './NumSelector.vue'

// Types
import { Player } from '@/types/players'

@Component({
  components: {
    'name-input': NameInput,
    'num-selector': NumSelector,
  }
})
export default class ScoreCounter extends Vue {
  
  @Prop() private playerData!: Player
  
}
</script>

<style scoped>

  .q-card {
    height: 200px;
    margin: 80px;
    width: 200px;
  }

</style>