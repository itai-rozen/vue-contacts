<template>
  <div class="contact-container">
    <img :src="getImageSrc" :alt="contact.fullname">
    <h2>{{contact.fullname}}</h2>
    <p>nickname: "{{contact.nickname}}"</p>
    <p>username: {{contact.username}}</p>
    <p>Email: {{contact.email}}</p>
    <p>Phone: {{contact.phone}}</p>
    <p>Address: {{contact.address}}</p>
    <p>Gender: {{getGender}}</p>
    <button>info</button>
    <button @click="deleteContact(contact.id)">delete</button>
  </div>  
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return {
      isInfo: false
    }
  },
  computed: {
    getGender(){
      return this.contact.is_female? '👱‍♀️' : '🧔'
    },
    getImageSrc(){
      if (!this.contact.image_url){
        return (this.isFemale)? 'assets/femaleAvatar.png' : 'assets/maleAvatar.png' 
      }
      return this.contact.image_url
    }
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
      isFemale: Boolean
    }
  },
  methods: {
    deleteContact: async function(id){
      await axios.delete(`http://localhost:3001/${id}`)
    }
  }
}
</script>

<style scoped>

</style>