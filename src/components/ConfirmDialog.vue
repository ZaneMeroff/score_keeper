<template>

 <q-dialog dark v-model="showModal" persistent>
    <q-card class="dialog-card">

      <!-- Header -->
      <q-card-section>
        <div class="q-mb-md">
          <div class="text" v-if="text1">{{ text1 }}</div>
          <div class="text q-mt-md" v-if="text2">{{ text2 }}</div>
        </div>

        <q-btn-group outline class="flex flex-center" spread>
          <!-- button 1 (yes) -->
          <q-btn
            flat
            size="md"
            icon="fas fa-check"
            @click="btn1"
            color="green"
            label="YES"
            class="hover-positive"
          />
          <!-- button 2 (no) -->
          <q-btn
            flat
            size="md"
            icon="fas fa-times"
            @click="btn2"
            color="red"
            label="NO"
            class="hover-negative"
          />
        </q-btn-group>
      </q-card-section>
    </q-card>
  </q-dialog>

</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ConfirmDialog extends Vue {
  
  @Prop(Boolean) private showModal!: boolean
  
  @Prop(String) private text1!: string
  @Prop(String) private text2?: string
  @Prop() private btn1!: any
  @Prop() private btn2!: any
}
</script>

<style scoped></style>