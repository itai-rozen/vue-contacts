<template>
  <div id="app">
    <AllContacts />
  </div>
</template>

<script>
import AllContacts from './components/AllContacts.vue'

export default {
  name: 'App',
  components: {
    AllContacts
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
