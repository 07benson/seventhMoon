<template>
<div id="first-page">
  <div class="first_page">
    <img class="bg-img animated delay-1s" :class="{ 'fadeOut': p0_bg_fadeOut }" src="../assets/img/page_0/bg00.png"/>
    <img class="bg-img animated" v-show="p1_bg_fadeIn" :class="{ 'fadeIn': p1_bg_fadeIn }" src="../assets/img/page_1/bg01.png"/>
    <div class="content_box">
      <div class="circle_box">
        <div class="round"  v-for="(item,index) in typeList" :key="index"
            :class="['round_'+index,{'to_center':circleActive}]"
             @click="circleClick(item)">
          <div class="circle">{{item.name}}</div>
          <div class="radio" :class="'radio_'+index.toString()"></div>
        </div>
      </div>
      <div class="moon animated " :class="{'fadeOut':circleActive}"></div>
      <div class="man " :class="{'man_out':circleActive}"></div>
      <div class="girl " :class="{'girl_out':circleActive}"></div>
      <div class="bridge-shadow animated " :class="{'fadeOut':circleActive}"></div>
      <div class="bridge animated " :class="{'fadeOut':circleActive}"></div>
      <div class="left-cloud animated" :class="{'slideOutLeft':circleActive}"></div>
      <div class="right-cloud animated" :class="{'slideOutRight':circleActive}"></div>
      <div class="bottom-cloud2 animated" :class="{ 'fadeOutDown':circleActive }"></div>
      <div class="bottom-cloud1 animated" :class="{ 'fadeOutDown':circleActive }"></div>
      <div class="left_darkhill animated" :class="{ 'fadeOut':circleActive }"></div>
      <div class="right_darkhill"></div>
      <div class="left_lighthill " :class="{'left_lighthill_move':circleActive}"></div>
      <div class="right_lighthill"></div>
      <div class="bird-left animated" :class="{'fadeOut':circleActive}"></div>
     </div>
  </div>
  <div class="second_page" v-show="circleActive">
    <div class="content_box">
      <div class="top_lamination">
        <div class="top_relative">
          <div class="main_div "  :class="{'main_div_out':thirdActive}">
            <div class="bd bd_0"></div>
            <div class="round round_0 " :class="{'circle_reduce':thirdActive}">
              <div class="radio radio_0" :class="{'circle_reduce':thirdActive}"></div>
            </div>
            <div class="circle circle_0" :class="{'circle_reduce':thirdActive}">{{ theme }}</div>
            
            <div class="btn_box btn_box_0">
              <div class="man man_0" :class="{'man_1':gender=='male'}" @click="confirmGender('male')"></div>
              <div class="woman woman_0" :class="{'woman_on':gender=='female'}" @click="confirmGender('female')"></div>
              <input v-model="userName" type="text" placeholder="Ta的姓名或昵称" v-on:input="guessGender($event)">
              <button @click="getKeywordList()">AI Go</button>
            </div>
          </div>
        </div>
      </div>
      <!---->
      <div class="circle_box"></div>
      <div class="bottom_darkhill bottom_darkhill_0"></div>
      <div class="top_cloud"></div>
      <div class="left_darkhill_second animated" :class="{'fadeIn':circleActive}"></div>
      <div class="right_darkhill"></div>
      <!--<div class="left_lighthill"></div>-->
      <div class="right_lighthill"></div>
      <!--<div class="bird-left"></div>-->
      <div class="left-cloud left-cloud_0"></div>
      <div class="right-cloud"></div>
      
      <div class="moon_second moon_second_active" :class="{'moon_second_out':thirdActive}"></div>
      <div class="bird_0"></div>
    </div>
   </div>
  <div class="third_page" v-show="thirdActive">
    <div class="content_box">
      <div class="circle_box">
        <div class="round" :class="'circle_'+index.toString()" v-for="(item,index) in keywordList" :key="index"
             @click="kwSelect(item)">
          <div class="circle" :class="{'is-selected':item.selected}">
            <template v-if="item.name.length < 4">
              <div class="keyword_text">{{item.name}}</div>
            </template>
            <template v-if="item.name.length == 4">
              <div class="keyword_text_4">{{item.name}}</div>
            </template>
            
          </div>
          <div class="radio" :class="'radio_'+index.toString()"></div>
        </div>
        <button class="ai-area" @click="nextPage()">AI Go</button>
       </div>
      
     </div>
   </div>
    
  <div class="err_popup" :class="{'popup_win':is_popup}">
      <div class="crowding_img_div">
        <img class="crowding_img" src="../assets/img/crowding.png"/>
      </div>
      <div class="crowding_msg">
        活动超级火爆<br/>
        网络十分拥挤...
      </div>
      <div class="try_btn_div">
        <button class="try_btn" @click="err_try()">我要挤一挤</button>
      </div>
   </div>
  <div class="alert_div" v-show="alert_display">{{ alert_msg }}</div>
  <div class="loading" v-show="loading_display">
      <div class="l_center">
        <img class="loading_img" src="../assets/img/loading.gif"/>
      </div>
   </div>
   <div class="bird-right " :class="{'bird_right_move':circleActive,'bird_right_out':thirdActive}"></div>
</div>  
</template>
<script>
  import * as types from '@/store/types'
  import * as paic from '@/store/paic'
  import App from "../assets/js/native.js"
  import '../style/firstPage.css'

  export default {
    name: 'firstPage',
    data(){
      return {
        circleActive: false,
        thirdActive: false,
        typeList: [],
        is_popup:false,
        loading_display:false,
        alert_msg: "",
        alert_display: false,
        alert_setTimeOut: false,
        p0_bg_fadeOut:false,
        p1_bg_fadeIn:false,
        //secondPage params
        themeId: -1,
        theme: '',
        gender: '',
        userName: '',
        //thirdPage params
        selectKeywords: 0,
        keywordList: [],
        acrosticUid:'',
        selecteId:[],
       }
     },
    methods: {
      getTheme(){
        this.loading_display = true;
        this.$get(types.getTheme).then(
          (response => {
            this.typeList = response['listData'];
            this.loading_display = false;
          })
        ).catch(err => {
          if (err != null) {
            this.is_popup = true;
            this.loading_display = false;
          }
        });
      },

      isEmojiCharacter(substring) {
        for ( var i = 0; i < substring.length; i++) {
        var hs = substring.charCodeAt(i);
        if (0xd800 <= hs && hs <= 0xdbff) {
          if (substring.length > 1) {
            var ls = substring.charCodeAt(i + 1);
            var uc = ((hs - 0xd800) * 0x400) + (ls - 0xdc00) + 0x10000;
            if (0x1d000 <= uc && uc <= 0x1f77f) {
              return true;
            }
          }
        } else if (substring.length > 1) {
          var ls = substring.charCodeAt(i + 1);
          if (ls == 0x20e3) {
            return true;
          }
        } else {
          if (0x2100 <= hs && hs <= 0x27ff) {
            return true;
          } else if (0x2B05 <= hs && hs <= 0x2b07) {
            return true;
          } else if (0x2934 <= hs && hs <= 0x2935) {
            return true;
          } else if (0x3297 <= hs && hs <= 0x3299) {
            return true;
          } else if (hs == 0xa9 || hs == 0xae || hs == 0x303d || hs == 0x3030
            || hs == 0x2b55 || hs == 0x2b1c || hs == 0x2b1b
            || hs == 0x2b50) {
            return true;
            }
        }   
      }
    },

      getKeywordList(){
        
        if (!this.isChn(this.userName) || this.strLen(this.userName)<4) {
          this.alert('请输入2～4个中文哟');
          return;
        }
        let self = this;
        let userName = self.userName;
        let themeId = self.themeId;
        let gender = self.gender;
        let rd = Math.random();
        // 发请求做诗请求，带参数name，gender，themeId
        //{name: userName, themeId: themeId, gender: gender}
        this.loading_display = true;
        var model = {
          'name': userName,
          'themeId': themeId,
          'gender': gender,
          'rd': rd
        };
        console.log(model);
        self.$get(types.getKeyword, model).then((response => {
          self.keywordList = response.data.KeywordList;
          self.acrosticUid = response.data.acrosticUid;;
          
          self.loading_display = false;
          self.thirdActive = true;
          editTitle('请选1～3个祝福球');
        })).catch(err => {
          if (err != null) {
            self.is_popup = true
          }
          self.loading_display = false;
        })
      },
      nextPage(){
        if (this.selectKeywords <= 0) {
          this.alert('请选1～3个祝福球哟！');
          return;
        }
        
        let themeId = this.themeId;
        let keywordIds = this.selecteId.join(',');
        let acrosticUid = this.acrosticUid;

        let params = {
          'themeId':themeId,
          'keywordIds':keywordIds,
          'acrosticUid':acrosticUid
          };
        this.$router.push({path: '/fourthPage?rd='+Math.random(), query: params});
      },
      circleClick(item){
        var self = this;
        self.theme = item.name;
        self.themeId = item.id;
        self.p0_bg_fadeOut = true;
        self.p1_bg_fadeIn = true;
        self.circleActive = true;
        editTitle('输入想传达新意的Ta的姓名或昵称');
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
        let self = this;
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
            self.alert("登录态已过期，请重新登录试试");
          }else{
            self.alert(response.message);
          }
        }).catch(err => {
          console.log(err);
        });
      },
      //app右上角分享接口调用
      share_btn() {
        var thisurl = window.location.href;
        var linkUrl = thisurl.substring(0,thisurl.indexOf('#')+1)+ "/firstPage";
      
        var self = this;
        var obj = {
            title: 'AI为你写诗，为你做不可能的事', // 分享标题
            desc: '亲手制作一份专属情书送给Ta吧~', // 分享描述
            description: '亲手制作一份专属情书送给Ta吧~', // 分享描述
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
              self.upload_pv('/2018/aug/loveletter/homeShare');
            }
            
        });
       },
      upload_click(){
         let button = this.$route.query.button;
         if(button==1){
           this.upload_pv('/2018/aug/loveletter/homeButtonClickNum');
         }
       },
      alert(msg){
         if( this.alert_setTimeOut ){
           clearTimeout(this.alert_setTimeOut);
         }
         this.alert_display = true;
         this.alert_msg = msg;
         let self = this;
         this.alert_setTimeOut = setTimeout(() => {
                self.alert_display = false;
            }, 2000);
       },
      // 获取用户输入的姓名
      guessGender(e){
        var self = this;
        // 要判断输入两个字以上再发请求，只支持中文
        var ischn = this.isChn(this.userName),
            len = this.strLen(this.userName),
            isemoji = this.isEmojiCharacter(this.userName);

        if (isemoji) {
          this.alert('暂不支持emoji😄');
          this.userName = '';
          return
        }

        if (len>=4 && ischn && len<=8) {
          this.$get(types.getGender, {name: this.userName}).then((response => {
            let genderRes = response.data.gender;
            self.gender = genderRes;
          })).catch(err => {
        if (err != null) {
          this.is_popup = true
        }
      })
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
        console.log(gender);
      },
      // 此处需实现点击关键词改变样式
      kwSelect(item){
        this.selectKeywords = this.selectKeywords + (item.selected ? -1 : 1);
        this.createSeletedID(item['id']);
        this.$set(item, 'selected', !item.selected);
        
        if (this.selectKeywords > 3) {
          this.alert('请选1～3个祝福球哟！');
          this.selectKeywords = this.selectKeywords + (item.selected ? -1 : 1);
          this.createSeletedID(item['id'])
          this.$set(item, 'selected', !item.selected);
          return;
        }
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
     },
    mounted(){
      this.share_btn();
      this.upload_pv('/2018/aug/loveletter/home');//上报访问
      this.upload_click();//上报二级菜单点击量
      this.getTheme();//获取主题列表
    }

   }
</script>
<style scoped>
 
</style>
