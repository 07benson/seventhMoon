<template>
  <div id="canvas-page">
    <div class="content_box">
      
      <div class="canvas_div">
        <canvas id="canvas_el">
          你的浏览器不支持canvas，请升级浏览器！
        </canvas>
        
      </div>
      <div class="img_div">
        <img class="show_image" v-bind:src="bg_img_png_url"/>
      </div>
    </div>
  </div>
</template>
<script>
  import bg_img_src from '@/assets/img/kp.png'

  export default {
    name: 'canvasPage',
    data(){
      return {
        bg_img_src : bg_img_src,
        bg_img_png_url : "",
      }
    },
    mounted(){
      this.canvas();
    },
    created(){
     
    },
    methods: {
      canvas(){
        console.log("画画");
        var canvas = document.getElementById("canvas_el");
        var bg_img = new Image();
        
        bg_img.onload = function (){
          console.log("画画");
          var canvas_context = canvas.getContext('2d');
          canvas_context.drawImage(bg_img,0,0,400,420,0,0,400,420);
          
        }
        //bg_img.src = "http://localhost:8080/static/img/bg.c66e4d1.png";
        bg_img.src = this.bg_img_src;//"/static/img/bg.c66e4d1.png";

        
        var self = this;
        setTimeout(function(){
          var img = self.convertCanvasToImage(canvas);
          self.bg_img_png_url = img.src;
          console.log(111111);
        },1000);
        
      },
      toImage(){

      },
      convertCanvasToImage(canvas) {
        //新Image对象，可以理解为DOM 
        var image = new Image(); 
        // canvas.toDataURL 返回的是一串Base64编码的URL
        // 指定格式 PNG 
        image.src = canvas.toDataURL("image/png"); 
        return image; 
       }
   

    },

  }
</script>
<style scoped>
.canvas_div{
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: #d9ffca;
}
#canvas_el{
  width: 400px;
  height: 420px;
}

.show_image{
  position: absolute;
  top:25%;
  width: 400px;
  height: 420px;
}
.img_div{
  position: absolute;
  top: 0;
  height: 100%;
  left: 50%;
  width: 50%;
  background: #ffdbca;
}

</style>
