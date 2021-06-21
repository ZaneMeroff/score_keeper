<template>

  <div class="home">

    <HelloWorld msg="Score Keeper App 📎"/>
    <div v-ripple>Click Me</div>
    <q-btn>test button</q-btn>

  </div>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
