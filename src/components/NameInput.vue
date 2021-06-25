<template>

  <div>

    <q-item-section class="q-item-section">
    
      <q-item>{{ statePlayers.getPlayerData[playerId].name }}</q-item>
    
      <q-btn-group outline class="flex flex-center" spread>
        
        <!-- edit button -->
        <q-btn flat class="q-btn">
          <q-icon name="edit"></q-icon>
        </q-btn>
        
        <!-- delete button -->
        <q-btn flat class="q-btn" @click="() => showConfirmDelete = true">
          <q-icon name="delete"></q-icon>
        </q-btn>

    </q-btn-group>

    </q-item-section>

    <!-- confirm delete modal -->
    <confirm-dialog 
      :showModal="showConfirmDelete"
      :text1="`Delete ${statePlayers.getPlayerData[playerId].name}?`"
      :btn1="() => statePlayers.action_deletePlayer(playerId)"
      :btn2="() => showConfirmDelete = false"
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

@Component({
  components: {
    'confirm-dialog': ConfirmDialog,
  }
})
export default class NameInput extends Vue {

  @Prop(String) private playerId!: string

  statePlayers = statePlayers
  
  showConfirmDelete: boolean = false
}
</script>

<style scoped>

  .q-item-section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }

  .q-btn {
    height: 40px;
    width: 40px;
  }

</style> 