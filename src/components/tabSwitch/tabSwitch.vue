<template>
  <div id="tabSwitch">
      <!--       tab切换     -->
      <ul class="singType">
        <li><img :src=leftImg[imgId] alt=""><span @click="left">独特翻唱</span></li>
        <li><img :src=rightImg[imgId] alt=""><span @click="right">我的原创</span></li>
      </ul>
      <!--------------投票部分开始----------->
      <div class="original_contents">
        <div class="original_contents_2">
          <div v-for="(item,i) in MusicCampus" :key="i" class="original_contents_3" v-if="showPage == 'home'?i<10:i>=0">
            <ul @click="toVideoPage(item)">
              <b>{{i+1}}</b>
              <li class="ticket_count">
                <img src="./图层6拷贝.png" alt="">
                {{MusicCampus[i].ticket_count}}
              </li>
              <li class="img">
                <img :src="MusicCampus[i].cover_link">
              </li>
              <li class="text-content">
                <div class="works_name">{{MusicCampus[i].works_name}}</div>
                <div class="nameAndSchool">
                  <div class="truename">@{{MusicCampus[i].truename}}</div>
                  <div class="school">{{MusicCampus[i].school}}</div>
                </div>
              </li>
            </ul>
            <div class="btn">
              <img src="./投票.png" alt="">
            </div>
            <!--<food :videoPage="selectedFood" ref="food"></food>-->
          </div>
        </div>
  </div>
  </div>
</template>

<script>
  import '../../assets/jquery-3.3.1'
  export default {
    name: 'home',
    data(){
      return {
        isType:1,//1为原唱
        leftImg:["./static/img/tableft.png","./static/img/tabright.png"],
        rightImg:["./static/img/tabright.png","./static/img/tableft.png"],
        imgId:0
      }
    },
    props:["MusicCampus","DetailsPage","showPage"],
    created() {

    },
    methods:{
      showDetail(){
        this.$router.push('/rulePage')
      },
      toVideoPage(videoPage){
        //this.DetailsPage = videoPage
        var that = this
        that.$router.push({
          path: 'videoPage',
          name:'videoPage',
          params: {
            key:'key',
            videoPage
          }
        });
      },
      left(){
        this.isType = 1
        this.$emit("singTypeEvent",this.isType)
        this.imgId = 0
      },
      right(){
        this.isType = 2
        this.$emit("singTypeEvent",this.isType)
        this.imgId = 1
      }
    },
    components:{
      // videoPage
    }
  }
</script>

<style scoped>

  /*票数*/
  .ticket_count{
    position: absolute;
    top: 2.85rem;
    right: 0.1rem;
    bottom: 0.76rem;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 2px;
    font-size: 0.15rem;
    color: #fff;
    line-height: 0.24rem;
    padding: 0 0.12rem;
    z-index: 20;
  }

  .singType{
    display: flex;
    margin-top: 0.4rem;
    height: 29px;
  }
  .singType img{
    display: block;
  }
  .singType li:nth-child(1){
    margin-left: 2.1rem;
  }
  .singType li:nth-child(2){
    margin-left: 6px;
    margin-top: 1px;
  }
  .singType li{
    position: relative;
    overflow: hidden;
  }
  .singType span{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    font-size: 14px;
    width: 60px;
    height: 13px;
    line-height: 13px;
    font-size: 13px;
    font-family:SourceHanSansCN-Medium;
    font-weight:500;
    color:rgba(255,248,235,1);
    /*z-index: -1;*/
  }

  /*---------------投票样式开始---------------------*/
  .original_contents_2{
    display: flex;
    flex-flow:row wrap;
    margin-left: 5.07%;
    /*justify-content: space-around;*/
    margin-top: 20px;
  }
  .original_contents_3{
    width: 45.87%;
    height: 5rem;
  }
  .original_contents_3 ul{
    border: #FFFF00 solid 0.01rem;
    box-shadow: #F71FFF 0rem 0rem 0.3rem;
    width: 2.84rem;
    height: 3.9rem;
    position: relative;
    z-index: 12;
    left: 0.08rem;
    top: 0.08rem;
    border-radius: 6px;
    overflow: hidden;
    background: #efefef;
    margin: auto;
  }
  .original_contents b{
    position: absolute;
    width: 0.42rem;
    height: 0.54rem;
    background: url(排名标签.png) no-repeat center;
    background-size: 100%;
    left: 0.16rem;
    top: 0;
    font-size: 0.21rem;
    color: #fff;
    line-height: 0.3rem;
    z-index: 16;
    text-align: center;
  }
  .text-content{
    margin-left: 0.2rem;
  }
  .img img{
    width: 100%;
    height: 3.18rem;
  }
  .works_name{
    font-size: 0.2rem;
    color: #000;
  }
  .nameAndSchool{
    width: 96%;
    display: flex;
    justify-content: space-between;
  }
  .truename,
  .school{
    font-size: 0.2rem;
    margin-top: 0.02rem;
    color: #000;
  }
  /*学校*/
  .school{
    width: 1.12rem;
    height: 0.3rem;
    line-height: 0.3rem;
    color: #fff;
    background: #c33bcc;
    border-radius: 4px;
    padding: 0 0.12rem;
    margin-left: 0.2rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap !important;
    outline: 0;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  /*投票按钮*/
  .btn{
    height: 29px;
    margin-top: 16px;
  }
  .btn img{
    margin-left: 16%;
    display: block;
  }
  /*查看更多*/
  .more{
    width:1.58rem;
    height:0.4rem;
    background:rgba(24,5,153,1);
    border-radius:0.06rem;
    font-size:0.2rem;
    line-height: 0.4rem;
    text-align: center;
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
    color:rgba(255,255,255,1);
    margin-left: 2.98rem;
    margin-top: 0.2rem;
  }
  /*------------------投票样式结束-----------------------*/
  #app {
    /*background:red;*/
  }
</style>
