<template>
  <div id="third-page">
    <img class="bg-img" src="../assets/img/page_2/bg01.png"/>
    <div class="content_box">
      <div class="circle_box">
        <div class="round" :class="'circle_'+index.toString()" v-for="(item,index) in keywordList" :key="index"
             @click="kwSelect(item)">
          <div class="circle" :class="{'is-selected':item.selected}">
            
            <div v-show="item.name.length < 4" class="keyword_text">
              {{item.name}}
            </div>
            <div v-show="item.name.length == 4" class="keyword_text_4">
               {{item.name}}
            </div>
          </div>
          <div class="radio" :class="'radio_'+index.toString()"></div>
        </div>
        <button class="ai-area" @click="nextPage()">AI Go</button>
      </div>
      <div class="left_darkhill"></div>
      <div class="right_darkhill"></div>
      <div class="left_lighthill"></div>
      <div class="right_lighthill"></div>
      <div class="bird-left"></div>
      <div class="bird-right"></div>
      <!-- <button class="ai-area" @click="nextPage()">AI</button> -->
    </div>

     <div class="err_popup" :class="{'popup_win':is_popup}">
      <h1>这里本应该有一个配图</h1>
      <h1>可UI把妹去了!叫不回来！</h1>
      <h1>活动炒鸡火爆的～～～表急！</h1>
      <button class="try_btn" @click="err_try()">点我试试？</button>
    </div>
    <div class="loading" v-show="loading_display">
      <div class="l_center">
        <img class="loading_img" src="../assets/img/loading.gif"/>
      </div>
    </div>
  </div>
</template>
<script>
  import * as types from '@/store/types'
  import * as paic from '@/store/paic'
  import App from "../assets/js/native.js"
  
  export default {
    name: 'thirsPage',
    data(){
      return {
        selectKeywords: 0,
        keywordList: [],
         res:'',
         selecteId:[],
         is_popup:false,
         loading_display:false,
      }
    },
    created(){
      this.getKeywordList();
    },
    mounted(){
      this.share_btn();
    },
    methods: {
      getKeywordList(){
        // 发请求做诗请求，带参数name，gender，themeId
        //{name: userName, themeId: themeId, gender: gender}
        this.loading_display = true;
        var model = this.$route.query;
        this.$get(types.getKeyword, model).then((response => {
          this.keywordList = response.data.KeywordList;
          this.res = response;
          this.loading_display = false;
        })).catch(err => {
          if (err != null) {
            this.is_popup = true
          }
          this.loading_display = false;
        })
      },
      createSeletedID(keywordid){
        if (this.selecteId.length <=3) {
          var index = this.selecteId.indexOf(keywordid);
          if (this.selecteId.indexOf(keywordid) > -1) {
            // 删除keywordid
            this.selecteId.splice(index,1)
          } else{
            this.selecteId.push(keywordid);
          };
        } else{
          this.selecteId.pop();
        }
      },

      // 此处需实现点击关键词改变样式
      kwSelect(item){
        this.selectKeywords = this.selectKeywords + (item.selected ? -1 : 1);
        this.createSeletedID(item['id']);
        this.$set(item, 'selected', !item.selected);
        
        if (this.selectKeywords > 3) {
          alert('请选1～3个祝福球哟！');
          this.selectKeywords = this.selectKeywords + (item.selected ? -1 : 1);
          this.createSeletedID(item['id'])
          this.$set(item, 'selected', !item.selected);
          return;
        }
      },

      // 跳转第四页
      nextPage(){
        if (this.selectKeywords <= 0) {
          alert('请选1～3个祝福球哟！');
          return;
        }
        let model = this.$route.query;
        var themeId = model['themeId'],
            keywordIds = this.selecteId.join(','),
            acrosticUid = this.res.data.acrosticUid;

        var queryData = {themeId:themeId,
                         keywordIds:keywordIds,
                         acrosticUid:acrosticUid};

        this.$router.push({path: '/fourthPage?rd='+Math.random(), query: queryData});
        
      },

      err_try(){
        var model = this.$route.query;
        this.loading_display = true;
        this.$get(types.getKeyword, model).then((response => {
          this.keywordList = response.data.KeywordList;
          this.res = response;
          this.loading_display = false;
        })).catch(err => {
          if (err != null) {
            this.$router.push('/firstPage');
            return;
          }
          this.loading_display = false;
        });
      },
      share_btn() {//app右上角分享接口调用
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
              
            }
        });
       },
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
  }

  .content_box {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    z-index: 1;
  }

  .circle_box {
    position: relative;
    z-index: 400;
    width: 100%;
    height: 100px;
    left: 0;
  }

  .round {
    width: 145px;
    height: 145px;
    position: relative;
  }

  .circle {
    background: -webkit-radial-gradient(circle,rgb(232,136,151) 55%, rgb(240, 240, 240)); /* Safari 5.1 - 6.0 */
    background: -o-radial-gradient(circle,rgb(232,136,151) 55%, rgb(240,240,240)); /* Opera 11.6 - 12.0 */
    background: -moz-radial-gradient(circle,rgb(232,136,151) 55%, rgb(240,240,240)); /* Firefox 3.6 - 15 */
    background: radial-gradient(circle,rgb(232,136,151) 55%, rgb(240,240,240)); /* 标准的语法 */
    position: relative;
    width: 130px;
    height: 130px;
    line-height: 130px;
    text-align: center;
    font-size: 25px;
    left: 1.5px;
    top: 1.3px;
    z-index: 500;
  }

  .radio {
    width: 140px;
    height: 140px;
    left: -3%;
    top: -3%;
  }

  /* 选中后的选中效果 */
  .is-selected {
    background: -webkit-radial-gradient(circle,rgb(235, 63, 86) 50%, rgb(246, 204, 213)); /* Safari 5.1 - 6.0 */
    background: -o-radial-gradient(circle,rgb(235, 63, 86) 50%, rgb(246, 204, 213)); /* Opera 11.6 - 12.0 */
    background: -moz-radial-gradient(circle,rgb(235, 63, 86) 50%, rgb(246, 204, 213)); /* Firefox 3.6 - 15 */
    background: radial-gradient(circle,rgb(235, 63, 86) 50%, rgb(246, 204, 213)); /* 标准的语法 */
  }

  /*九个圆圈定位*/
  .round:nth-child(1) {
    /*left: 150px;*/
    margin-left: -75px;
    top: 230px;
  }

  .round:nth-child(2) {
    margin-left: 80px;
    /*left: 310px;*/
    top: 295px;
  }

  .round:nth-child(3) {
    margin-left: 150px;
    /*left: 280px;*/
    top: 460px;
  }

  .round:nth-child(4) {
    /*left: 150px;*/
    margin-left: 70px;
    top: 610px;
  }

  .round:nth-child(5) {
    margin-left: -75px;
    /*left: 310px;*/
    top: 460px;
  }

  .round:nth-child(6) {
    margin-left: -75px;
    /*left: 310px;*/
    top: 680px;
  }

  .round:nth-child(7) {
    margin-left: -240px;
    /*left: 310px;*/
    top: 610px;
  }

  .round:nth-child(8) {
    margin-left: -300px;
    /*left: 310px;*/
    top: 460px;
  }

  .round:nth-child(9) {
    margin-left: -240px;
    /*left: 310px;*/
    top: 310px;
  }

  /* 五毛爆炸特效 */
  .circle_0 {
    animation: circle_effect_0 0.7s forwards;
  }

  .circle_1 {
    animation: circle_effect_1 1.0s forwards;
  }

  .circle_2 {
    animation: circle_effect_2 0.7s forwards;
  }

  .circle_3 {
    animation: circle_effect_3 1.0s forwards;
  }

  .circle_4 {
    animation: circle_effect_4 0.1s forwards;
  }

  .circle_5 {
    animation: circle_effect_5 0.7s forwards;
  }

  .circle_6 {
    animation: circle_effect_6 1.0s forwards;
  }

  .circle_7 {
    animation: circle_effect_7 0.7s forwards;
  }

  .circle_8 {
    animation: circle_effect_8 1.0s forwards;
  }

  /* 电波特效*/
  .radio_0 {
    animation: radio 1.5s ease-out;
    animation-iteration-count: infinite;
  }

  .radio_1 {
    animation: radio 2s ease-out;
    animation-iteration-count: infinite;
  }

  .radio_2 {
    animation: radio 2.5s ease-out;
    animation-iteration-count: infinite;
  }

  .radio_3 {
    animation: radio 3s ease-out;
    animation-iteration-count: infinite;
  }

  .radio_4 {
    animation: radio 4s ease-out;
    animation-iteration-count: infinite;
  }

  .radio_5 {
    animation: radio 1.5s ease-out;
    animation-iteration-count: infinite;
  }

  .radio_6 {
    animation: radio 2s ease-out;
    animation-iteration-count: infinite;
  }

  .radio_7 {
    animation: radio 1.5s ease-out;
    animation-iteration-count: infinite;
  }

  .radio_8 {
    animation: radio 3s ease-out;
    animation-iteration-count: infinite;
  }

  /* 页面三，五毛爆炸特效 */
  @keyframes circle_effect_0 {
    from {
      margin-left: 40%;
      top: 450%;
    }
    to {
      margin-left:40%;
      top: 222%
    }
  }

  @keyframes circle_effect_1 {
    from {
      margin-left: 40%;
      top: 280%;
    }
    to {
      margin-left: 61%;
      top: 136%
    }
  }

  @keyframes circle_effect_2 {
    from {
      margin-left: 40%;
      top: 141%;
    }
    to {
      margin-left: 70%;
      top: 140%
    }
  }

  @keyframes circle_effect_3 {
    from {
      margin-left: 40%;
      top: -5%;
    }
    to {
      margin-left: 61%;
      top: 142%
    }
  }

  @keyframes circle_effect_4 {
    from {
      margin-left: 40%;
      top: -150%;
    }
    to {
      margin-left: 40%;
      top: -150%
    }
  }

  @keyframes circle_effect_5 {
    from {
      margin-left: 40%;
      top: -290%;
    }
    to {
      margin-left: 40%;
      top: -100%
    }
  }

  @keyframes circle_effect_6 {
    from {
      margin-left: 40%;
      top: -440%;
    }
    to {
      margin-left: 19%;
      top: -292%
    }
  }

  @keyframes circle_effect_7 {
    from {
      margin-left: 40%;
      top: -584%;
    }
    to {
      margin-left: 10%;
      top: -584%
    }
  }

  @keyframes circle_effect_8 {
    from {
      margin-left: 40%;
      top: -728%;
    }
    to {
      margin-left: 19%;
      top: -883%
    }
  }

  .left_darkhill {
    position: absolute;
    width: 247px;
    height: 53px;
    bottom: 270px;
    margin-left: -255px;
    background-image: url('../assets/img/page_0/hill02@2x.png');
    background-size: 100% auto;
    z-index: 20;
  }

  .right_darkhill {
    position: absolute;
    width: 232px;
    height: 128px;
    bottom: 200px;
    margin-left: 255px;
    background-image: url('../assets/img/page_0/hill01@2x.png');
    background-size: 100% auto;
    z-index: 21;
  }

  .left_lighthill {
    position: absolute;
    width: 177px;
    height: 76px;
    bottom: 340px;
    margin-left: -180px;
    background-image: url('../assets/img/page_0/hill03@2x.png');
    background-size: 100% auto;
    z-index: 20;
  }

  .right_lighthill {
    position: absolute;
    width: 120px;
    height: 26px;
    margin-left: 275px;
    bottom: 380px;
    background-image: url('../assets/img/page_0/hill04@2x.png');
    background-size: 100% auto;
    z-index: 21;
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
    z-index: 21;
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
    z-index: 21;
  }

  .ai-area {
    color: #fff;
    position: absolute;
    width: 280px;
    height: 100px;
    background-color: rgb(93, 93, 198);
    opacity: 0.9;
    line-height: 100px;
    border-radius: 20%;
    top: 950%;
    margin-left: 30%;
    font-size: 0.8rem;
    z-index: 100;
  }

  .ai-btn {
    width: 100%;
    position: absolute;
    color: aliceblue;
    text-align: center;
    line-height: 100px;
    font-size: 50px;
  }

/* ex-yeweiping001 */
  .keyword_text_4{
    position: absolute;
    font-size:0.33rem;
    line-height: 0.43rem; 
    letter-spacing:0.05rem;
    height: 0.86rem;
    width: 0.86rem;
    top: calc(50% - 0.43rem);
    left: calc(50% - 0.38rem);
  }
  .keyword_text{
    font-size:0.33rem;
    letter-spacing:0.05rem;
  }

  .popup_win {
    display: block
  }

  /* 加载中动画 */
.loading{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(78, 78, 78, 0.7);
  z-index: 4900;
}
.loading .l_center{
  position: absolute;
  top: calc(50% - 2.1rem);
  left: 0;
  width: 100%;
  text-align: center;
}
.loading .l_center .loading_img{
  width: 5rem;
  border-radius: 0.5rem;
  
}
</style>
