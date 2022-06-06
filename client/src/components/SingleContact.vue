<template>
  <div class="contact-container">
    <img :src="contact.image_url" alt="">
    

    
  </div>  
</template>

<script>
export default {

  props: {
    contact: {
      id: Number,
      fullName: String,
      userName: String,
      nickName: String,
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