<template>
  <div>
    <IndexHeader></IndexHeader>
    <Categorys></Categorys>
    <LikeList></LikeList>
  </div>
</template>
<script>

import IndexHeader from './components/index-header.vue'
import Categorys from './components/categorys.vue'
import LikeList from './components/like-list.vue'
export default {
  name: 'index',
  components: {
    IndexHeader,
    Categorys,
    LikeList
  },
  data: () => {
      return {}
    }
}
</script>

<style>

</style>
