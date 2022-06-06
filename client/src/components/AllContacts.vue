<template>
  <div class="contacts-container">
    <p v-if="!contacts.length">loading contacts...</p>
    <ul v-else>
      <li v-for="contact of contacts" :key="contact.id">
        <SingleContact
          :contact="contact" />
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import SingleContact from './SingleContact.vue'
export default {
  name: 'AllContacts',
  components: {
    SingleContact
  },
  data(){
    return {
      contacts: []
    }
  },
  mounted: async function(){
    const { data } = await axios.get('http://localhost:3001/')
    this.contacts = data
    console.log(this.contacts)
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
