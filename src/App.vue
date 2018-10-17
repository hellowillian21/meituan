<template>
  <div id="app">
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
  name: 'app',
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
.swipe {
  height: 180px!important;
}
* {
  margin: 0;
  padding: 0;
}
.header {
  display: flex;
  align-items: center;
  height: 50px;
  background: #06c1ae;
  color: #fff;
  padding: 0 10px;
}
.header-left {
  margin-right: 10px;
}
.header-left span {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-right: 1px #fff solid;
  border-bottom: 1px #fff solid;
  margin-left: 5px;
  transform: rotate(45deg);
  position: relative;
  top: -2px;
}
.search {
  display: flex;
  align-items: center;
  flex: 1;
  height: 32px;
  background: rgba(0, 0, 0, 0.15);
  line-height: 32px;
  font-size: 12px;
  color: #68db68;
  padding: 0 10px;
  border-radius: 4px;
}
.search span {
  color: #fff;
  margin-right: 5px;
  font-size: 13px;
}
.header-right {
  margin-left: 10px;
  text-align: center;
}
.header-right span {
  font-size: 20px;
}
.header-right p {
  font-size: 12px;
}
.categorys {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
}
.categorys-item {
  width: 20%;
  text-align: center;
  margin-bottom: 10px;
}
.categorys-item span  {
  display: inline-block;
  width: 40px;
  height: 40px;
  background: #eee;
  border-radius: 50%;
  line-height: 40px;
  font-size: 18px;  
  color: #ffffff;
}
.categorys-item  p{
  font-size: 12px;
  color: #666;
  margin-top: 5px;
}
</style>
