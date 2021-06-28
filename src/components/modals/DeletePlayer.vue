<template>

 <q-dialog :dark="true" v-model="showModal" persistent>
    <q-card class="q-card">

      <q-card-section>
        <!-- header -->
        <div class="text q-mb-sm">{{ `Delete ${getName}?` }}</div>

        <q-separator color="blue" class="q-mb-lg" inset></q-separator>
          
        <q-btn-group flat class="q-btn-group">
          <!-- yes button -->
          <q-btn
            flat
            class="q-btn"
            color="green"
            size="md"
            :label="'yes'"
            @click="handleYesBtn"
          />
          <!-- no button -->
          <q-btn
            flat
            class="q-btn"
            color="red"
            size="md"
            :label="'no'"
            @click="handleNoBtn"
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
import { statePlayers } from '@/store/index'

@Component
export default class DeletePlayer extends Vue {
  
  @Prop(String) private playerId!: string
  @Prop(Boolean) private showModal!: boolean

  statePlayers = statePlayers

  get getName() {
    return this.statePlayers.getPlayerData[this.playerId].name
  }

  handleYesBtn() {
    this.statePlayers.action_deletePlayer(this.playerId)
    this.$emit('close')
  }

  handleNoBtn() {
    this.$emit('close')
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
</style>