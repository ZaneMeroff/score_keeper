<template>
  <div>
    
    <!-- score limits modal -->
    <q-dialog v-model="showModal" persistent>
      <q-card class="q-card" :dark="stateSettings.getDarkMode">

        <q-card-section>
          <!-- header -->
          <div class="text q-mb-sm" :style="stateSettings.getDarkModeText">Score Limits</div>

          <q-separator color="blue" inset></q-separator>

          <!-- min score number input -->
          <div class="q-mt-lg" style="color: #979797">min</div>
          <q-input  
            v-model.number="scoreMin" 
            style="font-size: 16px"
            type="number"
            :dark="stateSettings.getDarkMode"
            :rules="[ val => !!val.toString() || '* Required' ]"
            @input="onInputChange"
          />
          <!-- max score number input -->
          <div style="color: #979797">max</div>
          <q-input 
            v-model.number="scoreMax" 
            style="font-size: 16px"
            type="number"
            :dark="stateSettings.getDarkMode" 
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
    <q-dialog v-model="showError" persistent>
      <q-card class="q-card" :dark="stateSettings.getDarkMode">
        <q-card-section>
          <div class="q-mb-md">
            <!-- header -->
            <div class="text q-mb-sm" :style="stateSettings.getDarkModeText"><q-icon color="red" name="error"></q-icon> Score Rules</div>
            <q-separator color="blue" inset></q-separator>
            <!-- rule text -->
            <div class="text q-my-md" :style="stateSettings.getDarkModeText">Min Score must be -500 to 0</div>
            <div class="text" :style="stateSettings.getDarkModeText">Max Score must be 1 to 500</div>
          </div>
          <!-- ok button -->
          <q-btn
            flat
            color="green"
            size="md"
            style="width: 100%"
            :label="'ok'"
            @click="() => {
              showError = false
              this.stateModals.action_scoreLimitModalVisibility(true)
            }"
          />
        </q-card-section>
      </q-card>
    </q-dialog>

  </div>
</template>

<script lang="ts">

// Decorators
import { Component, Prop, Vue, Watch } from 'vue-property-decorator'

// Vuex
import { stateModals, statePlayers, stateSettings } from '@/store/index'

@Component
export default class ScoreLimits extends Vue {

  @Prop(Boolean) private showModal!: boolean

  stateModals = stateModals
  statePlayers = statePlayers
  stateSettings = stateSettings

  scoreMin: number = 0
  scoreMax: number = 0

  showError: boolean = false
  disabled: boolean = false

  handleSaveBtn() {
    if (this.validateRules()) {
      // check in any players have a score outside of the new score limits
      // if so, reset all player scores to zero
      for (const player in this.statePlayers.getPlayerData) {
        let score = this.statePlayers.getPlayerData[player].score
        if (score > this.scoreMax || score < this.scoreMin) this.statePlayers.zeroScores()
      }
      // set new score limits and close modal
      this.stateSettings.action_setScoreLimits({ min: this.scoreMin, max: this.scoreMax })
      this.$emit('close')
    } else {
      this.showError = true
    }
    this.stateModals.action_scoreLimitModalVisibility(false)
  }

  handleCancelBtn() {
    this.setDefaults()
    this.stateModals.action_scoreLimitModalVisibility(false)
    this.$emit('close')
  }

  onInputChange() {
    if (!this.scoreMin.toString() || !this.scoreMax.toString()) this.disabled = true
    else this.disabled = false
  }

  setDefaults() {
    this.scoreMin = this.stateSettings.getMinScore
    this.scoreMax = this.stateSettings.getMaxScore
  }

  validateRules(): boolean {
    if ((this.scoreMin > 0 || this.scoreMin < -500) || (this.scoreMax > 500 || this.scoreMax < 1)) return false
    else return true
  }

  @Watch('showModal')
  setScoreLimits() {
    this.setDefaults()
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
    display: flex;
    align-items: center;
    padding: 10px 0px 20px 0px;
  }

</style>
