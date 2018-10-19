<template>
  <div>
    <div class="date-list">
      <div class="date-list-wrap">
        <div class="date-item" :class="{active: key === currentDate}" v-for="(item, key) in this.dates" :key="key" @click="handleDateChange(key)">
          {{item}}
        </div>
      </div>
    </div>

    <div class="film-extra">
      <div class="film-extra-item" @click="handleClick(0)">
        全程
      </div>
      <div class="film-extra-item" @click="handleClick(1)">
        品牌
      </div>
      <div class="film-extra-item" @click="handleClick(2)">
        特色
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dates"],
  data: () => {
    return {
      currentDate: 0
    }
  },
  methods: {
    handleClick: function(){
      // 点击的操作是动态的，由外部的事件决定
      this.$emit("showlayer");
    },
    handleDateChange: function(index){
      this.currentDate = index;
    },
  },
  mounted: function(){
    //console.log(this)
  }
}
</script>

<style>
.date-list {
  height: 43px;
  border-bottom: 1px solid #eee;
  line-height: 43px;
  font-size: 13px;
  color: #666;
  width: 100%;
  overflow-x: auto;
  text-align: center;
}
.date-list-wrap {
  display: flex;
}
.date-item {
  width: 115px;
  margin-left: 5px;
  flex-shrink: 0;
}
.date-list .active {
  color: red;
  border-bottom: 1px solid red;
}
.film-extra {
  height: 43px;
  /* line-height: 43px; */
  padding: 10px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #e8e8e8;
}
.film-extra-item {
  flex: 1;
  text-align: center;
  border-right: 1px solid #e8e8e8;
}
.film-extra-item:last-child {
  border-right: none;
}
.film-extra-item::after {
  display: inline-block;
  content: "";
  width: 0;
  height: 0;
  border-right: 6px solid transparent;
  border-left: 6px solid transparent;
  border-top: 6px solid #e8e8e8;
  position: relative;
  top: -2px;
}
</style>
