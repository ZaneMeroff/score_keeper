<template>

 <q-dialog v-model="showModal" persistent>
    <q-card class="q-card" :dark="stateSettings.getDarkMode">

      <q-card-section>
        <div class="q-mb-md">

          <!-- header -->
          <div class="text q-mb-sm" :style="stateSettings.getDarkModeText">Edit Name</div>
          <q-separator color="blue" class="q-mb-lg" inset></q-separator>
          
          <!-- text input -->
          <q-input 
            v-model="name" 
            maxlength="20"
            style="font-size: 16px"
            :dark="stateSettings.getDarkMode"
            :rules="[ val => !!val || '* Required' ]"
            @input="onInputChange"
          />
        </div>

        <q-btn-group flat class="q-btn-group">
          <!-- save button -->
          <q-btn
            flat
            class="q-btn"
            color="green"
            id="save-btn"
            size="md"
            :disable="disabled"
            :label="'save'"
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

</template>

<script lang="ts">

// Decorators
import { Component, Prop, Vue } from 'vue-property-decorator';

// Vuex
import { statePlayers, stateSettings } from '@/store/index'
import Players from '@/store/Players'
import Settings from '@/store/Settings'

@Component
export default class PlayerName extends Vue {
  
  @Prop(Boolean) private showModal!: boolean
  @Prop(String) private playerId!: string

  statePlayers: Players = statePlayers
  stateSettings: Settings = stateSettings

  name: string = ''
  disabled: boolean = false

  handleSaveBtn() {
    this.statePlayers.action_setPlayerName({ id: this.playerId, name: this.name })
    this.setDefault()
    this.$emit('close')
  }

  handleCancelBtn() {
    this.setDefault()
    this.$emit('close')
  }

  onInputChange() {
    if (this.name.length) this.disabled = false
    else this.disabled = true
  }

  setDefault() {
    if (this.statePlayers.getPlayerData[this.playerId]) {
      this.name = this.statePlayers.getPlayerData[this.playerId].name
    }
  }

  mounted() {
    this.setDefault()
  }
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
    font-size: 16px;
    text-align: center;
  }

</style>