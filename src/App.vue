<template>
  <div id="app">
    <!--<img class="bg-img" :src="bgImg"/>-->
    <router-view/>
  </div>
</template>

<script>
//  import bgImg from './assets/img/page_0/bg00.png'
  export default {
    name: 'App',
    data(){
      return {
//        bgImg: bgImg
      }
    }
  }
</script>

<style>
/*  body {
    background-image: url(./assets/img/page_0/bg00.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;
    margin: 0px;
    padding: 0px;
  }*/
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    /*background: #fff;*/
    /*margin-top: 60px;*/
   /* height: 100vh;
    width: 100vh;*/
  }

  /*.bg-img {
    position: absolute;
    top: 0;
    left: 0;
  }*/
</style>
