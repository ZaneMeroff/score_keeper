<template>

  <div>

    <q-header elevated class="q-header">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu"></q-btn>
        <q-toolbar-title>Score Keeper</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      bordered
      overlay
      behavior="mobile"
      v-model="drawer"
      :dark="stateSettings.getDarkMode"
      :width="200"
    >
      <q-scroll-area class="fit">
        <q-list>

          <template v-for="(menuItem, index) in menuList">
            <q-item :key="index" @click="menuItem.onClick" clickable v-ripple>
              <q-item-section avatar>
                <q-icon :name="menuItem.icon"></q-icon>
              </q-item-section>
              <q-item-section>{{ menuItem.label }}</q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator"></q-separator>
          </template>

        </q-list>
      </q-scroll-area>
    </q-drawer>

    <!-- score limits modal -->
    <confirm-dialog 
      :showModal="stateSettings.getShowScoreLimitsModal"
      :text1="'Score Limits'"
      :inputType="'scoreLimits'"
      :currentScoreMin="stateSettings.getMinScore"
      :currentScoreMax="stateSettings.getMaxScore"
      :btn1Label="'SAVE'"
      :btn1Action="handleSaveScoreLimits"
      :btn2Label="'CANCEL'"
      :btn2Action="() => stateSettings.action_setScoreLimitModalVisibility(false)"
      @scoreLimitChange="updatePendingScoreLimits"
      @error="() => showErrorDialog = true"
    />

    <error-dialog 
      :showModal="showErrorDialog"
      :text="'Min Score must be less than Max Score'"
      @close="() => showErrorDialog = false"
    />

  </div>

</template>

<script lang="ts">

// Decorators
import { Component, Vue } from 'vue-property-decorator'

// Vuex
import { stateSettings, statePlayers } from '@/store/index'

// Components
import ConfirmDialog from './ConfirmDialog.vue'
import ErrorDialog from './ErrorDialog.vue'

@Component({
  components: {
    'confirm-dialog': ConfirmDialog,
    'error-dialog': ErrorDialog,
  }
})
export default class MenuDrawer extends Vue {

  stateSettings = stateSettings
  statePlayers = statePlayers

  drawer: boolean = false
  pendingMin: number = 0
  pendingMax: number = 0
  showErrorDialog: boolean = false

  // create typed for menuList item !!!
  menuList = [
    {
      icon: 'group_add',
      label: 'Adjust Players',
      onClick: () => console.log("Adjust Teams clicked!"),
      separator: true
    },
    {
      icon: 'sports_score',
      label: 'Score Limits',
      onClick: () => {
        this.stateSettings.action_setScoreLimitModalVisibility(true)
      },
      separator: true
    },
    {
      icon: 'restart_alt',
      // iconColor: 'secondary',
      label: 'Reset Score',
      onClick: () => this.statePlayers.action_zeroScores(),
      separator: true
    },
    {
      icon: stateSettings.getDarkMode ? 'dark_mode' : 'light_mode',
      // ^ not working!
      label: 'Toggle Theme',
      onClick: () => this.stateSettings.action_setDarkMode(),
      separator: true
    },
  ]

  handleSaveScoreLimits() {
    // check in any players have a score outside of the new score limits
    // if so, reset all player scores to zero
    for (const player in statePlayers.getPlayerData) {
      let score = statePlayers.getPlayerData[player].score
      if (score > this.pendingMax || score < this.pendingMin) statePlayers.zeroScores()
    }
    // set new score limits and close modal
    this.stateSettings.action_setScoreLimits({ min: this.pendingMin, max: this.pendingMax })
    this.stateSettings.action_setScoreLimitModalVisibility(false)
  }

  updatePendingScoreLimits(payload: { min: string, max: string }) {
    this.pendingMin = parseInt(payload.min)
    this.pendingMax = parseInt(payload.max)
  }
}
</script>

<style scoped>

  .q-header {
    background-color: #004eff;
  }
  
</style>