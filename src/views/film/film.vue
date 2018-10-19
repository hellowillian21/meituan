<template>
  <div class="film-wrapper">
    <div class="film-head">
      <FilmHeader></FilmHeader>

      <div class="film-tabs">
        <div class="film-tabcell" :class="{active: currentTab === 0}" @click="handleTabs(0)">
          正在热映
        </div>
        <div class="film-tabcell" :class="{active: currentTab === 1}" @click="handleTabs(1)">
          即将上映
        </div>
      </div>
    </div>

    <div class="film-content">
      <div class="film-panel-1" v-if="currentTab === 0">
        <FilmHot></FilmHot>
      </div>
      <div class="film-panel-2" v-if="currentTab === 1">
        <FilmMost></FilmMost>
      </div>
    </div>
    <div class="film-footer">
      <div class="film-footer-item">
        <span class="iconfont icon-dianying"></span>
        <p>电影</p>
      </div>
      <div class="film-footer-item">
        <span class="iconfont icon-Hotel"></span>
        <p>酒店</p>
      </div>
      <div class="film-footer-item">
        <span class="iconfont icon-wode"></span>
        <p>我的</p>
      </div>
    </div>
  </div>
</template>

<script>
import FilmHeader from "./components/film-header.vue"
import FilmHot from "./components/film-hot.vue"
import FilmMost from "./components/film-most.vue"
export default {
  name: "film",
  data: () => {
    return {
      currentTab: 0
    };
  },
  components: {
    FilmHeader,
    FilmHot,
    FilmMost
  },
  methods: {
    handleTabs: function(index) {
      this.currentTab = index;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.film-wrapper {
  padding-top: 100px;
  padding-bottom: 50px;
}
.film-head {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9;

}
.film-tabs {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #eee;
  background: #fff;
}
.film-tabs .active {
  color: red;
  border-bottom: 2px solid red;
}
.film-tabcell {
  margin: 0 20px;
  line-height: 44px;
  font-weight: bold;
}
.film-footer {
  height: 48px;
  border-top: 1px #eee solid;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
}
.film-footer-item {
text-align: center;
}
.film-footer-item span {
  font-size: 22px;
}
.film-footer-item p {
  font-size: 12px;
  line-height: 1.8;
}
</style>
