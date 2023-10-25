<template>
  <div>
    <button @click="goBack">Back to Gallery</button>
    <img :src="selectedImage.src" :alt="selectedImage.name" />
    <h2>{{ selectedImage.name }}</h2>
    <p>Author: {{ selectedImage.author }}</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedImage: null,
    };
  },
  created() {
    // Найдите изображение по id
    this.selectedImage = this.images.find((image) => image.id == this.id);
  },
  methods: {
    goBack() {
      this.$router.push('/');
    },
  },
};
</script>
