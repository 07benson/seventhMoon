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
      <div class="canvas_div">
        <canvas id="canvas">
          你的浏览器不支持canvas，请升级浏览器！
        </canvas>
      </div>

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
  import '../style/showPage.css'

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
      this.canvas();
    },
    created(){
      this.getPoem();
    },
    methods: {
      canvas(){
        console.log("画画");
        var canvas = document.getElementById("canvas");
        var bg_img = new Image();
        /*
        bg_img.onload = function (){
          
          
        }
        */
        bg_img.src = "http://localhost:8080/static/img/bg.c66e4d1.png";
        console.log("画画");
        var canvas_context = canvas.getContext('2d');
        canvas_context.drawImage(bg_img,0,0,100,100);
       },
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
      sendRecordStatus(){//查看情书埋点

      },
      toIndex(){
        this.$router.push({path: '/firstPage?rd='+Math.random()});
      },
      //app右上角分享接口调用
      share_btn() {
        
       }

    },

  }
</script>
<style scoped>
.canvas_div{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ffffff;

}
#canvas{
  width: 100%;
  height: 100%;
}

</style>
