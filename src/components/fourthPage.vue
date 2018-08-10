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
            <!-- <div class="acrostic_item acrostic_item_0">{{ acrostic_item_0 }}</div>
            <div class="acrostic_item acrostic_item_1">{{ acrostic_item_1 }}</div>
            <div class="acrostic_item acrostic_item_2">{{ acrostic_item_2 }}</div>
            <div class="acrostic_item acrostic_item_3">{{ acrostic_item_3 }}</div> -->
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
      <div class="edit_btn" @click="editWindow()"></div>
    </div>

    <div class="edit_area" :class="{'showing':show=='show'}">
      <input type="text" class="edit_input" :class="'edit_table_'+index.toString()" 
              v-for="(item,index) in acrostic_item" v-model="acrostic_item[index]" 
              :key="index" v-on:input="judgeConten(index)" @blur="fixContent(index)">
      
      
      <textarea type="text" class="edit_blessing" rows=5 cols=20 v-model="blessings"
              v-on:input="judgeConten('btn')" @blur="fixContent('btn')">
      </textarea>

      <button class="confirm_btn" @click="confirmEdit()">确认</button>
      <button class="cancel_btn" @click="cancelEdit()">取消</button>
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
        acrostic_item:[/*'一二三四五六七',
                       '一二三四五六七',
                       '一二三四五六七',
                       '一二三四五六七'*/],
        show:'',
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
          this.acrostic_item = response.data.acrostic.slice(0,4);
          // this.acrostic_item_0 = response.data.acrostic[0];
          // this.acrostic_item_1 = response.data.acrostic[1];
          // this.acrostic_item_2 = response.data.acrostic[2];
          // this.acrostic_item_3 = response.data.acrostic[3];
          this.blessings = response.data.blessings;
          this.theme_title = response.data.themeTitle;

          // 将初始数据保存
          sessionStorage.setItem('poem',JSON.stringify(this.acrostic_item));
          sessionStorage.setItem('blessing',this.blessings);
        }))
      },

      judgeConten(e){
        if (e=='btn') {
          var cur_blessing = this.blessings;
          var blessinglen = this.strLen(cur_blessing);
          if (blessinglen<=0) {
            alert('祝福语不可为空哦！')
          } else if (blessinglen>198) {
            this.blessings = cur_blessing.substring(0,101)
          }
          
        } else {
          var cur_content = this.acrostic_item[e];
          var len = this.strLen(cur_content);
          if (len<=0) {
            alert('诗句不可为空哦！')
          } else if (len>12) {
            this.acrostic_item[e] = cur_content.substring(0,7)
          }
        }
      },

      fixContent(e){
        if (e=='btn') {
          var cur_blessing = this.blessings;
          var blessinglen = this.strLen(cur_blessing);
          if (blessinglen<=0) {
            this.blessings = sessionStorage.getItem('blessing')
          }
        } else {
          var cur_content = this.acrostic_item[e];
          var len = this.strLen(cur_content);
          if (len==0) {
            this.acrostic_item[e] = JSON.parse(sessionStorage.getItem('poem'))[e];
          } 
        }
      },

      editWindow(){
        this.show = 'show';
      },

      strLen(str){
        var len = 0;
        for (var i=0; i<str.length; i++) { 
        var c = str.charCodeAt(i); 
         
        if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) { 
          len++; 
          } else { 
            len+=2; 
            } 
          } 
        return len;
      },

      confirmEdit(){
        this.show = 'hide';
        sessionStorage.setItem('poem',JSON.stringify(this.acrostic_item));
        sessionStorage.setItem('blessing',this.blessings);
      },

      cancelEdit(){
        this.show = 'hide';
        // 取消按钮就恢复原来数据
        var acrostic = sessionStorage.getItem('poem');
        var blessing = sessionStorage.getItem('blessing');
        this.acrostic_item = JSON.parse(acrostic);
        this.blessings = blessing;
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
    width: 100%;
    float: right;
  }
  .content_box .box_middle .blessing_div .blessing_content{
    float: right;
    margin-right: 1rem;
    height: 4.3rem;
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

  .edit_area{
    width: 100%;
    height:100%;
    border: black solid 1px;
    position: absolute;
    top: 0%;
    margin-left: 0%;
    background-color:rgba(249, 249, 249,1);
    z-index: 5000;
    display: none
  }

  .edit_area .edit_input{
    background-color:rgba(255, 255, 255,1);
    position: absolute;
    margin-left: 18%;
    top: 0%;
    text-align: center;
    line-height: 25pt;
    height: 5%;
    font-size: 20pt;
    width: 64%;
    font-family: 华文行楷;
    border: 1px,rgba(222, 222, 222, 1)
  }

  .edit_area .edit_blessing{
    background-color:rgba(255, 255, 255,1);
    width: 78%;
    height: 130pt;
    position: absolute;
    margin-left: 11%;
    top: 200pt;
    font-size: 13pt;
    font-family:华文行楷;
    border: 1px,rgba(222, 222, 222, 1)
  }

  .showing{
    display: table
  }

  .edit_area .edit_table_0{
    top: 50pt;
  }

  .edit_area .edit_table_1{
    top: 85pt;
  }

  .edit_area .edit_table_2{
    top: 120pt;
  }

  .edit_area .edit_table_3{
    top: 155pt;
  }

  .edit_area .confirm_btn{
    top: 380pt;
    background-color: rgb(86, 136, 222);
    color: rgb(255, 255, 255);
    position: absolute;
    width: 70%;
    margin-left: 15%;
    font-size: 18pt;
    height: 44pt;
    line-height: 44pt
  }

  .edit_area .cancel_btn{
    top: 430pt;
    background-color: rgb(237, 237, 237);
    color: rgb(82, 82, 82);
    position: absolute;
    width: 70%;
    margin-left: 15%;
    font-size: 18pt;
    height: 44pt;
    line-height: 44pt
  }
</style>
