<template>
  <div id="app">
    <AllContacts />
  </div>
</template>

<script>
import AllContacts from "./components/AllContacts.vue";

export default {
  name: "App",
  components: {
    AllContacts,
  },
};
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
li {
  list-style: none;
}
img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
}
button {
  font-size: 2rem;
  background-color: #D77A61;
  color: #EFF1F3;
  padding: 5px 10px;
  margin: 4px 8px;
  border-radius: 12px;
  cursor: pointer;
}
</style>
