<template>
  <div class="likes">
    <div class="like-header">猜你喜欢</div>
    <div class="list">
      <div class="list-item" v-for="(item, key) in list" :key="key">
        <img src="../../../assets/images/food.jpg" alt="">
        <div class="list-item-right">
          <div>
            <div class="title">
              辛明堂洞韩式芝士年糕火锅
            </div>
            <p>[万达广场]年糕火锅2人套餐</p>
          </div>
          <div class="item-bottom">
            <span>58元</span>
            <em>已售66666</em>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "like-list",
  data: () => {
    return {
      list: [1, 1, 1, 1, 1]
    };
  }
};
</script>

<style>
.likes {
  border-top: 10px #eee solid;
  padding: 0 10px;
}
.like-header {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #eee;
}
.list-item {
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}
.list-item img {
  width: 90px;
  height: 90px;
  margin-right: 10px;
}
.list-item-right {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
}
.list-item-right p {
  font-size: 12px;
  color: #666;
  margin-top: 5px;
}
.item-bottom span {
  color: #06c1ae;
  font-size: 18px;
}
.item-bottom em {
  float: right;
  font-size: 12px;
  font-style: normal;
  color: #666;
}
</style>
