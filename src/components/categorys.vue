<template>
    <mt-swipe class="swipe" :auto="0">
        <mt-swipe-item>
            <div class="categorys">
                <div class="categorys-item" v-for="(item, key) in categorys" :key="key">
                    <span :class="item.icon" :style="item.bg"></span>
                    <p class="">{{item.text}}</p>
                </div>
            </div>
        </mt-swipe-item>
        <mt-swipe-item>
            <div class="categorys">
                <div class="categorys-item" v-for="(item, key) in categorys" :key="key">
                    <span :class="item.icon" :style="item.bg"></span>
                    <p class="">{{item.text}}</p>
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
            bg: "background: #fd9d21"
          },
          {
            icon: "iconfont icon-dianying",
            text: "电影",
            bg: "background: #ff6767"
          },
          {
            icon: "iconfont icon-Hotel",
            text: "酒店",
            bg: "background: #8a90fa"
          },
          {
            icon: "iconfont icon-yule",
            text: "娱乐",
            bg: "background: #fed030"
          },
          {
            icon: "iconfont icon-waimai-",
            text: "外卖",
            bg: "background: #fd9d21"
          },
          {
            icon: "iconfont icon-meishi",
            text: "美食",
            bg: "background: #fd9d21"
          },
          {
            icon: "iconfont icon-dianying",
            text: "电影",
            bg: "background: #ff6767"
          },
          {
            icon: "iconfont icon-Hotel",
            text: "酒店",
            bg: "background: #8a90fa"
          },
          {
            icon: "iconfont icon-yule",
            text: "娱乐",
            bg: "background: #fed030"
          },
          {
            icon: "iconfont icon-waimai-",
            text: "外卖",
            bg: "background: #fd9d21"
          }
        ]
      }
    }
}
</script>

<style>

</style>

