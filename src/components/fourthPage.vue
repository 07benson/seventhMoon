<template>
  <div id="fourth-page">
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
            <div class="theme_title" >
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
      
      <div  class="box_bottom" v-show="send_btn_display">
        <div class="send_btn" @click="doShare()">发送给Ta</div>
      </div>
      <div v-show="edit_btn_display" class="edit_btn" @click="editWindow()"></div>
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

    <div v-show="um_input_display" class="query_div">
      <div  class="um_input_box">
        <div class="center_div">
          <div class="box_top">请输入Ta的姓名/UM号</div>
          <div class="box_center"><input type="text" v-model="query_name" ></div>
          <div v-show="msg_display" class="box_msg">找不到Ta，您可能输错了哦</div>
          <div class="box_bottom">
            <button @click="cancel_query()">取消</button>
            <button class="confirm" @click="query_btn()">确认</button>
          </div>
        </div>
      </div>
    </div>
    <div v-show="um_list_display" class="um_list_box">
        <div class="query_content_div">
          搜索“<span class="query_content">{{ query_name }}</span>”
          <div class="um_list_box_close" @click="close_um_list_box()"></div>
        </div>
        <div class="query_list" >
          <div class="result_item" v-for="(item,index) in query_res" :key="index" @click="select_item(index)">
            <div>
              <span class="um_name">{{ item.realName }}</span>
              <span class="um_account">({{ item.umid }})</span>
            </div>
            <div>
              <span class="um_department">{{ item.department }}</span>
            </div>
          </div>
        </div>
    </div>
    <div class="send_confirm_div"  v-show="send_confirm_box_display">
      <div class="send_confirm_box">
        <div class="center_div">
          <div class="box_top">递上情书</div>
          <div class="box_center"><input type="text" v-model="confirm_name" readonly ></div>
          <div class="box_check"  @click="checkbox_click()">
            <div class="box_check_content">
              <div class="checkbox" :class="{'checkbox_selected':checkbox_selected}"></div>
              匿名发送
            </div>
          </div>
          <div class="box_bottom">
            <button @click="cancel_send()">取消</button>
            <button class="confirm" @click="confirm_send()">确认</button>
          </div>
        </div>
      </div>
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
    
    <div class="alert_div" v-show="alert_display">{{ alert_msg }}</div>

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
        acrostic_item:[],
        show:'',
        themeId: -1,
        query_res:[],
        query_name:'',
        send_btn_display: true,
        edit_btn_display: true,
        um_input_display: false,
        um_list_display: false,
        msg_display:false,
        confirm_name: '',
        confirm_item_index: 0,
        send_confirm_box_display: false,
        checkbox_selected: false,
        linkUrl:"",
        alert_msg: "",
        alert_display: false,
        alert_setTimeOut: false,
        loading_display: false,
      }
    },
    mounted(){
      this.themeId = this.$route.query.themeId;
      
    },
    created(){
      this.getPoem();
    },
    methods: {
      getPoem(){
        // 发请求做诗请求，带参数themeId，keywordIds，acrosticUid
        //{themeId: themeId, keywordIds: keywordIds, acrosticUid: acrosticUid}
        this.loading_display = true;
        var model = this.$route.query;
        this.$get(types.getAcrostic, model).then((response => {
          this.loading_display = false;
          this.poemUid = response.data.poemUid;
          this.acrostic_item = response.data.acrostic.slice(0,4);
          this.blessings = response.data.blessings;
          this.theme_title = response.data.themeTitle;
          this.share_btn();
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
            this.alert('祝福语不可为空哦！');
          } else if (blessinglen>198) {
            this.blessings = cur_blessing.substring(0,101)
          }
          
        } else {
          var cur_content = this.acrostic_item[e];
          var len = this.strLen(cur_content);
          if (len<=0) {
            this.alert('诗句不可为空哦！');
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
          if (len<=0) {
            this.acrostic_item[e] = JSON.parse(sessionStorage.getItem('poem'))[e];
          } 
        }
      },

      editWindow(){//打开编辑窗口
        this.show = 'show';
      },
      doShare(){
        this.um_input_display = true;
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
        var poemUid = this.poemUid;
        var acrostic = this.acrostic_item;
        var blessing = this.blessings;

        var data = new Array();
        data[0] = poemUid;
        data[1] = acrostic;
        data[2] = blessing;
        
        //console.log("data="+JSON.stringify(data));
        this.$post(types.postEdit, 
          {
            'data':JSON.stringify(data),
            //'acrosticJson':JSON.stringify(acrostic),
            //'blessing':blessing,
          }
        ).then((response => {
          //console.log(response);
          this.alert("保存成功");
          this.show = 'hide';
          sessionStorage.setItem('poem',JSON.stringify(this.acrostic_item));
          sessionStorage.setItem('blessing',this.blessings);
        }))
      },

      cancelEdit(){
        this.show = 'hide';
        // 取消按钮就恢复原来数据
        var acrostic = sessionStorage.getItem('poem');
        var blessing = sessionStorage.getItem('blessing');
        this.acrostic_item = JSON.parse(acrostic);
        this.blessings = blessing;
      },

      // 调用快乐平安查询接口
      query_btn(){

        let self = this;
        var queryname = this.query_name;
        if (queryname.length<1) {
          this.alert('请输入2～4个中文哟');
        }
        let queryname_data = {
          "name":queryname
        };

        let queryEmpInfoUrl = paic.queryEmpInfo;
        let parms = "";
        let cookie = document.cookie;
        if(cookie.indexOf("hm_sessionid") != -1){
            var loginsession = cookie.split("hm_sessionid=")[1];
            loginsession = loginsession.split(";")[0];
        }
        if(App.IS_ANDROID){
            parms = "?loginsession=" + loginsession;
        }
        queryEmpInfoUrl = queryEmpInfoUrl + parms;
        this.msg_display = false;
        this.$post(queryEmpInfoUrl,queryname_data).then(response => {
          if(response.code == "200"){
            console.log(response);
            this.query_res = response.body;
            if(this.query_res==null||this.query_res.length <1){
                this.msg_display = true;
                return;
            }
            this.um_list_display = true;
            this.um_input_display = false;
          }else{
            this.alert(response.message);
            //TODO 
          }
          
        }).catch(err => {
          console.log(err);
          self.alert(err);
        })
      },
      cancel_query(){
        this.um_input_display = false;
        this.query_name = "";
        this.msg_display = false;
      },
      close_um_list_box(){
        this.um_list_display = false;
      },
      select_item(item_index){
        console.log(this.query_res[item_index].realName);
        this.confirm_item_index = item_index;
        this.confirm_name = this.query_res[item_index].realName + '('+this.query_res[item_index].umid+')';
        this.send_confirm_box_display = true;
        this.um_list_display = false;
      },
      cancel_send(){
        this.confirm_item_index = 0;
        this.confirm_name = '';
        this.send_confirm_box_display = false;
        this.query_name = "";
      },
      confirm_send(){
        var thisurl = window.location.href;
        var linkUrl = thisurl.substring(0,thisurl.indexOf('#')+1)+ "/showPage?poemUid="+this.poemUid;
      
        console.log(linkUrl);
        var isAnonymity = "1";
        var loveLetterId = this.poemUid;
        var toUmId = this.query_res[this.confirm_item_index].umid;
        var toSex = this.query_res[this.confirm_item_index].sex;

        if(this.checkbox_selected){
          isAnonymity = "0";
        }
        let send_data = {
          "isAnonymity":isAnonymity,
          "linkUrl":linkUrl,
          "loveLetterId":loveLetterId,
          "toUmId":toUmId,
          "toSex":toSex
        };
        let sendLoveLetterUrl = paic.sendLoveLetter;
        let parms = "";
        let cookie = document.cookie;
        if(cookie.indexOf("hm_sessionid") != -1){
            var loginsession = cookie.split("hm_sessionid=")[1];
            loginsession = loginsession.split(";")[0];
        }
        if(App.IS_ANDROID){
            parms = "?loginsession=" + loginsession;
        }
        sendLoveLetterUrl = sendLoveLetterUrl + parms;
        console.log(sendLoveLetterUrl);
        this.$post(sendLoveLetterUrl,send_data).then(response => {
          if(response.code == "200"){
            this.send_confirm_box_display = false;
            this.edit_btn_display = false;
            this.send_btn_display = false;
            this.alert("发送成功");
          }else if(response.code == "606"){  
            this.alert("登录态已过期，请重新登录试试");
          }else{
            this.alert(response.message);
          }
        }).catch(err => {
          console.log(err);
        });
      },
      checkbox_click(){
        if(this.checkbox_selected){
          this.checkbox_selected = false;
        }else{
          this.checkbox_selected = true;
        }
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
       },
       alert(msg){
         if( this.alert_setTimeOut ){
           clearTimeout(this.alert_setTimeOut);
         }
         this.alert_display = true;
         this.alert_msg = msg;
         this.alert_setTimeOut = setTimeout(() => {
                this.alert_display = false;
            }, 2000);
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
    font-family: 华文行楷;
    letter-spacing:0.07rem;
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
    font-size: 1.32rem;
    font-weight: bolder;
     letter-spacing:0.05rem;
    font-family: 华文行楷;
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
    top:83%;
  }
  .content_box .box_bottom .send_btn{
    
    height: 1.2rem;
    width: 8rem;
    margin: 0 auto;
    line-height: 1.2rem;
    text-align: center;
    font-size: 0.44rem;
    background-image: url("../assets/img/page_4/send_btn_off.png");
    background-size: 8rem 1.2rem;
    
  }
  .content_box .edit_btn{
    position: fixed;
    display: block;
    left: -15px;;
    bottom: 42%;
    width: 114px;
    height: 114px;
    background-image: url("../assets/img/page_4/edit_btn_off.png");
    background-size: 114px 114px;
  }
  .content_box .edit_btn:active{
    background-image: url("../assets/img/page_4/edit_btn_on.png");
    background-size: 114px 114px;
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
    line-height: 1.0rem;
    height: 1.0rem;
    font-size: 0.678rem;
    width: 64%;
    font-family: 华文行楷;
    border: 1px,rgba(222, 222, 222, 1)
  }

  .edit_area .edit_blessing{
    background-color:rgba(255, 255, 255,1);
    width: 78%;
    height: 4.6rem;
    position: absolute;
    margin-left: 11%;
    top: 5.9rem;
    font-size: 0.46rem;
    font-family:华文行楷;
    border: 1px,rgba(222, 222, 222, 1)
  }

  .showing{
    display: table
  }

  .edit_area .edit_table_0{
    top: 1.0rem;
  }

  .edit_area .edit_table_1{
    top: 2.1rem;
  }

  .edit_area .edit_table_2{
    top: 3.2rem;
  }

  .edit_area .edit_table_3{
    top: 4.3rem;
  }

  .edit_area .confirm_btn{
    top: 11.5rem;
    background-color: rgb(86, 136, 222);
    color: rgb(255, 255, 255);
    position: absolute;
    width: 70%;
    margin-left: 15%;
    font-size: 0.7rem;
    height: 1.5rem;
    line-height: 1.5rem
  }

  .edit_area .cancel_btn{
    top: 13.5rem;
    background-color: rgb(237, 237, 237);
    color: rgb(82, 82, 82);
    position: absolute;
    width: 70%;
    margin-left: 15%;
    font-size: 0.7rem;
    height: 1.5rem;
    line-height: 1.5rem
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


/*----------------------------------     um查询        ---------------------------------*/
.query_div {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 4000;
  background: rgba(0, 0, 0, 0.55);
}
.query_div .um_input_box{
  position: absolute;
  width: 100%;
  
  bottom: 25%;
  margin: 0 auto;
  z-index: 4001;
}
.query_div .um_input_box .center_div{
  color: #000000;
  height: 100%;
  width: 8rem;
  margin: 0 auto;
  border: 1px solid #333333;
  border-radius: 0.2rem;
  background: #ffffff;
}
.query_div .um_input_box .center_div .box_top{
  text-align: center;
  font-size: 0.4rem; 
  line-height: 1rem;
}
.query_div .um_input_box .center_div .box_center{
  height: 1.4rem;
  text-align: center;
  font-size: 0.4rem; 
  line-height: 1rem;
}
.query_div .um_input_box .center_div .box_center input{
  text-align: center;
  padding: 0.1rem 0.5rem;
  font-size: 0.53rem;
  border: 1px solid #333333;
  height: 1rem;
  width: 88%;
}
.query_div .um_input_box .center_div .box_msg{
  color: red;
  font-size: 0.4rem;
  text-align: center;
  line-height: 0.6rem;
  margin-bottom: 0.1rem;
}
.query_div .um_input_box .center_div .box_bottom{
  height: 1.3rem;
  text-align: center;
  font-size: 0.4rem; 
  line-height: 1rem;
  border-top: 1px solid #333333;
}
.query_div .um_input_box .center_div .box_bottom button{
  height: 100%;
  width: 49%;
}
.query_div .um_input_box .center_div .box_bottom .confirm{
  border-left:1px solid #333333;
}
.um_list_box{
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  z-index: 4002;
}
.um_list_box .query_content_div{
  position: relative;
  padding: 0.2rem 0.3rem 0.1rem 0.3rem;
  height: 1.5rem;
  font-size: 0.6rem;
  line-height: 1.5rem;
  background: #e4e4e4;
}
.um_list_box .query_content_div .um_list_box_close{
  position: absolute;
  bottom: 0.1rem;
  right: 0.1rem;
  width: 1rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  border-radius: 1.5rem;
  color: #868686;
  background-image: url("../assets/img/page_4/close.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 0.8rem;
}
.um_list_box .query_list{
  height: calc(100% - 1.5rem);
  overflow-y: scroll;
}
.um_list_box .query_list .result_item{
  font-size: 0.36rem;
  line-height: 0.5rem;
  height: 2rem;
  border-bottom: 1px solid #9b9b9b;
  padding: 0.4rem 0.4rem;
}
.um_list_box .query_list .result_item .um_name{
    font-size: 0.47rem;
    color: #ff8d00;
    font-weight: 500;
}
.um_list_box .query_list .result_item .um_account{
    padding-left: 0.18rem;
    font-size: 0.4rem;
    color: #989898;
}
.um_list_box .query_list .result_item .um_department {
    display: inline-block;
    margin-top: 0.2rem;
    font-size: 0.4rem;
    color: #989898; 
}

.send_confirm_div {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.55);
  z-index: 4005;
}
.send_confirm_div .send_confirm_box{
  position: absolute;
  width: 100%;
  bottom: 25%;
  margin: 0 auto;
  z-index: 4006;
}
.send_confirm_div .send_confirm_box .center_div{
  color: #000000;
  height: 100%;
  width: 8rem;
  margin: 0 auto;
  border: 1px solid #333333;
  border-radius: 0.2rem;
  background: #ffffff;
}
.send_confirm_div .send_confirm_box .center_div .box_top{
  text-align: center;
  font-size: 0.4rem; 
  line-height: 1rem;
}
.send_confirm_div .send_confirm_box .center_div .box_center{
  height: 1.2rem;
  text-align: center;
  font-size: 0.4rem; 
  line-height: 1rem;
}
.send_confirm_div .send_confirm_box .center_div .box_center input{
  text-align: center;
  padding: 0.1rem 0.5rem;
  font-size: 0.43rem;
  border: 1px solid #333333;
  height: 1rem;
  width: 88%;
}
.send_confirm_div .send_confirm_box .center_div .box_check{
  width: 100%;
  color: #333333;
  font-size: 0.4rem;
  text-align: center;
  height: 1rem;
  margin-bottom: 0.2rem;
}
.send_confirm_div .send_confirm_box .center_div .box_check_content{
  position: relative;
  margin: 0 auto;
  height: 1rem;
  width: 2rem;
  line-height: 0.8rem;
}


.send_confirm_div .send_confirm_box .center_div .box_bottom{
  height: 1.3rem;
  text-align: center;
  font-size: 0.4rem; 
  line-height: 1rem;
  border-top: 1px solid #333333;
}
.send_confirm_div .send_confirm_box .center_div .box_bottom button{
  height: 100%;
  width: 49%;
}
.send_confirm_div .send_confirm_box .center_div .box_bottom .confirm{
  border-left:1px solid #333333;
}
.send_confirm_div .send_confirm_box .checkbox{
  position: absolute;
  left: -0.8rem;
  top: 0;
  height: 0.8rem;
  width: 0.8rem;
  display: inline-block;
  border-radius: 0.6rem;
  background-image: url("../assets/img/page_4/checkbox_off.png");
  background-repeat: no-repeat;
  background-position: center;
}
.send_confirm_div .send_confirm_box .checkbox_selected{
  background-image: url("../assets/img/page_4/checkbox_on.png");
  background-repeat: no-repeat;
  background-position: center;
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