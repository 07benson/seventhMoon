<template>
  <div id="show-page">
    <template v-if="this.themeId == 0">
      <img class="bg-img" src="../assets/img/page_4/theme_0/bg.png"/>
    </template>
    <template v-if="this.themeId == 1">
      <img class="bg-img" src="../assets/img/page_4/theme_1/bg.png"/>
    </template>
    <template v-if="this.themeId == 4">
     <img class="bg-img" src="../assets/img/page_4/theme_4/bg.png"/>
    </template>
    <template v-if="this.themeId == 5">
      <img class="bg-img" src="../assets/img/page_4/theme_5/bg.png"/>
    </template>
    <template v-if="this.themeId == 9">
      <img class="bg-img" src="../assets/img/page_4/theme_9/bg.png"/>
    </template>

    <div class="content_box">
      <div class="box_top">
        <div class="acrostic_div">
          <div class="acrostic_position">
            <div class="acrostic_item" :class="'acrostic_'+index.toString()" v-for="(item,index) in acrostic_item" :key="index">{{ item }}</div>
          </div>
        </div>
        <div class="theme_div">
          <div class="theme_position">
            <div class="theme_title">
              {{ theme_title }}
            </div>
          </div>
        </div>
      </div>
      <div class="box_middle">
        
        <div class="blessing_div">
          <div class="blessing_item blessing_content">
            {{ blessings }}
          </div>
          <div class="blessing_item sign_content">
            <div class="sign_position">
             — AI作词&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </div>
      <!--
      <div  class="box_bottom">
        <div class="send_btn">发送给Ta</div>
      </div>
      -->
      <!--<div class="edit_btn"></div>-->
      <div class="return_home" @click="toIndex()"><div class="return_home_text">写诗</div></div>
    </div>
    <div class="lamination_bg_element">
      <template v-if="this.themeId == 0">
        <div class="theme_0_posiction">
          <div class="bg_fly_left">
            <img class="bg_fly_left_img" src="../assets/img/page_4/theme_0/fly_left.png"/>
          </div>
          <div class="bg_fly_right">
            <img class="bg_fly_right_img" src="../assets/img/page_4/theme_0/fly_right.png"/>
          </div>
          <div class="bg_cloud_left">
            <img class="bg_cloud_left_img" src="../assets/img/page_4/theme_0/cloud_1.png"/>
          </div>
          <div class="bg_cloud_right">
            <img class="bg_cloud_right_img" src="../assets/img/page_4/theme_0/cloud_2.png"/>
          </div>
          <div class="bg_human">
            <img class="bg_human_img" src="../assets/img/page_4/theme_0/human.png"/>
          </div>
          <div class="bg_moon">
            <img class="bg_moon_img" src="../assets/img/page_4/theme_0/moon.png"/>
          </div>
          <div class="bg_floor">
            <img class="bg_floor_img" src="../assets/img/page_4/theme_0/floor.png"/>
          </div>
        </div>
      </template>
      <template v-if="this.themeId == 1">
        <div class="theme_1_posiction">
          
          <div class="bg_cloud_left">
            <img class="bg_cloud_left_img" src="../assets/img/page_4/theme_1/cloud_1.png"/>
          </div>
          <div class="bg_cloud_right">
            <img class="bg_cloud_right_img" src="../assets/img/page_4/theme_1/cloud_2.png"/>
          </div>
          <div class="bg_guys">
            <img class="bg_guys_img" src="../assets/img/page_4/theme_1/guys.png"/>
          </div>
          <div class="bg_branch">
            <img class="bg_branch_img" src="../assets/img/page_4/theme_1/branch.png"/>
          </div>
          <div class="bg_floor_left">
            <img class="bg_floor_left_img" src="../assets/img/page_4/theme_1/floor_left.png"/>
          </div>
          <div class="bg_floor_center">
            <img class="bg_floor_center_img" src="../assets/img/page_4/theme_1/floor_center.png"/>
          </div>
          <div class="bg_floor_right">
            <img class="bg_floor_right_img" src="../assets/img/page_4/theme_1/floor_right.png"/>
          </div>
          <div class="bg_moon">
            <img class="bg_moon_img" src="../assets/img/page_4/theme_1/moon.png"/>
          </div>
          <div class="bg_floor">
            <img class="bg_floor_img" src="../assets/img/page_4/theme_1/floor.png"/>
          </div>
        </div>
      </template>
      <template v-if="this.themeId == 4">
        <div class="theme_4_posiction">
          
          <div class="bg_fly_left">
            <img class="bg_fly_left_img" src="../assets/img/page_4/theme_4/fly_left.png"/>
          </div>
          <div class="bg_fly_right">
            <img class="bg_fly_right_img" src="../assets/img/page_4/theme_4/fly_right.png"/>
          </div>
          <div class="bg_human">
            <img class="bg_human_img" src="../assets/img/page_4/theme_4/human.png"/>
          </div>
          <div class="bg_floor_left">
            <img class="bg_floor_left_img" src="../assets/img/page_4/theme_4/floor_left.png"/>
          </div>
          <div class="bg_floor_center">
            <img class="bg_floor_center_img" src="../assets/img/page_4/theme_4/floor_center.png"/>
          </div>
          <div class="bg_floor_right">
            <img class="bg_floor_right_img" src="../assets/img/page_4/theme_4/floor_right.png"/>
          </div>
          <div class="bg_moon">
            <img class="bg_moon_img" src="../assets/img/page_4/theme_4/moon.png"/>
          </div>
          <div class="bg_floor">
            <img class="bg_floor_img" src="../assets/img/page_4/theme_4/floor.png"/>
          </div>
        </div>
      </template>
      <template v-if="this.themeId == 5">
        <div class="theme_5_posiction">
          <div class="bg_cloud_left">
            <img class="bg_cloud_left_img" src="../assets/img/page_4/theme_5/cloud_1.png"/>
          </div>
          <div class="bg_buffalo">
            <img class="bg_buffalo_img" src="../assets/img/page_4/theme_5/buffalo.png"/>
          </div>
          <div class="bg_strong">
            <img class="bg_strong_img" src="../assets/img/page_4/theme_5/strong.png"/>
          </div>
          <div class="bg_mountain">
            <img class="bg_mountain_img" src="../assets/img/page_4/theme_5/mountain.png"/>
          </div>
          <div class="bg_human">
            <img class="bg_human_img" src="../assets/img/page_4/theme_5/human.png"/>
          </div>
          <div class="bg_floor_left_top">
            <img class="bg_floor_left_top_img" src="../assets/img/page_4/theme_5/floor_left_top.png"/>
          </div>
          <div class="bg_floor_left_bottom">
            <img class="bg_floor_left_bottom_img" src="../assets/img/page_4/theme_5/floor_left_bottom.png"/>
          </div>
          <div class="bg_floor_right_top">
            <img class="bg_floor_right_top_img" src="../assets/img/page_4/theme_5/floor_right_top.png"/>
          </div>
          <div class="bg_floor_right_bottom">
            <img class="bg_floor_right_bottom_img" src="../assets/img/page_4/theme_5/floor_right_bottom.png"/>
          </div>
          <div class="bg_moon">
            <img class="bg_moon_img" src="../assets/img/page_4/theme_5/moon.png"/>
          </div>
          <div class="bg_floor_top">
            <img class="bg_floor_top_img" src="../assets/img/page_4/theme_5/floor_top.png"/>
          </div>
          <div class="bg_floor_bottom">
            <img class="bg_floor_bottom_img" src="../assets/img/page_4/theme_5/floor_bottom.png"/>
          </div>
        </div>
      </template>
      <template v-if="this.themeId == 9">
        
        <div class="theme_9_posiction">
          <div class="bg_fly_left">
            <img class="bg_fly_left_img" src="../assets/img/page_4/theme_9/fly_left.png"/>
          </div>
          <div class="bg_fly_right">
            <img class="bg_fly_right_img" src="../assets/img/page_4/theme_9/fly_right.png"/>
          </div>
          <div class="bg_cloud_left">
            <img class="bg_cloud_left_img" src="../assets/img/page_4/theme_9/cloud_1.png"/>
          </div>
          <div class="bg_human_left">
            <img class="bg_human_left_img" src="../assets/img/page_4/theme_9/human_left.png"/>
          </div>
          <div class="bg_human_right">
            <img class="bg_human_right_img" src="../assets/img/page_4/theme_9/human_right.png"/>
          </div>
          <div class="bg_floor_left">
            <img class="bg_floor_left_img" src="../assets/img/page_4/theme_9/floor_left.png"/>
          </div>
          <div class="bg_floor_right">
            <img class="bg_floor_right_img" src="../assets/img/page_4/theme_9/floor_right.png"/>
          </div>
          <div class="bg_moon">
            <img class="bg_moon_img" src="../assets/img/page_4/theme_9/moon.png"/>
          </div>
          <div class="bg_floor">
            <img class="bg_floor_img" src="../assets/img/page_4/theme_9/floor.png"/>
          </div>
        </div>
       
      </template>
    </div>
  </div>
</template>
<script>
  import * as types from '@/store/types'
  import * as paic from '@/store/paic'
  import App from "../assets/js/native.js"

  export default {
    name: 'poem',
    data(){
      return {
        selectKeywords: 0,
        theme_title: "",
        poemUid: "",
        acrostic_item:[],
        blessings: "",
        themeId: -1,
      }
    },
    mounted(){
      
      
    },
    created(){
      this.getPoem();
    },
    methods: {
      getPoem(){
        // 发请求做诗请求，带参数poemUid
        //{poemUid: poemUid}
        var model = this.$route.query;
        this.$get(types.getPoem, model).then((response => {
          this.poemUid = response.data.poemUid;
          this.themeId = response.data.themeId;
          this.acrostic_item = response.data.acrostic.slice(0,4);
          this.blessings = response.data.blessings;
          this.theme_title = response.data.themeTitle;
          this.themeId = response.data.themeId;
          this.sendRecordStatus();
          this.share_btn();
        }))
      },
      sendRecordStatus(){
        var loveLetterId = this.poemUid;
        let data = {
          "loveLetterId" : loveLetterId
        };

        let recordStatusUrl = paic.recordStatus;
        let parms = "";
        let cookie = document.cookie;
        if(cookie.indexOf("hm_sessionid") != -1){
            var loginsession = cookie.split("hm_sessionid=")[1];
            loginsession = loginsession.split(";")[0];
        }
        if(App.IS_ANDROID){
            parms = "?loginsession=" + loginsession;
        }
        recordStatusUrl = recordStatusUrl + parms;
        this.$post(recordStatusUrl,data).then(response => {
          if(response.code == "200"){
            console.log(response);
          }else{
            
            console.log(response);
            //TODO 
          }
        }).catch(err => {
          console.log(err);
        });
      },
      toIndex(){
        this.$router.push({path: '/firstPage?rd='+Math.random()});
      },
      //app右上角分享接口调用
      share_btn() {
        var thisurl = window.location.href;
        //var linkUrl = thisurl.substring(0,thisurl.indexOf('#'));
        var linkUrl = thisurl.substring(0,thisurl.indexOf('#')+1)+ "/showPage?poemUid="+this.poemUid;
      
        var self = this;
        var obj = {
            title: 'Ta给我发送了一封专属定制的AI情书！', // 分享标题
            desc: '也邀请你一起鉴赏哦~！', // 分享描述
            description: '也邀请你一起鉴赏哦~！', // 分享描述
            link: linkUrl,
            url: linkUrl,
            imgUrl: paic.shareUrl, // 分享图标
            imageUrl: paic.shareUrl, // 分享图标
            bounce: false,//是否直接弹起native分享选择页
            channel:"1,2,3"
        };
        var data = JSON.stringify(obj);
        App.call("onMenuShare",data,function(res){
            if(typeof res == "string"){
                res = JSON.parse(res);
            }
            if(res.code == 1){
                console.log("share success");
            }
        });
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
    color: #ffffff;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    z-index: 1;
  }

  .content_box .box_top{
    position: absolute;
    height: 100%;
    width: 100%;
    top:0;
    left: 0;
    font-family: 华文行楷;
  }
  .content_box .box_top .acrostic_div,.theme_div{
    width: 50%;
  }
  .content_box .box_top .acrostic_div .acrostic_position{
    position: absolute;
    width: 47.5%;
    top: 8.44%;
  }
  .content_box .box_top .acrostic_div .acrostic_item {
    float: right;
    display: inline-block;
    font-size: 0.63rem;
    margin: 0 auto;  
    height: 5.5rem;
    writing-mode: vertical-rl;
    writing-mode: tb-rl;
    bottom: 0;
    margin-left: 0.3rem; 
  }
  .content_box .box_top .theme_div{
    height: 100%;
    float: right;
  }
  .content_box .box_top .theme_div .theme_position{
    position: absolute;
    top:8.44%;
  }
  .content_box .box_top .theme_div .theme_title{
    height: 5.6rem;
    font-size: 1.35rem;
    font-weight: bolder;
    writing-mode: vertical-rl;
    writing-mode: tb-rl;
    margin-left: 1rem;
  }

  .content_box .box_middle{
    position: absolute;
    height: 37%;
    width: 100%;
    top:42.04%;
  }
  .content_box .box_middle .blessing_item {
    float: left;
    display: inline-block;
    margin: 0 auto;  
    height: 4.3rem;
    writing-mode: vertical-rl;
    writing-mode: tb-rl;
  }

  .content_box .box_middle .blessing_div{
    height: 100%;
    width: 100%;
    float: right;
    letter-spacing:0.04rem;
    font-size: 0.32rem;
  }
  .content_box .box_middle .blessing_div .blessing_content{
    float: right;
    margin-right: 1.15rem;
    height: 4.35rem;
    writing-mode: vertical-rl;
    writing-mode: tb-rl;
    line-height: 0.7rem;
  }
  .content_box .box_middle .blessing_div .sign_content{
    float: right;
    position: relative;
    margin-right: 1rem;
    height: 4.3rem;
    writing-mode: vertical-rl;
    writing-mode: tb-rl;
  }
  .content_box .box_middle .blessing_div .sign_position{
    text-align: right;
  }
  .content_box .box_bottom{
    position: absolute;
    height: 14%;
    top:82%;
  }
  .content_box .box_bottom .send_btn{
    
    height: 1rem;
    width: 5rem;
    margin: 0 auto;
    background: #5a96e2;
    border-radius: 1rem;
    line-height: 1rem;
    text-align: center;
    font-size: 0.4rem;
    
  }
  .content_box .edit_btn{
    position: fixed;
    display: block;
    right: 0;
    bottom: 35%;
    width: 101px;
    height: 114px;
    background-image: url("../assets/img/page_4/edit_btn_off.png");
    background-size: 101px 114px;
  }
  .content_box .edit_btn:active{
    background-image: url("../assets/img/page_4/edit_btn_on.png");
    background-size: 104px 114px;
  }


/* ex-yeweiping001 */
.lamination_bg_element{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

/**------------------------------------------    theme_0     ----------------------------------**/
.theme_0_posiction {
  position: relative;
  width: 100%;
  height: 100%;
}
.theme_0_posiction .bg_fly_left{
  position: absolute;
  bottom: 25%;
  right: 10%;
  z-index: 8;
  width: 100%;
  text-align: right;
}
.theme_0_posiction .bg_fly_left .bg_fly_left_img{
  width: 1.02rem;
  max-width: 10vh;
}
.theme_0_posiction .bg_fly_right{
  position: absolute;
  bottom: 20%;
  left: 18%;
  z-index: 8;
  width: 100%;
  text-align: left;
}
.theme_0_posiction .bg_fly_right .bg_fly_right_img{
  width: 0.96rem;
  max-width: 7vh;
}
.theme_0_posiction .bg_cloud_left{
  position: absolute;
  bottom: 42.5%;
  left: 15%;
  z-index: 8;
  width: 100%;
  text-align: left;
}
.theme_0_posiction .bg_cloud_left .bg_cloud_left_img{
  width: 1.6rem;
  max-width: 10vh;
}
.theme_0_posiction .bg_cloud_right{
  position: absolute;
  bottom: 12.5%;
  right: 4%;
  z-index: 8;
  width: 100%;
  text-align: right;
}
.theme_0_posiction .bg_cloud_right .bg_cloud_right_img{
  width: 1.4rem;
  max-width: 10vh;
}

.theme_0_posiction .bg_human{
  position: absolute;
  bottom: -0.8%;
  z-index: 9;
  width: 100%;
  text-align: center;
}
.theme_0_posiction .bg_human .bg_human_img{
  width: 55%;
  max-width: 34vh;
  margin: 0 auto;
}
.theme_0_posiction .bg_moon{
  position: absolute;
  bottom: 0;
  z-index: 4;
  width: 100%;
  text-align: center;
}
.theme_0_posiction .bg_moon .bg_moon_img{
  width: 100%;
  max-width: 57vh;
  margin: 0 auto;
}
.theme_0_posiction .bg_floor{
  position: absolute;
  bottom: 0;
  z-index: 5;
  width: 100%;
}
.theme_0_posiction .bg_floor .bg_floor_img{
  width: 100%;
}

/**------------------------------------------    theme_1     ----------------------------------**/
.theme_1_posiction {
  position: relative;
  width: 100%;
  height: 100%;
}

.theme_1_posiction .bg_cloud_left{
  position: absolute;
  bottom: 34.6%;
  left: 15%;
  z-index: 5;
  width: 100%;
  text-align: left;
}
.theme_1_posiction .bg_cloud_left .bg_cloud_left_img{
  width: 2.7rem;
  max-width: 20vh;
}
.theme_1_posiction .bg_cloud_right{
  position: absolute;
  top: 37.2%;
  left: 26%;
  z-index: 4;
  width: 100%;
  text-align: left;
}
.theme_1_posiction .bg_cloud_right .bg_cloud_right_img{
  width: 1.8rem;
  max-width: 10vh;
}
.theme_1_posiction .bg_floor_left{
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  text-align: left;
}
.theme_1_posiction .bg_floor_left .bg_floor_left_img{
  width: 3rem;
  max-width: 20vh;
}
.theme_1_posiction .bg_floor_center{
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  text-align: center;
}
.theme_1_posiction .bg_floor_center .bg_floor_center_img{
  width: 4rem;
  max-width: 30vh;
}
.theme_1_posiction .bg_floor_right{
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  text-align: right;
}
.theme_1_posiction .bg_floor_right .bg_floor_right_img{
  width: 2.3rem;
  max-width: 15vh;
}
.theme_1_posiction .bg_guys{
  position: absolute;
  bottom: 2%;
  z-index: 9;
  width: 100%;
  text-align: center;
}
.theme_1_posiction .bg_guys .bg_guys_img{
  width: 30%;
  max-width: 17vh;
}
.theme_1_posiction .bg_branch{
  position: absolute;
  bottom: 2%;
  z-index: 5;
  width: 100%;
  text-align: center;
}
.theme_1_posiction .bg_branch .bg_branch_img{
  width: 100%;
  max-width: 80vh;
}
.theme_1_posiction .bg_moon{
  position: absolute;
  bottom: 0;
  z-index: 3;
  width: 100%;
  text-align: center;
}
.theme_1_posiction .bg_moon .bg_moon_img{
  width: 100%;
  max-width: 57vh;
  margin: 0 auto;
}
.theme_1_posiction .bg_floor{
  position: absolute;
  bottom: 0;
  z-index: 4;
  width: 100%;
}
.theme_1_posiction .bg_floor .bg_floor_img{
  width: 100%;
  max-height: 31.9vh;
}

/**------------------------------------------    theme_4     ----------------------------------**/
.theme_4_posiction {
  position: relative;
  width: 100%;
  height: 100%;
}
.theme_4_posiction .bg_fly_left{
  position: absolute;
  bottom: 25%;
  right: 10%;
  z-index: 8;
  width: 100%;
  text-align: right;
}
.theme_4_posiction .bg_fly_left .bg_fly_left_img{
  width: 1.02rem;
  max-width: 10vh;
}
.theme_4_posiction .bg_fly_right{
  position: absolute;
  bottom: 18%;
  left: 15%;
  z-index: 8;
  width: 100%;
  text-align: left;
}
.theme_4_posiction .bg_fly_right .bg_fly_right_img{
  width: 0.96rem;
  max-width: 7vh;
}
.theme_4_posiction .bg_floor_left{
  position: absolute;
  bottom: 10.5%;
  left: 0;
  z-index: 11;
  width: 100%;
  text-align: left;
}
.theme_4_posiction .bg_floor_left .bg_floor_left_img{
  width: 3rem;
  max-width: 20vh;
}
.theme_4_posiction .bg_floor_center{
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  text-align: center;
}
.theme_4_posiction .bg_floor_center .bg_floor_center_img{
  width: 100%;
  max-width: 60vh;
}
.theme_4_posiction .bg_floor_right{
  position: absolute;
  bottom: 15%;
  left: 0;
  z-index: 11;
  width: 100%;
  text-align: right;
}
.theme_4_posiction .bg_floor_right .bg_floor_right_img{
  width: 1.6rem;
  max-width: 15vh;
}
.theme_4_posiction .bg_human{
  position: absolute;
  bottom: 5%;
  z-index: 4;
  width: 100%;
  text-align: center;
}
.theme_4_posiction .bg_human .bg_human_img{
  width: 58%;
  max-width: 39vh;
}
.theme_4_posiction .bg_branch{
  position: absolute;
  bottom: 2%;
  z-index: 5;
  width: 100%;
  text-align: center;
}
.theme_4_posiction .bg_branch .bg_branch_img{
  width: 100%;
  max-width: 80vh;
}
.theme_4_posiction .bg_moon{
  position: absolute;
  top: -12.2%;
  z-index: 3;
  width: 100%;
  text-align: right;
}
.theme_4_posiction .bg_moon .bg_moon_img{
  width: 47.5%;
  max-width: 37vh;
}
.theme_4_posiction .bg_floor{
  position: absolute;
  bottom: 0;
  z-index: 10;
  width: 100%;
}
.theme_4_posiction .bg_floor .bg_floor_img{
  width: 100%;
  max-height: 23vh;
}

/**------------------------------------------    theme_5     ----------------------------------**/
.theme_5_posiction {
  position: relative;
  width: 100%;
  height: 100%;
}
.theme_5_posiction .bg_cloud_left{
  position: absolute;
  top: 40%;
  left: 15%;
  z-index: 8;
  width: 100%;
  text-align: left;
}
.theme_5_posiction .bg_cloud_left .bg_cloud_left_img{
  width: 2.7rem;
  max-width: 20vh;
}
.theme_5_posiction .bg_strong{
  position: absolute;
  bottom: 5%;
  left: 0;
  z-index: 10;
  width: 100%;
  text-align: right;
}
.theme_5_posiction .bg_strong .bg_strong_img{
  width: 1.3rem;
  max-width: 12vh;
}
.theme_5_posiction .bg_mountain{
  position: absolute;
  bottom: 11.8%;
  left: 0;
  z-index: 9;
  width: 100%;
  text-align: left;
}
.theme_5_posiction .bg_mountain .bg_mountain_img{
  width: 1.6rem;
  max-width: 12vh;
}
.theme_5_posiction .bg_buffalo{
  position: absolute;
  bottom: 3.4%;
  left: 2%;
  z-index: 11;
  width: 100%;
  text-align: left;
}
.theme_5_posiction .bg_buffalo .bg_buffalo_img{
  width: 3.5rem;
  max-width: 30vh;
}
.theme_5_posiction .bg_floor_left_top{
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  text-align: left;
}
.theme_5_posiction .bg_floor_left_top .bg_floor_left_top_img{
  width: 6rem;
  max-width: 50vh;
}
.theme_5_posiction .bg_floor_left_bottom{
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 19;
  width: 100%;
  text-align: left;
}
.theme_5_posiction .bg_floor_left_bottom .bg_floor_left_bottom_img{
  width: 6rem;
  max-width: 20vh;
}
.theme_5_posiction .bg_floor_right_top{
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  text-align: right;
}
.theme_5_posiction .bg_floor_right_top .bg_floor_right_top_img{
  width: 2.8rem;
  max-width: 20vh;
}
.theme_5_posiction .bg_floor_right_bottom{
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 19;
  width: 100%;
  text-align: right;
}
.theme_5_posiction .bg_floor_right_bottom .bg_floor_right_bottom_img{
  width: 2.3rem;
  max-width: 15vh;
}
.theme_5_posiction .bg_human{
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 18;
  width: 100%;
  text-align: right;
}
.theme_5_posiction .bg_human .bg_human_img{
  width: 2.8rem;
  max-width: 26vh;
}
.theme_5_posiction .bg_moon{
  position: absolute;
  top: -12.2%;
  z-index: 3;
  width: 100%;
  text-align: right;
}
.theme_5_posiction .bg_moon .bg_moon_img{
  width: 47.5%;
  max-width: 30vh;
}
.theme_5_posiction .bg_floor_top{
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 5;
  width: 100%;
}
.theme_5_posiction .bg_floor_top .bg_floor_top_img{
  width: 100%;
  max-height: 15vh;
}
.theme_5_posiction .bg_floor_bottom{
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 4;
  width: 100%;
}
.theme_5_posiction .bg_floor_bottom .bg_floor_bottom_img{
  width: 100%;
  max-height: 40vh;
}

/**------------------------------------------    theme_9     ----------------------------------**/
.theme_9_posiction {
  position: relative;
  width: 100%;
  height: 100%;
}
.theme_9_posiction .bg_fly_left{
  position: absolute;
  bottom: 25%;
  right: 10%;
  z-index: 8;
  width: 100%;
  text-align: right;
}
.theme_9_posiction .bg_fly_left .bg_fly_left_img{
  width: 1.02rem;
  max-width: 10vh;
}
.theme_9_posiction .bg_fly_right{
  position: absolute;
  bottom: 40%;
  left: 32%;
  z-index: 8;
  width: 100%;
  text-align: left;
}
.theme_9_posiction .bg_fly_right .bg_fly_right_img{
  width: 0.96rem;
  max-width: 7vh;
}
.theme_9_posiction .bg_cloud_left{
  position: absolute;
  top: 40%;
  left: 15%;
  z-index: 8;
  width: 100%;
  text-align: left;
}
.theme_9_posiction .bg_cloud_left .bg_cloud_left_img{
  width: 2.7rem;
  max-width: 20vh;
}


.theme_9_posiction .bg_human_left{
  position: absolute;
  bottom: 12%;
  right: 50%;
  z-index: 9;
  width: 100%;
  text-align: right;
}
.theme_9_posiction .bg_human_left .bg_human_left_img{
  width: 33%;
  max-width: 24vh;
  margin-right: 0.55rem;
}
.theme_9_posiction .bg_human_right{
  position: absolute;
  bottom: 11.5%;
  left: 50%;
  z-index: 9;
  width: 100%;
  text-align: left;
}
.theme_9_posiction .bg_human_right .bg_human_right_img{
  width: 25%;
  max-width: 20vh;
  margin-left: 0.2rem;
}
.theme_9_posiction .bg_moon{
  position: absolute;
  bottom: 0;
  z-index: 4;
  width: 100%;
  text-align: center;
}
.theme_9_posiction .bg_moon .bg_moon_img{
  width: 95%;
  max-width: 75vh;
  margin: 0 auto;
}
.theme_9_posiction .bg_floor{
  position: absolute;
  bottom: 0;
  z-index: 5;
  width: 100%;
}
.theme_9_posiction .bg_floor .bg_floor_img{
  width: 100%;
  max-height: 39vh;
}
.theme_9_posiction .bg_floor_left{
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  text-align: left;
}
.theme_9_posiction .bg_floor_left .bg_floor_left_img{
  width: 1.9rem;
  max-width: 15vh;
}
.theme_9_posiction .bg_floor_right{
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  text-align: right;
}
.theme_9_posiction .bg_floor_right .bg_floor_right_img{
  width: 6.8rem;
  max-width: 50vh;
}

.return_home{
    position: fixed;
    right: 3%;
    bottom: 1.5%;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 1rem;
    background: #ffffff;
    color: #2c3e50;
    opacity: 0.4;
}
.return_home_text{
    font-size: 0.4rem;
    width: 100%;
    height: 100%;
    line-height: 1.5rem;
    text-align: center;
    font-weight: bold;
}

</style>
