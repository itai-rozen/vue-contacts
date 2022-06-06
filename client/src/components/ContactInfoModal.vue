<template>
  <div class="contact-modal-container">
    <div class="contact-modal"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
  .contact-modal-container {
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
}
.contact-modal {
  height: 70%;
  width: 80%;
}
</style>