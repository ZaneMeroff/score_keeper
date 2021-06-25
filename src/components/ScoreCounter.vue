<template>

  <q-card class="q-card">

    <!-- name input w/ edit & delete btn -->
    <name-input :playerId="playerId" />

    <!-- number selector with +/- btns -->
    <num-selector :playerId="playerId" />

  </q-card>

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
}
</script>

<style scoped>

  .q-card {
    height: 200px;
    margin: 20px;
    width: 200px;
  }

</style>