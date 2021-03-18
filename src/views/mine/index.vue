<template>
  <div id="main">
      <Header />
      <div id="content">
        <login />
      </div>
      <TabBar />
  </div>
</template>

<script>
import Header from '@/components/header';
import TabBar from '@/components/tabBar';
import login from '@/components/login';

export default {
  name:'mine',
  components:{
    Header,
    TabBar,
    login
  }
}
</script>

<style>

</style>