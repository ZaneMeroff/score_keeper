<template>
  <div>

    <!-- score limits modal -->
    <q-dialog :dark="true" v-model="showModal" persistent>
      <q-card class="q-card" style="width: 300px">
        <q-card-section>

          <!-- header -->
          <div class="text q-mb-sm">Add Players</div>
          <q-separator color="blue" class="q-mb-xl" inset></q-separator>
          
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
            <!-- add button -->
            <q-btn
              flat
              class="q-btn"
              color="green"
              size="md"
              :label="'add'"
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

  </div>
</template>
<script lang="ts">

// Decorators
import { Component, Prop, Vue } from 'vue-property-decorator'

// Vuex
import { stateModals, statePlayers } from '@/store/index'

@Component
export default class AddPlayers extends Vue {
  
  @Prop(Boolean) private showModal!: boolean
  
  disabled: boolean = false
  numOfPlayers: number = 1
  
  stateModals = stateModals
  statePlayers = statePlayers

  handleSaveBtn() {
    this.statePlayers.action_createPlayers(this.numOfPlayers)
    this.setDefault()
    this.stateModals.action_addPlayersModalVisibility(false)
  }
  
  handleCancelBtn() {
    this.setDefault()
    this.stateModals.action_addPlayersModalVisibility(false)
  }
  
  onInputChange() {
    if (this.numOfPlayers >= 1) this.disabled = false
    else this.disabled = true
  }

  setDefault() {
    this.numOfPlayers = 1
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