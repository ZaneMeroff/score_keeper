<template>

  <q-card class="q-card">

    <!-- name input w/ edit btn -->
    <name-input />

    <!-- number selector with +/- btns -->
    <num-selector />

  </q-card>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import NameInput from './NameInput.vue'
import NumSelector from './NumSelector.vue'

@Component({
  components: {
    'name-input': NameInput,
    'num-selector': NumSelector,
  }
})
export default class ScoreCounter extends Vue {
  
}
</script>

<style scoped>

  .q-card {
    height: 200px;
    margin: 80px;
    width: 200px;
  }

</style>