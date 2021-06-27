<template>

  <q-dialog :dark="true" v-model="showModal" persistent>
    <q-card class="q-card">

      <q-card-section>
        <div class="q-mb-md">
          <!-- text -->
          <div class="text" v-if="text">{{ text }}</div>
        </div>

        <q-btn-group flat class="q-btn-group">
          <!-- ok button -->
          <q-btn
            flat
            color="green"
            size="md"
            :label="'ok'"
            @click="$emit('close')"
          />
        </q-btn-group>
      </q-card-section>

    </q-card>
  </q-dialog>

</template>

<script lang="ts">

// Decorators
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ErrorDialog extends Vue {

  @Prop(String) private text!: string
  @Prop(Boolean) private showModal!: boolean
}
</script>

<style scoped>

  .q-card {
    background-color: #1e1e1e;
  }

  .text {
    color: #FFF;
  }

  .q-btn-group {
    display: flex;
    justify-content: center;
    width: 100%;
  }

</style>
