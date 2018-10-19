<template>
  <div class="hot-list">
    <FilmItem v-for="(item, key) in films" :key="key" isHot="1"></FilmItem>
  </div>
</template>
<script>
import FilmItem from './film-item.vue'
export default {
  name: "film-hot",
  components: {
    FilmItem
  },
  data: () => {
    return {
      films: [1, 1, 1, 1, 1]
    }
  }
};
</script>
<style>

</style>
