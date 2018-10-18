<template>
  <div>
    <FilmHeader></FilmHeader>

    <div class="film-tabs">
      <div class="film-tabcell" :class="{active: currentTab === 0}" @click="handleTabs(0)">
        正在热映
      </div>
      <div class="film-tabcell" :class="{active: currentTab === 1}" @click="handleTabs(1)">
        即将上映
      </div>
    </div>

    <div class="film-content">
      <div class="film-panel-1" v-if="currentTab === 0">
        <FilmHot></FilmHot>
      </div>
      <div class="film-panel-2" v-if="currentTab === 1">
        2
      </div>
    </div>
  </div>
</template>

<script>
import FilmHeader from "./components/film-header.vue";
import FilmHot from "./components/film-hot.vue";
export default {
  name: "film",
  data: () => {
    return {
      currentTab: 0
    };
  },
  components: {
    FilmHeader,
    FilmHot
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
.film-tabs {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #eee;
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
</style>
