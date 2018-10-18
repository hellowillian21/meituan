<template>
    <mt-swipe class="swipe" :auto="0">
        <mt-swipe-item>
            <div class="categorys">
                <div class="categorys-item" v-for="(item, key) in categorys" :key="key">
                  <router-link :to="item.path">
                    <span :class="item.icon" :style="item.bg"></span>
                    <p class="">{{item.text}}</p>
                  </router-link>  
                </div>
            </div>
        </mt-swipe-item>
        <mt-swipe-item>
            <div class="categorys">
                <div class="categorys-item" v-for="(item, key) in categorys" :key="key">
                    <router-link :to="item.path">
                      <span :class="item.icon" :style="item.bg"></span>
                      <p class="">{{item.text}}</p>
                  </router-link> 
                </div>
            </div>
        </mt-swipe-item>
    </mt-swipe>

     
</template>

<script>
export default {
    name: 'categorys',
    data: () => {
      return {
        categorys: [
           {
            icon: "iconfont icon-meishi",
            text: "美食",
            bg: "background: #fd9d21",
            path: ""
          },
          {
            icon: "iconfont icon-dianying",
            text: "电影",
            bg: "background: #ff6767",
            path: "/film"
          },
          {
            icon: "iconfont icon-Hotel",
            text: "酒店",
            bg: "background: #8a90fa",
            path: ""
          },
          {
            icon: "iconfont icon-yule",
            text: "娱乐",
            bg: "background: #fed030",
            path: ""
          },
          {
            icon: "iconfont icon-waimai-",
            text: "外卖",
            bg: "background: #fd9d21",
            path: ""
          },
          {
            icon: "iconfont icon-meishi",
            text: "美食",
            bg: "background: #fd9d21",
            path: ""
          },
          {
            icon: "iconfont icon-dianying",
            text: "电影",
            bg: "background: #ff6767",
            path: ""
          },
          {
            icon: "iconfont icon-Hotel",
            text: "酒店",
            bg: "background: #8a90fa",
            path: ""
          },
          {
            icon: "iconfont icon-yule",
            text: "娱乐",
            bg: "background: #fed030",
            path: ""
          },
          {
            icon: "iconfont icon-waimai-",
            text: "外卖",
            bg: "background: #fd9d21",
            path: ""
          }
        ]
      }
    }
}
</script>

<style>
.swipe {
  height: 180px!important;
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

