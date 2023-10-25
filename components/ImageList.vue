<template>
  <div>
    <h1>Image Gallery</h1>
    <ul>
      <li v-for="image in images" :key="image.id">
        <router-link :to="'/image/' + image.id">{{ image.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { id: 1, name: 'Image 1', author: 'Author 1', src: 'assets/images/image1.jpg' },
        { id: 2, name: 'Image 2', author: 'Author 2', src: 'assets/images/image2.jpg' },
        // Добавьте другие изображения
      ],
    };
  },
};
</script>
