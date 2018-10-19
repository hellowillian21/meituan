<template>
  <router-link to="/film-detail">
    <div class="hot-item">
      <img src="../../../assets/images/you.jpg" alt="">
      <div class="hot-item-right">
        <div class="film-info">
          <h4>尤雨溪的成长历程</h4>
          <div class="film-score">
            观众评 <span>9.9</span>
          </div>
          <p>主演：尤雨溪，黄伟亮</p>
          <p>2018-10-19 本周五上映</p>
        </div>
        <button v-if="+isHot === 1" class="isHot">购票</button>
        <button v-if="+isHot === 0" class="isMost">预售</button>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "film-item",
  props: ["isHot"]
};
</script>

<style>
.hot-item {
  padding: 10px;
  display: flex;
}
.hot-item img {
  display: block;
  width: 64px;
  height: 90px;
  margin-right: 10px;
}
.hot-item-right {
  display: flex;
  border-bottom: 1px solid #eee;
  height: 90px;
  padding-bottom: 10px;
  padding-right: 20px;
  font-size: 13px;
  color: #666;
  flex: 1;
  align-items: center;
  justify-content: space-between;
}
.hot-item-right h4 {
  margin-bottom: 5px;
  font-size: 14px;
  color: #000;
}
.film-score {
  margin-bottom: 5px;
}
.film-score span {
  color: #faaf00;
  font-weight: bold;
}
.film-info p {
  line-height: 1.8;
}
.hot-item-right .isHot {
  padding: 0 10px;
  height: 27px;
  background: #f03d37;
  color: #fff;
  border-radius: 4px;
  border: none;
}
.hot-item-right .isMost {
  padding: 0 10px;
  height: 27px;
  background: #3c9fe6;
  color: #fff;
  border-radius: 4px;
  border: none;
}
</style>
