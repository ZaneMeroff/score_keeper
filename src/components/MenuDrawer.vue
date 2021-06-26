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
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator :key="'sep' + index" v-if="menuItem.separator"></q-separator>
          </template>

        </q-list>
      </q-scroll-area>
    </q-drawer>

  </div>

</template>

<script lang="ts">

// Decorators
import { Component, Vue } from 'vue-property-decorator'

// Vuex
import { stateSettings, statePlayers } from '@/store/index'

@Component
export default class MenuDrawer extends Vue {

  stateSettings = stateSettings
  statePlayers = statePlayers

  drawer: boolean = false
  menuList = [
    {
      icon: 'group_add',
      label: 'Number of Teams',
      onClick: () => console.log("Adjust Teams clicked!"),
      separator: true
    },
    {
      icon: 'groups',
      label: 'Teams or Players',
      onClick: () => console.log("Teams or Players clicked!"),
      separator: true
    },
    {
      icon: 'restart_alt',
      // iconColor: 'secondary',
      label: 'Reset Score',
      onClick: () => statePlayers.action_zeroScores(),
      separator: true
    },
    {
      icon: stateSettings.getDarkMode ? 'dark_mode' : 'light_mode',
      // ^ not working!
      label: 'Toggle Theme',
      onClick: () => stateSettings.toggleDarkMode(),
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