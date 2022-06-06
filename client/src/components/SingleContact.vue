<template>
  <div class="contact-container">
    <img :src="contact.image_url" :alt="contact.fullname">
    <h2>{{contact.fullname}}</h2>
    <p>nickname: "{{contact.nickname}}"</p>
    <p>username: {{contact.username}}</p>
    <p>Email: {{contact.email}}</p>
    <p>Phone: {{contact.phone}}</p>
    <p>Address: {{contact.address}}</p>
    <p>Gender: {{getGender}}</p>
    <button>info</button>
    <button>delete</button>
  </div>  
</template>

<script>
export default {
  data(){
    return {

    }
  },
  computed: {
    getGender(){
      return this.contact.is_female? '👱‍♀️' : '🧔'
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
  }
}
</script>

<style scoped>

</style>