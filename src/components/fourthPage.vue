<template>
  <div id="fourth-page">
    <template v-if="this.$route.query.themeId == 0">
      <img class="bg-img" src="../assets/img/page_4/bg0.png"/>
    </template>
    <template v-if="this.$route.query.themeId == 1">
      <img class="bg-img" src="../assets/img/page_4/bg1.png"/>
    </template>
    <template v-if="this.$route.query.themeId == 4">
     <img class="bg-img" src="../assets/img/page_4/bg4.png"/>
    </template>
    <template v-if="this.$route.query.themeId == 5">
      <img class="bg-img" src="../assets/img/page_4/bg5.png"/>
    </template>
    <template v-if="this.$route.query.themeId == 9">
      <img class="bg-img" src="../assets/img/page_4/bg9.png"/>
    </template>

    <div class="content_box">
      <div class="box_top">
        <div class="acrostic_div">
          <div class="acrostic_position">
            <div class="acrostic_item acrostic_item_0">{{ acrostic_item_0 }}</div>
            <div class="acrostic_item acrostic_item_1">{{ acrostic_item_1 }}</div>
            <div class="acrostic_item acrostic_item_2">{{ acrostic_item_2 }}</div>
            <div class="acrostic_item acrostic_item_3">{{ acrostic_item_3 }}</div>
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
          <div class="blessing_item sign_content">
            <div class="sign_position">
             — AI作词&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
           
          </div>
          <div class="blessing_item blessing_content">
            {{ blessings }}
          </div>
        </div>
      </div>
      <div  class="box_bottom">
        <div class="send_btn">发送给Ta</div>
      </div>
    </div>

  </div>
</template>
<script>
  import * as types from '@/store/types'

  export default {
    name: 'poem',
    data(){
      return {
        selectKeywords: 0,
        theme_title: "",
        poemUid: "",
        acrostic_item_0: "",
        acrostic_item_1: "",
        acrostic_item_2: "",
        acrostic_item_3: "",
        blessings: "",
      }
    },
    created(){
      this.getPoem();

    },
    methods: {
      getPoem(){
        // 发请求做诗请求，带参数themeId，keywordIds，acrosticUid
        //{themeId: themeId, keywordIds: keywordIds, acrosticUid: acrosticUid}
        var model = this.$route.query;
        this.$get(types.getAcrostic, model).then((response => {
          this.poemUid = response.data.poemUid;
          this.acrostic_item_0 = response.data.acrostic[0];
          this.acrostic_item_1 = response.data.acrostic[1];
          this.acrostic_item_2 = response.data.acrostic[2];
          this.acrostic_item_3 = response.data.acrostic[3];
          this.blessings = response.data.blessings;
          this.theme_title = response.data.themeTitle;
        }))
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
    height: 45%;
    width: 100%;
    top:0;
  }
  .content_box .box_top .acrostic_div,.theme_div{
    width: 50%;
  }
  .content_box .box_top .acrostic_div .acrostic_position{
    position: absolute;
    width: 45%;
    bottom: 0;
  }
  .content_box .box_top .acrostic_div .acrostic_item {
    float: right;
    display: inline-block;
    font-size: 0.63rem;
    font-family: 华文行楷;
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
    bottom: 0;
  }
  .content_box .box_top .theme_div .theme_title{
    height: 5.6rem;
    font-size: 1.35rem;
    font-weight: bolder;
    font-family: 华文行楷;
    writing-mode: vertical-rl;
    writing-mode: tb-rl;
    margin-left: 1rem;
  }

  .content_box .box_middle{
    position: absolute;
    height: 37%;
    width: 100%;
    top:45%;
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
    width: 58%;
    float: right;
  }
  .content_box .box_middle .blessing_div .blessing_content{
    height: 4.3rem;
    writing-mode: vertical-rl;
    writing-mode: tb-rl;
    line-height: 0.7rem;
  }
  .content_box .box_middle .blessing_div .sign_content{
    position: relative;
    margin-right: 1rem;
    height: 4.3rem;
    writing-mode: vertical-rl;
    writing-mode: tb-rl;
  }
  .content_box .box_middle .blessing_div .sign_position{
    position: absolute;
    bottom: 0;
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



</style>
