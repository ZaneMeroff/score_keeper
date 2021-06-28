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
    <score-limits 
      :showModal="stateModals.getShowScoreLimitsModal"
    />

    <!-- reset score confirm modal -->
    <confirm
      :showModal="stateModals.getShowResetScoreConfirmModal"
      :text="'Reset all scores to zero?'"
      :onYes="() => {
        statePlayers.action_zeroScores()
        stateModals.action_setResetScoreConfirmModalVisibility(false)
      }"
      :onNo="() => stateModals.action_setResetScoreConfirmModalVisibility(false)"
    />

    <!-- delete players confirm modal -->
    <confirm
      :showModal="stateModals.getShowDeletePlayersConfirmModal"
      :text="'Delete all players?'"
      :onYes="() => {
        // do the thing here...
        stateModals.action_setDeletePlayersConfirmModalVisibility(false)
      }"
      :onNo="() => stateModals.action_setDeletePlayersConfirmModalVisibility(false)"
    />

  </div>

</template>

<script lang="ts">

// Decorators
import { Component, Vue } from 'vue-property-decorator'

// Vuex
import { stateModals, statePlayers, stateSettings } from '@/store/index'

// Components
import Confirm from './modals/Confirm.vue'
import ScoreLimits from './modals/ScoreLimits.vue'

@Component({
  components: {
    'confirm': Confirm,
    'score-limits': ScoreLimits
  }
})
export default class MenuDrawer extends Vue {

  stateModals = stateModals
  statePlayers = statePlayers
  stateSettings = stateSettings

  drawer: boolean = false

  // create typed for menuList item !!!
  menuList = [
    {
      icon: 'group_add',
      label: 'Add Players',
      onClick: () => console.log("Add Players clicked!"),
      separator: true
    },
    {
      icon: 'sports_score',
      label: 'Score Limits',
      onClick: () => {
        this.stateModals.action_setScoreLimitModalVisibility(true)
      },
      separator: true
    },
    {
      icon: 'restart_alt',
      // iconColor: 'secondary',
      label: 'Reset Score',
      onClick: () => {
        this.stateModals.action_setResetScoreConfirmModalVisibility(true)
      },
      separator: true
    },
    {
      icon: 'delete',
      // iconColor: 'secondary',
      label: 'Delete Players',
      onClick: () => {
        this.stateModals.action_setDeletePlayersConfirmModalVisibility(true)
      },
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
}
</script>

<style scoped>

  .q-header {
    background-color: #004eff;
  }
  
</style>