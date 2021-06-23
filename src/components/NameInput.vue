<template>

  <q-item-section class="q-item-section">
    <q-item>team 1</q-item>
    <q-btn flat class="q-btn">
      <q-icon name="edit"></q-icon>
    </q-btn>
  </q-item-section>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NameInput extends Vue {
  
}
</script>

<style scoped>

  .q-item-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .q-btn {
    height: 40px;
    width: 40px;
  }

</style> 