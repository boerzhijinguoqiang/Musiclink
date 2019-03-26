<template>
  <div class="videoPage">
    <video-player  class="video-player vjs-custom-skin"
                   ref="videoPlayer"
                   :playsinline="true"
                   :options="playerOptions"
    ></video-player>
        <div class="left">
          <div class="works_name">
            {{MusicCampus.works_name}}
          </div>
          <div class="truename">
            {{MusicCampus.truename}}
          </div>
          <div class="school">
            {{MusicCampus.school}}
          </div>
          <div class="introduction">
            {{MusicCampus.introduction}}
          </div>
        </div>
        <div class="right">
          <div class="vote"><img src="./投票2.png" alt=""></div>
          <div class="share"><img src="./投票2.png" alt=""></div>
        </div>
        <div class="switch">
          <el-tooltip :content="'Switch value: ' + value5" placement="top">
            <el-switch
              v-model="value5"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-value="100"
              inactive-value="0">
            </el-switch>
          </el-tooltip>
        </div>
        <!--<div class="progressBar">
          <mt-progress :value="20" :bar-height="5"></mt-progress>
        </div>-->
        <div class="EvaluateList">
        </div>
        <div class="comment">
          <input type="text" placeholder="说点什么吧">
          <img src="" alt="">
        </div>
      </div>
</template>

<script>
import Vue from 'vue'
import '../../assets/jquery-3.3.1'
import { Progress } from 'mint-ui';
Vue.component(Progress.name, Progress);
export default {
  name:"videoPage",
  data () {
    return {
      videoPage:[],//组件传过来的id
      MusicCampus:[],//后台返回的数据
      value5: '100',//element-ui
      text:[],
      playerOptions : {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "video/mp4",
          src: ''//url地址
        }],
        poster: [], //封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
      }
    }
  },
  methods:{

  },
  created(){
    let routerParams = this.$route.params.videoPage;
    // 将数据放在当前组件的数据内
    this.videoPage = routerParams;
    var id = this.videoPage.id
    // console.log("routerParams:", this.videoPage);
    $.ajax({
      url:'http://match.tianshuai.com.cn/index.php/index/Musiccampus/actionWorksDetalis',
      type: 'post',
      dataType: 'json',
      data: {
        works_id:id
      },
      success: (res)=>{
        var that = this;
        that.playerOptions.sources[0].src = res.data.MusiccampusDetail.video_link;
        that.playerOptions.poster = res.data.MusiccampusDetail.cover_link;
        this.MusicCampus = res.data.MusiccampusDetail;
        this.text = res.data.EvaluateList
       console.log("this.MusicCampus:",res.data)
      }
    });
    ///
    var text = this.text
    console.log("this.text:",text)
    function danmu(text){
      console.log("text:",text)
      var $p=$('<p>'+text+'</p>');           //创建一个p元素，弹幕的文字加在p元素上
      var x=0;
      var h=Math.random()*(parseInt($('.EvaluateList').css('height'))-24);
      var num=Math.random()*1.5;             //num用于控制弹幕速度为随机
      //控制颜色随机
      var r=parseInt(Math.random()*(255+1));
      var g=parseInt(Math.random()*(255+1));
      var b=parseInt(Math.random()*(255+1));
      var timer=setInterval(function(){
        //此条件判断语句用控制每次打开弹幕时弹幕都是从最右边开始出现
        if($('.EvaluateList').css("display")!=="none"){
          x+=num>0.5?num:num+0.5;
        }else{
          x=0;
        }
        $p.css({
          "font-weight":"bold",
          "font-size":"24px",
          "position":"absolute",
          "top":h,
          "color":"rgb("+r+","+g+","+b+")",
          "left":1200-x
        });
        $('.EvaluateList').append($p);
      },1);
    }
    danmu()
    ///
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .videoPage{
    position: relative;
  }
  .vjs-custom-skin > .video-js {
    width: 100%;
    font-family: "PingFang SC","Helvetica Neue","Hiragino Sans GB","Segoe UI","Microsoft YaHei","\5FAE\8F6F\96C5\9ED1",sans-serif;
    height: 13rem;
  }
  .video-js .vjs-tech {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    /*height: 500px;*/
    margin: auto;
    bottom: 0;
    right: 0;
  }
  .video-js .vjs-big-play-button{
    border-radius: 50px;
  }
  .left{
    position: absolute;
    left: 4%;
    top: 9.3rem;
  }
  .right{
    position: absolute;
    right: 3.73%;
    top: 7.18rem;
  }
  .vote{
    width: 0.7rem;
  }
  .vote img{
    width: 100%;
  }
  .share{
    width: 0.7rem;
    margin-top: 0.9rem;
  }
  .share img{
    width: 100%;
  }
  .works_name{
    font-size: 0.72rem;
    color: #fff;
  }
  .truename{
    font-size: 0.42rem;
    color: #fff;
    margin-top: 0.22rem;
  }
  .school{
    height:0.28rem;
    line-height: 0.28rem;
    background:rgba(39,18,179,1);
    opacity:0.8;
    padding: 3px 2px;
    border-radius:4px;

    font-size:0.15rem;
    text-align: center;
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
    color:rgba(255,255,255,1);
    margin-top: 0.1rem;
  }
  .introduction{
    width: 3.3rem;
    font-size: 0.22rem;
    color: #fff;
    line-height: 1.4;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-top: 0.22rem;
  }
  .switch{
    position: absolute;
    bottom: 1.5rem;
    right: 3.6%;
  }
  /*进度条*/
  .progressBar{
    position: absolute;
    width: 100%;
    bottom: 0.86rem;
  }
  .EvaluateList{
    width: 100%;
    height: 200px;
    border: solid 1px red;
    position: absolute;
    top: 0;
    left: 0;
  }
  .comment{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 42px;
  }
  .comment input{
    width: 100%;
    border: none;
    line-height: 0.78rem;
    font-size: 0.32rem;
    color: #333;
    text-indent: 0.4rem;
    background: transparent;
  }
</style>
