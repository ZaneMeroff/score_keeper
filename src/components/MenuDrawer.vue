<template>

  <div>

    <q-header elevated class="bg-black">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu"></q-btn>
        <q-toolbar-title>Score Keeper</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      bordered
      dark
      overlay
      behavior="mobile"
      v-model="drawer"
      :width="200"
    >
      <q-scroll-area class="fit">
        <q-list>

          <template v-for="(menuItem, index) in menuList">
            <q-item :key="index" clickable :active="menuItem.label === 'Outbox'" v-ripple>
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
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MenuDrawer extends Vue {

  drawer: boolean = false
  menuList = [
    {
      icon: 'dark_mode',
      label: 'Toggle Theme',
      separator: true
    },
    {
      icon: 'groups',
      label: 'Adjust Teams',
      separator: true
    },
    {
      icon: 'restart_alt',
      iconColor: 'primary',
      label: 'Reset',
      separator: true
    }
  ]

}
</script>

<style scoped></style>