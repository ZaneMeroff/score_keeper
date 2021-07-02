<template>
  <div>

    <!-- add players modal -->
    <q-dialog v-model="showModal" persistent>
      <q-card class="q-card" :dark="stateSettings.getDarkMode">
        <q-card-section>

          <!-- header -->
          <div class="text q-mb-sm" :style="stateSettings.getDarkModeText">Add Players</div>
          <q-separator color="blue" class="q-mb-xl" inset></q-separator>
          
          <!-- number of players input -->
          <q-input  
            v-model.number="numOfPlayers" 
            style="font-size: 16px"
            type="number"
            :dark="stateSettings.getDarkMode" 
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

    <!-- error dialog -->
    <q-dialog v-model="showError" persistent>
      <q-card class="q-card" :dark="stateSettings.getDarkMode">
        <q-card-section>
          <div class="q-mb-md">
            <!-- header -->
            <div class="text q-mb-sm" :style="stateSettings.getDarkModeText"><q-icon color="red" name="error"></q-icon> Player Rules</div>
            <q-separator color="blue" inset></q-separator>
            <!-- rule text -->
            <div class="text q-my-lg" :style="stateSettings.getDarkModeText">Total players cannot exceed 50</div>
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
  
  disabled: boolean = false
  numOfPlayers: number = 1
  showError: boolean = false
  
  stateModals = stateModals
  statePlayers = statePlayers
  stateSettings = stateSettings

  handleSaveBtn() {
    if (this.validateRules()) {
      this.statePlayers.action_createPlayers(this.numOfPlayers)
      this.setDefault()
      this.stateModals.action_addPlayersModalVisibility(false)
      this.$emit('close')
    } else {
      this.showError = true
    }
  }
  
  handleCancelBtn() {
    this.setDefault()
    this.stateModals.action_addPlayersModalVisibility(false)
    this.$emit('close')
  }

  validateRules() {
    if (Object.keys(this.statePlayers.getPlayerData).length + this.numOfPlayers > 50) return false
    else return true
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
    width: 300px;
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
    align-items: center;
    display: flex;
    padding: 10px 0px 20px 0px;
  }

</style>