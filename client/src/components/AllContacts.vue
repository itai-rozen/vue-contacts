<template>
  <div class="contacts-container">
    <p v-if="!contacts.length">loading contacts...</p>
    <ul v-else>
      <transition-group
        enter-active-class="animate__animated animate__bounceInUp"
        leave-active-class="animate__animated animate__bounceOutDown"
      >
        <li v-for="contact of contacts" :key="contact.id">
          <SingleContact :contact="contact" @deleteContact="getContacts" />
        </li>
      </transition-group>
    </ul>
    <button @click="() => (this.showAddForm = true)">add contact</button>
    <transition enter-active-class="fade-in" leave-active-class="fade-out">
      <div v-if="showAddForm" class="modal-container">
        <AddContact
          @closeModal="() => (this.showAddForm = false)"
          @addContact="getContacts"
        />
      </div>
    </transition>
    <div v-if="error !== ''">
      <p class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import AddContact from "./AddContact.vue";
import SingleContact from "./SingleContact.vue";
export default {
  name: "AllContacts",
  components: {
    SingleContact,
    AddContact,
  },
  data() {
    return {
      contacts: [],
      showAddForm: false,
      error: "",
    };
  },
  mounted: function () {
    this.getContacts();
  },
  methods: {
    async getContacts() {
      try {
        const { data } = await axios.get("http://localhost:3001/");
        this.contacts = data;
      } catch (err) {
        this.error = err.message;
      }
    },
  },
};
</script>

<style scoped>
</style>
