<template>

  <section>
    <score-counter />
  </section>

</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import ScoreCounter from '@/components/ScoreCounter.vue'

@Component({
  components: {
    'score-counter' : ScoreCounter,
  }
})
export default class Home extends Vue {

}

</script>

<style>

  section {
    border: 1px solid #151515;
    background-color: #151515;
    height: 100vh;
  }

</style>
