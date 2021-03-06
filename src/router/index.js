import Vue from "vue";
import VueRouter from "vue-router";
import movieRouter from "./movie";
import cinemaRouter from "./cinema";
import mineRouter from "./mine";

Vue.use(VueRouter);



export default new VueRouter({
  mode:'hash',
  //base:process.env.BASE_URL,
  
  routes:[
    movieRouter,
    mineRouter,
    cinemaRouter,
    {
      path:'/*',
      redirect:'/movie'
    }
  ]
});
