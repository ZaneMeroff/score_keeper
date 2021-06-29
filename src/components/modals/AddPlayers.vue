<template>
  <div>

    <!-- score limits modal -->
    <q-dialog :dark="true" v-model="showModal" persistent>
      <q-card class="q-card" style="width: 300px">
        <q-card-section>

          <!-- header -->
          <div class="text q-mb-sm">Edit Number of Players</div>
          <q-separator color="blue" inset></q-separator>
          
          <!-- number of players input -->
          <q-input  
            v-model.number="numOfPlayers" 
            style="font-size: 16px"
            type="number"
            :dark="true" 
            :rules="[ val => !!val.toString() || '* Required' ]"
            @input="onInputChange"
          />
          
          <q-btn-group flat class="q-btn-group">
            <!-- save button -->
            <q-btn
              flat
              class="q-btn"
              color="green"
              size="md"
              :label="'save'"
              :disable="disabled"
              @click="handleSaveBtn"
            />
            <!-- cancel button -->
            <q-btn
              flat
              class="q-btn"
              color="red"
              size="md"
              :label="'cancel'"
              @click="handleCancelBtn"
            />
          </q-btn-group>
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- error dialog -->
    <q-dialog :dark="true" v-model="showError" persistent>
      <q-card class="q-card">
        <q-card-section>
          <div class="q-mb-md">
            
          <!-- header -->
            <q-item-section avatar class="q-item-section">
              <q-icon color="red" name="error_outline"></q-icon>
            </q-item-section>
            <div class="text">ERROR ERROR ERROR</div>
          </div>

          <!-- ok button -->
          <q-btn
            flat
            color="green"
            size="md"
            style="width: 100%"
            :label="'ok'"
            @click="showError = false"
          />
        </q-card-section>
      </q-card>
    </q-dialog>

  </div>
</template>
<script lang="ts">

// Decorators
import { Component, Prop, Vue } from 'vue-property-decorator'

// Vuex
import { stateModals, statePlayers, stateSettings } from '@/store/index'

@Component
export default class AddPlayers extends Vue {
  
  @Prop(Boolean) private showModal!: boolean
  
  showError: boolean = false
  disabled: boolean = false
  numOfPlayers: number = 0
  
  handleSaveBtn() {
    this.$emit('close')
  }
  
  handleCancelBtn() {
    this.$emit('close')
  }
  
  onInputChange() {
    if (!this.numOfPlayers.toString()) this.disabled = true
    else this.disabled = false
  }
}
</script>
<style scoped>

  .q-card {
    background-color: #1e1e1e;
  }

  .text {
    color: #FFF;
    font-size: 16px;
    text-align: center;
  }

  .q-btn {
    width: 50%;
  }

  .q-btn-group {
    display: inline !important;
  }

  .q-item-section {
    display: flex;
    align-items: center;
    padding: 10px 0px 20px 0px;
  }

</style>