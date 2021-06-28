<template>

  <div>

    <q-item-section class="q-item-section">
      <div class="flex">
      <!-- edit btn -->
        <q-btn flat @click="() => showNameModal = true">
          <q-icon name="edit"></q-icon>
        </q-btn>
      <!-- player name -->
        <p class="player-name">{{ statePlayers.getPlayerData[playerId].name }}</p>
      </div>
      <!-- delete btn -->
      <q-btn flat @click="() => showConfirmDelete = true">
        <q-icon name="delete"></q-icon>
      </q-btn>
    </q-item-section>

    <!-- edit player name modal -->
    <player-name 
      :showModal="showNameModal"
      :playerId="playerId"
      @close="() => showNameModal = false"
    />

    <!-- confirm delete modal -->
    <confirm-dialog 
      :showModal="showConfirmDelete"
      :text1="`Delete ${statePlayers.getPlayerData[playerId].name}?`"
      :btn1Label="'YES'"
      :btn1Action="() => statePlayers.action_deletePlayer(playerId)"
      :btn2Label="'NO'"
      :btn2Action="() => showConfirmDelete = false"
    />

  </div>

</template>

<script lang="ts">

// Decorators
import { Component, Prop, Vue } from 'vue-property-decorator';

// Vuex
import { statePlayers } from '@/store/index'

// Components
import ConfirmDialog from './ConfirmDialog.vue'
import PlayerName from './modals/PlayerName.vue'

@Component({
  components: {
    'confirm-dialog': ConfirmDialog,
    'player-name': PlayerName
  }
})
export default class NameInput extends Vue {

  @Prop(String) private playerId!: string

  statePlayers = statePlayers
  
  showConfirmDelete: boolean = false

  showNameModal: boolean = false

  get getName() {
    return statePlayers.getPlayerData[this.playerId].name
  }
}
</script>

<style scoped>

  .q-item-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .player-name {
    font-size: 16px;
    padding-top: 5px;
    margin: 0px;
  }

</style> 