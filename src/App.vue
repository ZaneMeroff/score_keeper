<template>

  <q-layout view="hHh Lpr lff" container style="height: 100vh" class="shadow-2">
    <menu-drawer />
    <router-view />
  </q-layout>

</template>

<script lang="ts">

import { Component, Vue } from 'vue-property-decorator';
import MenuDrawer from '@/components/MenuDrawer.vue'

@Component({
  components: {
    'menu-drawer' : MenuDrawer,
  }
})
export default class App extends Vue {

}

</script>


<style></style>
