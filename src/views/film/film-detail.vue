<template>
  <div>
    <div class="detail-header">
      <span></span>尤雨溪的成长历程
    </div>
    <div class="detail-info">
      <div class="detail-info-bg">
        <img src="http://p0.meituan.net/148.208/movie/238de53af8fd65ed76fea870cfc6a260287400.jpg" alt="">
      </div>
      <div class="detail-info-content">
        <img src="http://p0.meituan.net/148.208/movie/238de53af8fd65ed76fea870cfc6a260287400.jpg" alt="">
        <div class="info-content-right">
          <div class="info-content-text">
            <h4>尤雨溪的成长历程</h4>
            <div class="summary">youyuxi huangweiliang</div>
            <p>暂无评分</p>
            <p>喜剧,动作</p>
            <p>美国/116分钟</p>
            <p>2018-10-19大陆上映</p>
          </div>
          <span class="arrow"></span>
        </div>
      </div>
    </div>

    <FilmDetailHeader :dates="dates" @showlayer="handleShowLayer"></FilmDetailHeader>

    <div class="detail-layer" :class="{active: showLayer}">
      deteil layer
    </div>
  </div>
</template>

<script>
import FilmDetailHeader from './components/film-detail-header.vue'
export default {
  methods: {
    handleShowLayer: function (index) {
      this.showLayer = true
    }
  },
  components: {
    FilmDetailHeader
  },
 data: () => {
   return {
     showLayer: false,
     currentDate: 0,
     dates: [
       "今天10月29日",
       "今天10月30日",
       "今天11月1日",
       "今天11月2日",
       "今天11月3日",
       "今天11月4日",
       "今天11月5日"
     ]
   }
 }
}
</script>

<style>
.detail-header {
  background: #06c1ae;
  position: relative;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
}
.detail-header span {
  display: block;
  width: 15px;
  height: 15px;
  border-bottom: 1px solid #fff;
  border-left: 1px solid #fff;
  position: absolute;
  top: 50%;
  left: 15px;
  margin-top: -8px;
  transform: rotate(45deg);
}
.detail-info {
  height: 190px;
  /* padding: 20px; */
  background: #666;
  /* box-sizing: border-box; */
  overflow: hidden;
  position: relative;
}
.detail-info-bg {
  width: 100%;
  height: 100%;
}
.detail-info-bg img {
  display: block;
  width: 100%;
  filter: blur(20px)
}
.detail-info-content {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  display: flex;
  padding: 20px;
  box-sizing: border-box;
}
.detail-info-content img {
  width: 110px;
  margin-right: 10px;
}
.info-content-text h4 {
  font-size: 18px;
}
.info-content-text .summary {
  font-size: 12px;
  line-height: 2;
}
.info-content-text p {
  font-size: 12px;
  line-height: 2;
}
.detail-info-content span {
  display: block;
  width: 10px;
  height: 10px;
  border-right: 1px solid #fff;
  border-bottom: 1px solid #fff;
  transform: rotate(-45deg);
}
.info-content-right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* 弹层的样式 */
.detail-layer {
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9;
}
.detail-layer.active {
  display: block;
}
</style>
