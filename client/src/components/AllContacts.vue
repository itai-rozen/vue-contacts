<template>
  <div class="contacts-container">
    <p v-if="!contacts.length">loading contacts...</p>
    <ul v-else>
      <transition-group
        enter-active-class="animate__animated animate__bounceInUp"
        leave-active-class="animate__animated animate__bounceOutDown"
      >
        <li v-for="contact of contacts" :key="contact.id">
          <SingleContact
            :contact="contact"
            @deleteContact="() => renderContacts()"
          />
        </li>
      </transition-group>
    </ul>
    <button @click="addContact">add contact</button>
  </div>
</template>

<script>
import axios from "axios";
import SingleContact from "./SingleContact.vue";
export default {
  name: "AllContacts",
  components: {
    SingleContact,
  },
  data() {
    return {
      contacts: [],
      renderToggle: false,
    };
  },
  mounted: function () {
    this.getContacts();
    console.log(this.contacts);
  },
  methods: {
    async addContact() {
      await axios.post("http://localhost:3001");
      this.getContacts();
    },
    async getContacts() {
      const { data } = await axios.get("http://localhost:3001/");
      this.contacts = data;
    },
    renderContacts() {
      console.log("clicked!");
      this.getContacts();
    },
  },
  watch: {
    renderToggle: function () {
      this.getContacts();
    },
  },
};
</script>

<style scoped>
</style>
