<template>
  <div class="header">
    <div class="header-left">
      广州<span></span>
    </div>

    <div class="search">
      <span class="iconfont icon-sousuo"></span>
      输入关键字
    </div>

    <div class="header-right">
      <span class="iconfont icon-wode"></span>
      <p>我的</p>
    </div>
  </div>

</template>

<script>
export default {
  name: "index-header"
};
</script>

<style>
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
</style>
