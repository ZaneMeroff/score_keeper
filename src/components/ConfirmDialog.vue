<template>

 <q-dialog :dark="true" v-model="showModal" persistent>
    <q-card class="q-card">

      <!-- Header -->
      <q-card-section>
        <div class="q-mb-md">
          <!-- line 1 text -->
          <div class="text" v-if="text1">{{ text1 }}</div>
          <!-- line 2 text (optional) -->
          <div class="text q-mt-sm" v-if="text2">{{ text2 }}</div>
          <!-- text input (player name) -->
          <q-input 
            v-if="showTextInput" 
            v-model="textInput" 
            class="q-input" 
            maxlength="20"
            :dark="true" 
            :rules="[ val => !!val || '* Required' ]"
            @input="onTextInputChange"
          />
        </div>

        <q-btn-group outline class="flex flex-center">
          <!-- button 1 (yes) -->
          <q-btn
            flat
            class="q-btn"
            color="green"
            size="md"
            :disable="btn1Disabled"
            :label="btn1Label"
            @click="showTextInput ? handleBtn1() : btn1Action()"
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
  @Prop(Boolean) private showTextInput?: boolean
  @Prop(String) private playerName?: string
  
  @Prop(String) private text1!: string
  @Prop(String) private text2?: string

  @Prop(String) private btn1Label!: string
  @Prop(String) private btn2Label!: string

  @Prop(Function) private btn1Action!: Function
  @Prop(Function) private btn2Action!: Function

  textInput?: string = ''
  btn1Disabled: boolean = false

  handleBtn1() {
    this.$emit('nameChange', this.textInput)
    this.btn1Action()
  }

  onTextInputChange() {
    if (this.textInput!.length) this.btn1Disabled = false
    else this.btn1Disabled = true
  }

  mounted() {
    if (this.playerName) this.textInput = this.playerName 
  }
}
</script>

<style scoped>

  .q-card {
    background-color: #1e1e1e;
  }

  .q-btn {
    width: 100px;
  }

  .text {
    color: #FFF;
    text-align: center;
  }
</style>