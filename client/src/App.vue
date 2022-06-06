<template>
  <div id="app">
    <h1 class="header">My Contacts</h1>
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
body {
  background-color: #223843;
}

.header {
  color: #eff1f3;
}
li {
  list-style: none;
}
img {
  border-radius: 50%;
  width: 100px;
  height: 100px;
}
button, input[type='submit'] {
  font-size: 2rem;
  background-color: #d77a61;
  color: #eff1f3;
  padding: 5px 10px;
  margin: 4px 8px;
  border-radius: 12px;
  cursor: pointer;
}

.modal-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.modal {
  padding: 15px;
  height: 70%;
  width: 80%;
  background-color: #EFF1F3;
  position: relative;
  border-radius: 5px;
}

.error {
  background-color: white;
  color: red;
  padding: 5px 10px;
  font-size: 1.5rem;
  z-index: 3;
  margin: 0 auto;
  text-align: center;
  border: 3px solid black;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.fade-in {
  animation: fade ease-in 0.3s;
}
.fade-out {
  animation: fade ease-out 0.3s reverse;
}
</style>
