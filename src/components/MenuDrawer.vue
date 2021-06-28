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

    <score-limits 
      :showModal="stateSettings.getShowScoreLimitsModal"
    />

  </div>

</template>

<script lang="ts">

// Decorators
import { Component, Vue } from 'vue-property-decorator'

// Vuex
import { stateSettings, statePlayers } from '@/store/index'

// Components
import ScoreLimits from './modals/ScoreLimits.vue'

@Component({
  components: {
    'score-limits': ScoreLimits
  }
})
export default class MenuDrawer extends Vue {

  stateSettings = stateSettings
  statePlayers = statePlayers

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
      icon: 'delete',
      // iconColor: 'secondary',
      label: 'Delete All Players',
      onClick: () => console.log("Delete All Players clicked!"),
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