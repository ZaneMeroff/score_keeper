<template>

  <div>

    <q-header elevated :style="stateSettings.getDarkMode ? 'background-color: #000' : 'background-color: #FFF'">
      <q-toolbar>
        <q-btn flat :style="stateSettings.getDarkModeText" @click="drawer = !drawer" round dense icon="menu"></q-btn>
        <q-toolbar-title :style="stateSettings.getDarkModeText">Score Keeper</q-toolbar-title>
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
      @close="drawer = false"
    />

    <!-- add players modal -->
    <add-players
      :showModal="stateModals.getShowAddPlayersModal"
      @close="drawer = false"
    />

    <!-- reset score confirm modal -->
    <confirm
      :showModal="stateModals.getShowResetScoreModal"
      :text="'Reset all scores to zero?'"
      :onYes="() => {
        statePlayers.action_zeroScores()
        stateModals.action_resetScoreModalVisibility(false)
        drawer = false
      }"
      :onNo="() => {
        stateModals.action_resetScoreModalVisibility(false)
        drawer = false
      }"
    />

    <!-- delete players confirm modal -->
    <confirm
      :showModal="stateModals.getShowDeletePlayersModal"
      :text="'Delete all players?'"
      :onYes="() => {
        statePlayers.action_deleteAllPlayers()
        stateModals.action_deletePlayersModalVisibility(false)
        drawer = false
      }"
      :onNo="() => {
        stateModals.action_deletePlayersModalVisibility(false)
        drawer = false
      }"
    />

    <!-- clear data confirm modal -->
    <confirm
      :showModal="stateModals.getShowClearDataModal"
      :text="'Clear all app data?'"
      :onYes="() => {
        handleClearData()
        drawer = false
      }"
      :onNo="() => {
        stateModals.action_clearDataModalVisibility(false)
        drawer = false
      }"
    />

  </div>

</template>

<script lang="ts">

// Decorators
import { Component, Vue } from 'vue-property-decorator'

// Vuex
import { stateModals, statePlayers, stateSettings } from '@/store/index'

// Components
import AddPlayers from './modals/AddPlayers.vue'
import Confirm from './modals/Confirm.vue'
import ScoreLimits from './modals/ScoreLimits.vue'

// Types
import { MenuItem } from '@/types/menu'

// Utils
import localforage from 'localforage'

@Component({
  components: {
    'add-players': AddPlayers,
    'confirm': Confirm,
    'score-limits': ScoreLimits
  }
})
export default class MenuDrawer extends Vue {

  stateModals = stateModals
  statePlayers = statePlayers
  stateSettings = stateSettings
  
  drawer: boolean = false

  async handleClearData() {
    await localforage.clear()
      .then(() => location.reload())
      .catch(err => window.alert(`Whoops, an error occured: ${err}`))
  }

  menuList: MenuItem[] = [
    {
      icon: 'group_add',
      label: 'Add Players',
      onClick: () => {
        this.stateModals.action_addPlayersModalVisibility(true)
      },
      separator: true
    },
    {
      icon: 'sports_score',
      label: 'Score Limits',
      onClick: () => {
        this.stateModals.action_scoreLimitModalVisibility(true)
      },
      separator: true
    },
    {
      icon: 'restart_alt',
      label: 'Zero Scores',
      onClick: () => {
        this.stateModals.action_resetScoreModalVisibility(true)
      },
      separator: true
    },
    {
      icon: 'delete',
      label: 'Delete Players',
      onClick: () => {
        this.stateModals.action_deletePlayersModalVisibility(true)
      },
      separator: true
    },
    {
      icon: 'dark_mode',
      label: 'Toggle Colors',
      onClick: () => {
        this.stateSettings.action_setDarkMode()
      },
      separator: true
    },
    {
      icon: 'phonelink_erase',
      label: 'Clear Data',
      onClick: () => {
        this.stateModals.action_clearDataModalVisibility(true)
      },
      separator: true
    },
  ]
}
</script>