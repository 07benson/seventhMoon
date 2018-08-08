<template>
  <div id="second-page">
    <img class="bg-img" src="../assets/img/page_1/bg01.png"/>
    <div class="content_box">
      <div class="top_lamination">
        <div class="top_relative">
          <div class="main_div">
            <div class="bd bd_0"></div>
            <div class="round round_0">
              <div class="radio radio_0"></div>
            </div>
            <div class="circle circle_0">{{ theme }}</div>
            
            <div class="btn_box btn_box_0 ">
              <div class="man man_0" :class="{'man_1':gender=='male'}" @click="confirmGender('male')"></div>
              <div class="woman woman_0" :class="{'woman_1':gender=='female'}" @click="confirmGender('female')"></div>
              <input v-model="userName" type="text" placeholder="请输入姓名" v-on:input="guessGender($event)">
              <button @click="nextPage()">AI</button>
            </div>
          </div>
          
        </div>
      </div>
      <div class="circle_box">
        
      </div>
      <div class="bottom_darkhill bottom_darkhill_0"></div>
      <div class="top_cloud"></div>
      <div class="left_darkhill"></div>
      <div class="right_darkhill"></div>
      <div class="left_lighthill"></div>
      <div class="right_lighthill"></div>
      <div class="bird-left"></div>
      <div class="left-cloud left-cloud_0"></div>
      <div class="right-cloud"></div>
      <div class="moon moon_0">
        <div class="bird_0"></div>
      </div>
      

    </div>

  </div>
</template>
<script>
  import * as types from '@/store/types'
  // 1、动态展示用户选择的主题
  export default {
    name: 'secondPage',
    data(){
      return {
        theme: "",
        gender: '',
        userName: ''
      }
    },
    mounted(){
      this.theme = this.$route.query.name;
    },
    methods: {
      // 获取用户输入的姓名
      guessGender(e){
        var self = this;
        // 要判断输入两个字以上再发请求，只支持中文
        var ischn = this.isChn(this.userName),
            len = this.strLen(this.userName);

        if (len>=4 && ischn && len<=8) {
          this.$get(types.getGender, {name: this.userName}).then((response => {
            let genderRes = response.data.gender;
            self.gender = genderRes;
          }))
        } else if (len>8) {
          this.userName = this.userName.substring(0,4);
        } else {
          return
        }
      },

      strLen(str){
        var len = 0;
        for (var i=0; i<str.length; i++) { 
        var c = str.charCodeAt(i); 
        //单字节加1 
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) { 
          len++; 
          } else { 
            len+=2; 
            } 
          } 
        return len;
      },


      // 中文判断
      isChn(str){
          var reg=/^[\u3220-\uFA29]+$/;
          if (!reg.test(str)){
            return false ;
          } else {
            return true ;
          }
      },

      // 3、获取用户选择的性别值
      confirmGender(gender){
        this.gender = gender;
      },

      // 跳转第三页
      nextPage(){
        var themeId = this.$route.query.id;
        let userName = this.userName;
        let gender = this.gender;

        if (!this.isChn(this.userName) || this.strLen(this.userName)<4) {
          alert('请输入2～4个中文哟')
        } else {
          this.$router.push({path: '/thirdPage', query: {name: userName, themeId: themeId, gender: gender}});
        }
        
      }

    },

  }


</script>
<style scoped>
  .bg-img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
  }

  .content_box {
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }







  .left-cloud {
    position: absolute;
    width: 128px;
    height: 47px;
    right: 40px;
    bottom: 440px;
    background-image: url('../assets/img/page_1/cloud02@2x.png');
    background-size: 100% auto;
  }

  @keyframes left-cloud {
    0% {
      right: 0;
      opacity: 0.2;
    }
    100% {
      left: 30%;
      opacity: 1;
    }
  }

  .left-cloud_0 {
    animation: left-cloud 1.5s alternate forwards;
    animation-iteration-count: 1;
  }

  .top_cloud {
    position: absolute;
    width: 171px;
    height: 74px;
    left: 0;
    top: 150px;
    background-image: url('../assets/img/page_1/cloud03@2x.png');
    background-size: 100% auto;
  }

  .right-cloud {
    position: absolute;
    width: 134px;
    height: 60px;
    margin-left: 305px;
    bottom: 500px;
    background-image: url('../assets/img/page_1/cloud01@2x.png');
    background-size: 100% auto;
  }

  .bottom_darkhill {
    position: absolute;
    width: 377px;
    height: 164px;
    bottom: 20px;
    margin-left: -190px;
    background-image: url('../assets/img/page_1/hill01@2x.png');
    background-size: 100% auto;
  }

  @keyframes bottom_darkhill {
    0% {
      opacity: 0.2;
      margin-left: -300px;
    }
    100% {
      margin-left: -190px;
      opacity: 1;
    }
  }

  .bottom_darkhill_0 {
    animation: bottom_darkhill 1s alternate forwards;
    animation-iteration-count: 1;
  }

  .bird-left {
    position: absolute;
    width: 68px;
    height: 61px;
    bottom: 480px;
    margin-left: -220px;
    background-image: url('../assets/img/page_1/bird02@2x.png');
    background-size: 100% auto;
  }

  .left_darkhill {
    background-image: url('../assets/img/page_1/hill03@2x.png');
  }

  .right_darkhill {
    background-image: url('../assets/img/page_1/hill02@2x.png');
  }

  .left_lighthill {
    background-image: url('../assets/img/page_0/hill03@2x.png');
    margin-left: -130px;
  }

  .right_lighthill {
    background-image: url('../assets/img/page_1/hill05@2x.png');
  }

  .moon {
    position: absolute;
    width: 240px;
    height: 240px;
    top: 65%;
    border-radius: 0 0 0 100%;
    background: #ffffff;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 10px 10px 5px #888888;
  }

  .bird_0 {
    width: 69px;
    height: 56px;
    position: absolute;
    top: 39%;
    left: 14%;
    background-image: url('../assets/img/page_0/bird01@2x.png');
    background-size: 100% auto;
  }

  .moon_0 {
    animation: moon 0.5s alternate forwards;
    animation-iteration-count: 1;
  }

  @keyframes moon {
    0% {
      left: 50%;
      top: 65%;
      opacity: 0.2;
      border-radius: 100%;
    }
    100% {
      position: absolute;
      top: 0;
      left: 84%;
      opacity: 1;
      border-radius: 0 0 0 100%;
    }
  }


/* ex-yeweiping001 */
  .top_lamination{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 200;
  }
  .top_lamination .top_relative{
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 201;
  }
  .top_lamination .top_relative .main_div{
    position: absolute;
    top:18%;
    left: 0;
    height: 48%;
    width: 100%;
  }
  .top_lamination .top_relative .main_div .bd {
    width: 5px;
    background: #ffffff;
    margin: 5% auto;
    margin-bottom: 99px;
    height: calc(95% - 99px);
    z-index: 202;
  }

  @keyframes bd {
    0% {
      height: 25%;
      opacity: 0.2;
    }
    100% {
      height: calc(95% - 100px);
      opacity: 1;
    }
  }

  .top_lamination .top_relative .main_div .bd_0 {
    animation: bd 1s alternate forwards;
    animation-iteration-count: 1;
  }

  .top_lamination .top_relative .main_div .round_0 {
    position: absolute;
    top:0;
    z-index: 203;
    left: 50%;
    transform: translateX(-50%);
  }

  .top_lamination .top_relative .main_div .circle_0{
    position: absolute;
    top: 0;
    z-index: 204;
    left: 50%;
    transform: translateX(-50%);
  }

  .top_lamination .top_relative .main_div .radio_0 {
    margin-left: -3%;
    margin-top: -3%;
    animation: radio 2.5s ease-out;
    animation-iteration-count: infinite;
  }

  
  .btn_box {
    position: absolute;
    bottom: 0;
    z-index: 204;
  }

  @keyframes btn_box {
    0% {
      opacity: 0.2;
      bottom: 55%;
    }
    100% {
      bottom: 0;
      opacity: 1;
    }
  }

  .btn_box_0 {
    width: 8.4rem;
    left: 50%;
    transform: translateX(-50%);
    animation: btn_box 1s alternate forwards;
    animation-iteration-count: 1;
  }

  .btn_box input {
    width: 480px;
    height: 100px;
    border: 3px solid rgb(77, 33, 95);
    margin-top: 173px;
    font-size: 30px;
    text-indent: 20px;
    background: rgb(253, 241, 254);
    border-radius: 20px 24px 24px 24px;
    outline: none;
  }

  .btn_box button {
    border: 3px solid rgb(77, 33, 95);
    background: -webkit-linear-gradient(rgb(88, 145, 251), rgb(66, 65, 167)); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(rgb(88, 145, 251), rgb(66, 65, 167)); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(rgb(88, 145, 251), rgb(66, 65, 167)); /* Firefox 3.6 - 15 */
    background: linear-gradient(rgb(88, 145, 251), rgb(66, 65, 167)); /* 标准的语法 */
    height: 100px;
    border-radius: 14px 14px 14px 14px;
    padding: 17px 58px;
    margin: -10px;
    font-size: 30px;
    text-align: center;
    color: #ffffff;
    outline: none;
  }

  .btn_box .man {
    position: absolute;
    top: 48%;
    left: 6%;
    width: 42px;
    height: 87px;
    background-image: url('../assets/img/page_1/gender_male@2x.png');
    background-size: 100% auto;
    z-index: -1;
  }

  @keyframes man {
    from {
      top: 40%;
    }

    to {
      top: 50%;
    }
  }

  .man_0 {
    animation-name: man;
    animation-iteration-count: 3;
    animation-duration: 0.2s;
    animation-delay: 1s;
  }

  .btn_box .woman {
    position: absolute;
    top: 48%;
    left: 18%;
    width: 45px;
    height: 87px;
    background-image: url('../assets/img/page_1/gender_female@2x.png');
    background-size: 100% auto;
    z-index: -1;
  }

  @keyframes woman {
    from {
      top: 48%;
    }

    to {
      top: 40%;
    }
  }

  .woman_0 {
    animation-name: woman;
    animation-iteration-count: 3;
    animation-duration: 0.2s;
    animation-delay: 1s;
  }

  @keyframes man_1 {
    0% {
      top: 48%;
    }
    100% {
      top: 40%;
      background-image: url('../assets/img/page_1/gender_male_selected@2x.png')
    }
  }

  .man_1 {
    animation: man_1 0.1s forwards;
  }

  @keyframes woman_1 {
    0% {
      top: 48%;
    }
    100% {
      top: 40%;
      background-image: url('../assets/img/page_1/gender_female_selected@2x.png')
    }
  }

  .woman_1 {
    animation: woman_1 0.1s forwards;
  }


</style>
