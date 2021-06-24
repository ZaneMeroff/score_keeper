<template>

  <q-item-section class="q-item-section">
    <q-item>{{ name }}</q-item>
    <q-btn flat class="q-btn row">
      <q-icon name="edit"></q-icon>
      <q-icon name="delete"></q-icon>
    </q-btn>
  </q-item-section>

</template>

<script lang="ts">

// Decorators
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NameInput extends Vue {

  @Prop() private name!: string

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