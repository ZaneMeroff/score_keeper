<template>

  <score-counter />

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

<style></style>
