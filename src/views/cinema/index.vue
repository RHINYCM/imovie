<template>
  <div id="main">
      <Header />
      <div id="content">
        <div class="cinema_menu">
          <div class="city_switch">
            全城<i class="iconfont icon-lower-triangle"></i>
          </div>
          <div class="city_switch">
            品牌<i class="iconfont icon-lower-triangle"></i>
          </div>
          <div class="city_switch">
            特色<i class="iconfont icon-lower-triangle"></i>
          </div>
        </div>
        <cinemaList />
      </div>
      <TabBar />
  </div>
</template>

<script>
import Header from '@/components/header';
import TabBar from '@/components/tabBar';
import cinemaList from '@/components/cinemaList';

export default {
  name:'cinema',
  components:{
    Header,
    TabBar,
    cinemaList
  }
}
</script>

<style scoped>
#content .cinema_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: white;
}
</style>