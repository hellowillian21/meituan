<template>
  <div class="most-wrapper">
    <div class="most-title">近期最受期待</div>
    <div class="most-top-list">
      <div class="most-top-content">
        <div class="most-top-item" v-for="(item, key) in topItems" :key="key" >
          <img src="https://p1.meituan.net/170.230/movie/737191b8a80e0ecb3df0b9cf3209ec715864286.jpg" alt="">
          <div class="top-item-star">
            <span>❤</span>
          </div>
          <div class="top-item-text">
            12321想看
          </div>
          <div class="top-item-title">
            毒液毒液毒液毒液毒液
          </div>
          <p>10月26号</p>
        </div>
      </div>
    </div>

    <div class="most-btm-list">
      <div class="most-title">10月15日 周五</div>
      <FilmItem v-for="(item, key) in topItems" :key="key" isHot="0"></FilmItem>
    </div>
  </div>
</template>

<script>
import FilmItem from './film-item.vue'
export default {
  components: {
    FilmItem
  },
  data: () => {
    return {
      topItems: [1,1,1,1,1,1,1,1,1,1]
    }
  }
}
</script>

<style>
.most-wrapper {
  padding: 0 10px;
}
.most-title {
  padding: 10px 0;
  font-size: 13px;
  color: #333;
}
.most-top-list {
  width: 100%;
  box-sizing: border-box;
  overflow-x: auto;
}
.most-top-content {
  display: flex;
}
.most-top-item {
  width: 85px;
  position: relative;
  margin: 0 5px;
}
.most-top-item img {
  display: block;
  width: 100%;
}
.top-item-star {
  position: absolute;
  top: 0;
  left: 0;
  width: 28px;
  height: 28px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0 0 10px 0;
  text-align: center;
  line-height: 28px;
}
.top-item-star span {
  color: #eee;
}
.top-item-text {
  position: absolute;
  left: 0;
  top: 99px;
  background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,1));
  font-size: 12px;
  color: orange;
  width: 100%;
  padding: 2px 10px;
  overflow: hidden;
  box-sizing: border-box;
}
.top-item-title {
  font-weight: bold;
  line-height: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 13px;
}
.most-top-item p {
  font-size: 13px;
  color: #666;
}

.most-btm-list {

}
</style>
