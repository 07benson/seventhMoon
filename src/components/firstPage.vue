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
      
    <div class="err_popup" :class="{'popup_win':is_popup}">
      <h1>这里本应该有一个配图</h1>
      <h1>可UI把妹去了!叫不回来！</h1>
      <h1>活动炒鸡火爆的～～～表急！</h1>
      <button class="try_btn" @click="err_try()">点我试试？</button>
    </div>

  </div>
</template>
<script>
  import * as types from '@/store/types'
  import * as paic from '@/store/paic'
  import App from "../assets/js/native.js"

  export default {
    name: 'firstPage',
    data(){
      return {
        circleActive: false,
        typeList: [],
        is_popup:false
      }
    },
    methods: {
      circleClick(item){
        var self = this;
        self.circleActive = true;
        setTimeout(function () {
          self.$router.push({path: '/secondPage?rd='+Math.random(), query: item})

        }, 1000);
      },

      err_try(){
        this.$get(types.getTheme).then(
          (response => {
            this.typeList = response['listData'];
            this.is_popup = false;
            return
        })).catch(err => {
            if (err != null) {
              location.reload()
              return
            }
          })
      },
      upload_pv(url){
       
        let upload_data = {
          'url' : url
        };
        let uploadPvUrl = paic.uploadPv;
        let parms = "";
        let cookie = document.cookie;
        if(cookie.indexOf("hm_sessionid") != -1){
            var loginsession = cookie.split("hm_sessionid=")[1];
            loginsession = loginsession.split(";")[0];
        }
        if(App.IS_ANDROID){
            parms = "?loginsession=" + loginsession;
        }
        uploadPvUrl = uploadPvUrl + parms;
        this.$post(uploadPvUrl,upload_data).then(response => {
          if(response.code == "200"){
            
          }else if(response.code == "606"){  
            this.alert("登录态已过期，请重新登录试试");
          }else{
            this.alert(response.message);
          }
        }).catch(err => {
          console.log(err);
        });
      },
      //app右上角分享接口调用
      share_btn() {
        var thisurl = window.location.href;
        //var linkUrl = thisurl.substring(0,thisurl.indexOf('#'));
        var linkUrl = thisurl.substring(0,thisurl.indexOf('#')+1)+ "/firstPage";
      
        var self = this;
        var obj = {
            title: 'AI为你写诗，为你做不可能的事', // 分享标题
            desc: '亲手制作一份专属情书送给Ta吧~', // 分享描述
            description: '亲手制作一份专属情书送给Ta吧~', // 分享描述
            link: linkUrl,
            url: linkUrl,
            imgUrl: 'http://peimc-smp-stg.pa18.com/peimcnl/celebration/dist/share.png', // 分享图标
            imageUrl: 'http://peimc-smp-stg.pa18.com/peimcnl/celebration/dist/share.png', // 分享图标
            bounce: false,//是否直接弹起native分享选择页
            channel:"1,2,3"
        };
        var data = JSON.stringify(obj);
        App.call("onMenuShare",data,function(res){
            if(typeof res == "string"){
                res = JSON.parse(res);
            }
            if(res.code == 1){
              this.upload_pv('/2018/aug/loveletter/homeShare');
            }
        });
       },
       upload_click(){
         let button = this.$route.query.button;
         if(button==1){
           this.upload_pv('/2018/aug/loveletter/homeButtonClickNum');
         }
       }

    },
    mounted(){
      this.upload_pv('/2018/aug/loveletter/home');//上报访问
      this.upload_click();//上报二级菜单点击量
      this.$get(types.getTheme).then(
        (response => {
          this.typeList = response['listData'];
        })
      ).catch(err => {
        if (err != null) {
          this.is_popup = true
        }
      });
    }

  }
</script>
<style scoped>
  .circle {
    position: relative;
    left: 2px;
    top: 2.2px;
    z-index: 500;
    font-size: 0.45rem;
    letter-spacing:0.04rem;
  }

  .radio {
    left: -3%;
    top: -3%;
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
    z-index: 1;
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
    z-index: 10;
  }

  .bridge {
    position: absolute;
    bottom: 200px;
    width: 579px;
    height: 108px;
    background-image: url('../assets/img/page_0/bird_bridge@2x.png');
    background-size: 100% auto;
    z-index: 15;
  }

  .bridge-shadow {
    position: absolute;
    bottom: 100px;
    width: 579px;
    height: 108px;
    background-image: url('../assets/img/page_0/bird_bridge_shadow@2x.png');
    background-size: 100% auto;
    z-index: 15;
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
    z-index: 30;
  }

  .girl {
    position: absolute;
    margin-left: 85px;
    bottom: 300px;
    width: 172px;
    height: 205px;
    background-image: url('../assets/img/page_0/girl@2x.png');
    background-size: 100% auto;
    z-index: 30;
  }

  .left-cloud {
    position: absolute;
    width: 201px;
    height: 74px;
    margin-left: -230px;
    bottom: 180px;
    background-image: url('../assets/img/page_0/cloud_left@2x.png');
    background-size: 100% auto;
    z-index: 20;
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
    z-index: 20;
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
    z-index: 20;
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
    z-index: 20;
  }

  .bottom-cloud1 {
    position: absolute;
    bottom: 5px;
    /*left: 0;*/
    width: 105%;
    height: 51px;
    background-image: url('../assets/img/page_0/button01@2x.png');
    background-size: 100% auto;
    z-index: 20;
  }

  .bottom-cloud2 {
    position: absolute;
    bottom: 5px;
    /*left: 0;*/
    width: 105%;
    height: 63px;
    background-image: url('../assets/img/page_0/button02@2x.png');
    background-size: 100% auto;
    z-index: 15;
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

  .popup_win {
    display: block
  }

</style>
