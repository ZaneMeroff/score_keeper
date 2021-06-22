<template>

  <q-card class="q-card">

    <!-- name input -->
    <q-card-section>
      <div>name input</div><q-btn>edit</q-btn>
    </q-card-section>

    <!-- number counter -->
    <q-card-section>

      <!-- display number -->
      <q-card-section>
        <p>5</p>
      </q-card-section>

      <!-- +/- buttons -->
      <q-card-section>
        <q-btn>+</q-btn>
        <q-btn>-</q-btn>
      </q-card-section>

    </q-card-section>

  </q-card>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ScoreCounter extends Vue {
  
}
</script>

<style scoped>

  .q-card {
    height: 200px;
    margin: 50px;
    width: 200px;
  }

</style>