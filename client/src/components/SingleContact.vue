<template>
  <div class="contact-container">
    <img :alt="contact.fullname" :src="getImageSrc" />
    <h2>{{ contact.fullname }}</h2>
      <transition enter-active-class="fade-in" leave-active-class="fade-out">
    <div class="modal-container" v-if="isInfo">
      <ContactInfoModal
        :contact="contact"
        :image="getImageSrc"
        @closeModal="() => (this.isInfo = false)"
      />
    </div>
      </transition>
    <div class="btn-container">
      <button @click="() => (this.isInfo = true)">info</button>
      <button @click="deleteContact(contact.id)">delete</button>
    </div>
    <div v-if="error !== ''">
      <p class="error">{{error}}</p>
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
      error : ""
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
    }
  },
  methods: {
    deleteContact: async function (id) {
      try {
        await axios.delete(`http://localhost:3001/${id}`);
      this.$emit("deleteContact");
      } catch(err){
        this.error = err.message
      }
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