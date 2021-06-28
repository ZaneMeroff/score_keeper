<template>
  <div>
    
    <!-- score limits modal -->
    <q-dialog :dark="true" v-model="showModal" persistent>
      <q-card class="q-card" style="width: 300px">

        <q-card-section>
          <!-- header -->
          <div class="text q-mb-sm">Score Limits</div>

          <q-separator color="blue" inset></q-separator>

          <!-- min score number input -->
          <div class="q-mt-lg" style="color: #979797">min</div>
          <q-input  
            v-model.number="scoreMin" 
            style="font-size: 16px"
            type="number"
            :dark="true" 
            :rules="[ val => !!val.toString() || '* Required' ]"
            @input="onInputChange"
          />
          <!-- max score number input -->
          <div style="color: #979797">max</div>
          <q-input 
            v-model.number="scoreMax" 
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
            <div class="text">Min Score must be less than Max Score</div>
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
import { stateSettings, statePlayers } from '@/store/index'

@Component
export default class ScoreLimits extends Vue {

  @Prop(Boolean) private showModal!: boolean

  stateSettings = stateSettings
  statePlayers = statePlayers

  scoreMin: number = 0
  scoreMax: number = 0

  showError: boolean = false
  disabled: boolean = false

  handleSaveBtn() {
    if (this.validateInputs()) {
      // check in any players have a score outside of the new score limits
      // if so, reset all player scores to zero
      for (const player in statePlayers.getPlayerData) {
        let score = statePlayers.getPlayerData[player].score
        if (score > this.scoreMax || score < this.scoreMin) statePlayers.zeroScores()
      }
      // set new score limits and close modal
      this.stateSettings.action_setScoreLimits({ min: this.scoreMin, max: this.scoreMax })
      this.stateSettings.action_setScoreLimitModalVisibility(false)
    } else {
      this.showError = true
    }
  }

  validateInputs() {
    if (this.scoreMin >= this.scoreMax) return false
    else return true
  }

  onInputChange() {
    if (!this.scoreMin.toString() || !this.scoreMax.toString()) this.disabled = true
    else this.disabled = false
  }

  handleCancelBtn() {
    stateSettings.action_setScoreLimitModalVisibility(false)
  }

  mounted() {
    this.scoreMin = this.stateSettings.getMinScore
    this.scoreMax = this.stateSettings.getMaxScore
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
