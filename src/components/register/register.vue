<template>
  <div class="register">
    <div class="registerCon">
      <div class="videoAndCover">
        <li>
          <label for="videoBtn">
            <img src="./组4.png" alt="">
          </label>
          <input type="file" id="videoBtn"
                  accept="audio/mp4,video/mp4"
                  v-on:change="uploadFile(event,'2')"
                  ref="file"
                  name="fileTrans" value=""
                  style="display: none;">
        </li>
        <li>
          <label for="imageBtn" @click="imgUp">
            <img src="./组5.png" alt="" id="imgSwitch" dataSrc="">
            <span id="closex" @click="closeImg">x</span>
          </label>
          <input type="file" id="imageBtn" accept="image/*">
        </li>
      </div>
      <div class="iptCon">
        <label for="">
          <span>作品名</span> <input type="text" placeholder="请输入您的作品名">
        </label>
        <label for="">
          <span>作品介绍</span> <textarea placeholder="请输入您的作品介绍"></textarea>
        </label>
        <label for="">
          <span>姓名</span> <input type="text" placeholder="请输入您的姓名">
        </label>
        <div class="sex">
          <span>性别</span>
          <el-radio-group v-model="radio3">
            <el-radio-button label="男"></el-radio-button>
          </el-radio-group>
          <el-radio-group v-model="radio3">
            <el-radio-button label="女"></el-radio-button>
          </el-radio-group>
        </div>
        <label for="">
          <span>学校</span><input type="text" placeholder="请输入您的学校">
        </label>
        <label for="">
          <span>手机号</span><input type="text" placeholder="请输入手机号">
        </label>
        <label for="">
          <span>验证码</span><input type="text" placeholder="请输入验证码">
        </label>
      </div>
    </div>
    <div class="subMit">
      <img src="./提交报名.png" alt="">
    </div>
  </div>
</template>

<script>

export default {
  name: 'register',
  data () {
    return {
      radio3: '男',
      radio4: '女'
    }
  },
  methods:{
    imgUp(){

      $('#imageBtn').bind('change', function() {
        var file = this.files[0];
        // 确认选择的文件是图片
        if(file.type.indexOf("image") == 0) {
          var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = function(e) {
            // 图片base64化
            $('#imgSwitch').attr("dataSrc","src");
            $('#imgSwitch').attr("src",this.result);

          };
        }
      });
      $("#closex").show()
      // $('#imgSwitch').on('change',"src",function(){
      //   $("#closex").show()
      // })


    },
    closeImg(){
      $('#imgSwitch').attr("src","dataSrc");
      $("#closex").hide()
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register{
  width: 100%;
  background-image: url("../rulePage/音为校园h5页面_01_02.png");
  background-size: 100%;
  overflow: hidden;
}
.registerCon{
  width:92%;
  height:10.98rem;
  background:rgba(250,250,250,1);
  opacity:0.95;
  border-radius:5px;
  margin-left: 4%;
  margin-top: 5.92rem;
  overflow: hidden;
}
.videoAndCover{
  display: flex;
  margin-left: 0.94rem;
  margin-top: 0.4rem;
}
.videoAndCover li{
  width: 2.2rem;
  height: 3.06rem;
  position: relative;
}

.videoAndCover li:nth-child(2){
  margin-left: 0.56rem;
}
.subMit{
  width: 92.79%;
  height: 0.86rem;
  margin-left: 3.6%;
  margin-top: 0.3rem;
  margin-bottom: 0.78rem;
}
.info{
  position: relative;
  z-index: 100;
}
.iptCon{
  font-size: 0.24rem;
  color: #333;
  margin-top: 0.54rem;
}
input[type=radio]{
  color: #fff;
  border: none;
  background: #220f99;
  box-shadow: 0px 2px 3px 0px rgba(4, 0, 0, 0.23);
  width: 1.19rem;
  height: 0.56rem;
  line-height: 0.56rem;
  margin-top: 0.05rem;
  border: #f2f2f2 solid 1px;
  background: #f5f5f5;
  border-radius: 3px;
  font-size: 0.2rem;
  color: #333;
  display: inline-block;
  vertical-align: top;
  text-align: center;
  margin-right: 0.3rem;
}
.iptCon input{
  display: inline-block;
  width: 5.4rem;
  height: 0.66rem;
  border: #f2f2f2 solid 1px;
  background: #f5f5f5;
  border-radius: 3px;
  text-indent: 1em;
  font-size: 0.24rem;
  color: #333;
  vertical-align: middle;
}
.iptCon label{
  display: block;
  margin-top: 0.3rem;
  display: flex;
  height: 0.66rem;
}
label:nth-child(2){
  height: 1.2rem;
}
label:nth-child(3){
  margin-top: 0.4rem;
}
span{
  width: 0.86rem;
  display: block;
  vertical-align: middle;
  margin-left: 0.28rem;
}
  textarea{
    border-radius: 3px;
    background: #f5f5f5;
    padding: 0.15rem 0.35rem;
    width: 4.79rem;
    height: 1.18rem;
    border: #f2f2f2 solid 1px;
    resize: none;
    font-size: 0.24rem;
    color: #333;
    line-height: 1.4;
    /* position: relative; */
    float: right;
  }
  .sex{
    display: flex;
  }
.sex div{
  width: 50px;
}
  input[type=file]{
    position: absolute;
    clip: rect(0 0 0 0);
    width: 0px;
    height: 0px;
  }
#imgSwitch{
  width: 110px;
  height: 153px;
}
  #closex{
    position: absolute;
    display: none;
    top: 0;
    right: 0;
    z-index: 50;
  }

</style>
