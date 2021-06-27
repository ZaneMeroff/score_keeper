<template>

 <q-dialog :dark="true" v-model="showModal" persistent>
    <q-card class="q-card">

      <q-card-section>
        <div class="q-mb-md">

          <!-- line 1 text -->
          <div class="text" v-if="text1">{{ text1 }}</div>
          <!-- line 2 text (optional) -->
          <div class="text q-mt-sm" v-if="text2">{{ text2 }}</div>
          
          <!-- player name text input -->
          <q-input 
            v-if="inputType === 'name'" 
            v-model="textInput" 
            maxlength="20"
            style="font-size: 16px"
            :dark="true" 
            :rules="[ val => !!val || '* Required' ]"
            @input="onTextInputChange"
          />

          <div v-if="inputType === 'scoreLimits'">
            <!-- min score number input -->
            <div class="min-max-text q-mt-lg">min</div>
            <q-input  
              v-model="scoreMin" 
              v-model.number="scoreMin" 
              style="font-size: 16px"
              type="number"
              :dark="true" 
              :rules="[ val => !!val || '* Required' ]"
            />
            <!-- max score number input -->
            <div class="min-max-text">max</div>
            <q-input 
              v-model="scoreMax" 
              v-model.number="scoreMax" 
              style="font-size: 16px"
              type="number"
              :dark="true" 
              :rules="[ val => !!val || '* Required' ]"
            />
          </div>

        </div>

        <q-btn-group flat class="q-btn-group">
          <!-- button 1 (yes) -->
          <q-btn
            flat
            class="q-btn"
            color="green"
            size="md"
            :disable="btn1Disabled"
            :label="btn1Label"
            @click="inputType === 'name' ? handleNameInputBtn1() : inputType === 'scoreLimits' ? handleScoreLimitBtn1() : btn1Action()"
          />
          <!-- button 2 (no) -->
          <q-btn
            flat
            class="q-btn"
            color="red"
            size="md"
            :label="btn2Label"
            @click="btn2Action"
          />
        </q-btn-group>
      </q-card-section>
    </q-card>
  </q-dialog>

</template>

<script lang="ts">

// Decorators
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ConfirmDialog extends Vue {
  
  @Prop(Boolean) private showModal!: boolean
  @Prop(String) private inputType?: string
  @Prop(String) private playerName?: string
  @Prop(Number) private currentScoreMin?: number
  @Prop(Number) private currentScoreMax?: number
  
  @Prop(String) private text1!: string
  @Prop(String) private text2?: string

  @Prop(String) private btn1Label!: string
  @Prop(String) private btn2Label!: string

  @Prop(Function) private btn1Action!: Function
  @Prop(Function) private btn2Action!: Function

  textInput?: string = ''
  scoreMin?: number = 0
  scoreMax?: number = 0
  btn1Disabled: boolean = false

  handleNameInputBtn1() {
    this.$emit('nameChange', this.textInput)
    this.btn1Action()
  }

  handleScoreLimitBtn1() {
    if (this.scoreMin! < this.scoreMax!) {
      this.$emit('scoreLimitChange', { min: this.scoreMin, max: this.scoreMax })
      this.btn1Action()
    } else {
      this.$emit('error')
    }
  }

  onTextInputChange() {
    if (this.textInput!.length) this.btn1Disabled = false
    else this.btn1Disabled = true
  }

  mounted() {
    if (this.playerName) this.textInput = this.playerName 
    if (this.currentScoreMin) this.scoreMin = this.currentScoreMin
    if (this.currentScoreMax) this.scoreMax = this.currentScoreMax
  }
}
</script>

<style scoped>

  .q-card {
    background-color: #1e1e1e;
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

  .min-max-text {
    color: #979797;
  }
</style>