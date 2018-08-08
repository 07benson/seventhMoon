<template>
  <div id="first-page">
    <img class="bg-img" src="../assets/img/page_0/bg00.png"/>
    <div class="content_box">
      <div class="circle_box">
        <div class="round" v-for="(item,index) in typeList" :key="index"
             @click="circleClick(item)">
          <div class="circle">{{item.name}}</div>
          <div class="radio" :class="'radio_'+index.toString()"></div>
        </div>
      </div>
      <div class="moon animated delay-1s" :class="{'fadeOut':circleActive}"></div>
      <div class="left_darkhill"></div>
      <div class="right_darkhill"></div>
      <div class="left_lighthill"></div>
      <div class="right_lighthill"></div>
      <div class="bird-left"></div>
      <div class="bird-right"></div>
      <div class="man" :class="{'slideOutLeft':circleActive}"></div>
      <div class="girl" :class="{'slideOutRight':circleActive}"></div>
      <div class="bridge-shadow animated delay-1s" :class="{'fadeOut':circleActive}"></div>
      <div class="bridge animated delay-1s" :class="{'fadeOut':circleActive}"></div>
      <div class="left-cloud" :class="{'slideOutLeft':circleActive}"></div>
      <div class="right-cloud" :class="{'slideOutRight':circleActive}"></div>
      <div class="bottom-cloud2"></div>
      <div class="bottom-cloud1"></div>
    </div>

  </div>
</template>
<script>
  import * as types from '@/store/types'

  export default {
    name: 'firstPage',
    data(){
      return {
        circleActive: false,
        typeList: []
      }
    },
    methods: {
      circleClick(item){
        var self = this;
        self.circleActive = true;
        setTimeout(function () {
          self.$router.push({path: '/secondPage', query: item})

        }, 1000);
      },
    },
    mounted(){
      this.$get(types.getTheme).then(
        (response => {
          this.typeList = response['listData'];
        })
      )
    }

  }
</script>
<style scoped>
  .circle {
    position: relative;
    left: 2px;
    top: 2.2px;
  }

  .radio {
    position: relative;
    left: -5px;
    top: -195px
  }

  .round {
    width: 200px;
    height: 200px;
  }

  .bg-img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .content_box {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  /*五个圆圈定位*/
  .round:nth-child(1) {
    /*left: 150px;*/
    margin-left: -236px;
    top: 80px;
  }

  .round:nth-child(2) {
    margin-left: 67px;
    /*left: 310px;*/
    top: 80px;
  }

  .round:nth-child(3) {
    margin-left: -70px;
    /*left: 280px;*/
    top: 264px;
  }

  .round:nth-child(4) {
    /*left: 150px;*/
    margin-left: -246px;
    top: 458px;
  }

  .round:nth-child(5) {
    margin-left: 127px;
    /*left: 310px;*/
    top: 458px;
  }

  .radio_0 {
    animation: radio 2.5s ease-out;
    animation-iteration-count: infinite;
  }

  .radio_1 {
    animation: radio 3s ease-out;
    animation-iteration-count: infinite;
  }

  .radio_2 {
    animation: radio 3.5s ease-out;
    animation-iteration-count: infinite;
  }

  .radio_3 {
    animation: radio 4s ease-out;
    animation-iteration-count: infinite;
  }

  .radio_4 {
    animation: radio 5s ease-out;
    animation-iteration-count: infinite;
  }

  .radio_5 {
    animation: radio 1s ease-out;
    animation-iteration-count: infinite;
  }

  .moon {
    position: absolute;
    width: 670px;
    height: 456px;
    bottom: 210px;
    background-image: url('../assets/img/page_0/moon@2x.png');
    background-size: 100% auto;
  }

  .bridge {
    position: absolute;
    bottom: 200px;
    width: 579px;
    height: 108px;
    background-image: url('../assets/img/page_0/bird_bridge@2x.png');
    background-size: 100% auto;
  }

  .bridge-shadow {
    position: absolute;
    bottom: 100px;
    width: 579px;
    height: 108px;
    background-image: url('../assets/img/page_0/bird_bridge_shadow@2x.png');
    background-size: 100% auto;
  }

  .man {
    position: absolute;
    /*left: -10px;*/
    margin-left: -50px;
    bottom: 300px;
    width: 115px;
    height: 216px;
    background-image: url('../assets/img/page_0/man@2x.png');
    background-size: 100% auto;
  }

  .girl {
    position: absolute;
    margin-left: 85px;
    bottom: 300px;
    width: 172px;
    height: 205px;
    background-image: url('../assets/img/page_0/girl@2x.png');
    background-size: 100% auto;
  }

  .left-cloud {
    position: absolute;
    width: 201px;
    height: 74px;
    margin-left: -230px;
    bottom: 180px;
    background-image: url('../assets/img/page_0/cloud_left@2x.png');
    background-size: 100% auto;
  }

  .right-cloud {
    /*display: none;*/
    position: absolute;
    width: 201px;
    height: 74px;
    margin-left: 252px;
    bottom: 190px;
    background-image: url('../assets/img/page_0/cloud_right@2x.png');
    background-size: 100% auto;
  }

  .bird-left {
    position: absolute;
    width: 68px;
    height: 61px;
    bottom: 480px;
    margin-left: -220px;
    /*left: 7%;*/
    background-image: url('../assets/img/page_1/bird02@2x.png');
    background-size: 100% auto;
  }

  .bird-right {
    position: absolute;
    width: 69px;
    height: 55px;
    bottom: 420px;
    margin-left: 220px;
    /*left: 7%;*/
    background-image: url('../assets/img/page_1/bird01@2x.png');
    background-size: 100% auto;
  }

  .bottom-cloud1 {
    position: absolute;
    bottom: 5px;
    /*left: 0;*/
    width: 105%;
    height: 51px;
    background-image: url('../assets/img/page_0/button01@2x.png');
    background-size: 100% auto;
  }

  .bottom-cloud2 {
    position: absolute;
    bottom: 5px;
    /*left: 0;*/
    width: 105%;
    height: 63px;
    background-image: url('../assets/img/page_0/button02@2x.png');
    background-size: 100% auto;
  }

  .left_darkhill {
    background-image: url('../assets/img/page_0/hill02@2x.png');
  }

  .right_darkhill {
    background-image: url('../assets/img/page_0/hill01@2x.png');
  }

  .left_lighthill {
    background-image: url('../assets/img/page_0/hill03@2x.png');
  }

  .right_lighthill {
    background-image: url('../assets/img/page_0/hill04@2x.png');
  }

  @keyframes slideOutLeft {
    from {
      transform: translate3d(0, 0, 0);
    }

    to {
      transform: translate3d(-300%, 0, 0);
      visibility: hidden;
    }
  }

  .slideOutLeft {
    animation-name: slideOutLeft;
    animation-iteration-count: 1;
    animation-duration: 1s;
  }

  @keyframes slideOutRight {
    from {
      transform: translate3d(0, 0, 0);
    }

    to {
      transform: translate3d(200%, 0, 0);
      visibility: hidden;
    }
  }

  .slideOutRight {
    animation-name: slideOutRight;
    animation-iteration-count: 1;
    animation-duration: 1s;
  }

</style>
