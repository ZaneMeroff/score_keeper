<template>

 <q-dialog v-model="showModal" persistent>
    <q-card class="q-card" :dark="stateSettings.getDarkMode">

      <q-card-section>
        <!-- header -->
        <div class="text q-mb-lg" :style="stateSettings.getDarkModeText">{{ text }}</div>
          
        <q-btn-group flat class="q-btn-group">
          <!-- yes button -->
          <q-btn
            flat
            class="q-btn"
            color="green"
            size="md"
            :label="'yes'"
            @click="onYes"
          />
          <!-- no button -->
          <q-btn
            flat
            class="q-btn"
            color="red"
            size="md"
            :label="'no'"
            @click="onNo"
          />
        </q-btn-group>
      </q-card-section>
    </q-card>
  </q-dialog>

</template>

<script lang="ts">

// Decorators
import { Component, Prop, Vue } from 'vue-property-decorator';

// Vuex
import { stateSettings } from '@/store/index'

@Component
export default class Confirm extends Vue {
  
  @Prop(Function) private onYes!: Function
  @Prop(Function) private onNo!: Function
  @Prop(Boolean) private showModal!: boolean
  @Prop(String) private text!: string 

  stateSettings = stateSettings
}
</script>

<style scoped>

  .q-card {
    width: 300px;
  }

  .q-btn-group {
    display: inline !important;
  }

  .q-btn {
    width: 50%;
  }

  .text {
    color: #FFF;
    font-size: 16px;
    text-align: center;
  }

</style>