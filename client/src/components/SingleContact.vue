<template>
  <div class="contact-container">
    <img :alt="contact.fullname" :src="getImageSrc" />
    <h2>{{ contact.fullname }}</h2>
    <div class="btn-container">
      <button @click="() => (this.isInfo = true)">info</button>
      <button @click="deleteContact(contact.id)">delete</button>
    </div>
    <div v-if="isInfo">
      <ContactInfoModal
        :contact="contact"
        :image="getImageSrc"
        @closeModal="() => (this.isInfo = false)"
      />
    </div>
  </div>
</template>

<script>
import ContactInfoModal from "./ContactInfoModal.vue";
import axios from "axios";
export default {
  components: {
    ContactInfoModal,
  },
  data() {
    return {
      isInfo: false,
    };
  },
  computed: {
    getImageSrc() {
      if (!this.contact.image_url) {
        return this.contact.is_female ? "/female.png" : "/male.png";
      }
      return this.contact.image_url;
    },
  },
  props: {
    contact: {
      id: Number,
      fullname: String,
      username: String,
      nickname: String,
      phone: Number,
      email: String,
      additional: String,
      address: String,
      image_url: String,
      isFemale: Boolean,
    },
  },
  methods: {
    deleteContact: async function (id) {
      await axios.delete(`http://localhost:3001/${id}`);
      this.$emit("deleteContact");
    },
  },
};
</script>

<style scoped>
.contact-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #d8b4a0;
  border-radius: 12px;
  border: 2px solid black;
  margin: 10px;
  padding: 5px 10px;
}
img {
  align-self: baseline;
}
</style>