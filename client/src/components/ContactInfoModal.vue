<template>
  <div class="modal-container">
    <div class="modal">
      <button class="close-btn" @click="closeModal">X</button>
      <img :alt="contact.fullname" :src="image" />
      <h2>{{ contact.fullname }}</h2>
      <div class="contact-details">
        <div class="names">
          <h3><u>nickname:</u> "{{ contact.nickname }}"</h3>
          <h3><u>username:</u> {{ contact.username }}</h3>
        </div>
        <div class="contact-info">
          <p>Email: {{ contact.email }}</p>
          <p>Phone: 0{{ contact.phone }}</p>
          <p>Address: {{ contact.address }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactInfoModal",
  props: {
    contact: Object,
    image: String,
  },
  computed: {
    getGender() {
      return this.contact.is_female ? "👱‍♀️" : "🧔";
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style scoped>



.close-btn {
  position: absolute;
  top: 0;
  left: 0;
}

.contact-info {
  text-align: left;
  margin: 0 auto;
  width: 80%;
  font-size: 1.2rem;
}
.names {
  display: flex;
  justify-content: space-around;
}
</style>