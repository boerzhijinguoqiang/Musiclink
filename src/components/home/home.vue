<template>
  <div id="home">
    <header>
      <!--<img src="./assets/音为校园h5页面_01.png">-->
      <router-link to="/rulePage" tag="div" class="index_wrap">赛事规则</router-link>
    </header>
    <div class="content">
      <ul class="takeAndMyWork">
        <li @click="login">
          <img src="../../assets/home_img/我要参赛.png" alt="">
        </li>
        <li>
          <img src="../../assets/home_img/我的作品.png" alt="">
        </li>
      </ul>
      <ul class="header_nav_2">
        <li><img src="./报名时间.png" alt=""></li>
      </ul>
      <tabSwitch :MusicCampus="MusicCampus"  :showPage="showPage" v-on:singTypeEvent="singType"></tabSwitch>
      <router-link to="/morePage" tag="div" class="more"><a>查看更多</a></router-link>
      <!--------foot----------------->
      <div class="foot">
        <img src="../../assets/home_img/合作.png" alt="">
      </div>
    </div>
    </div>

</template>

<script>
  import Vue from 'vue'
//Vue.prototype.$http=axios
  import tabSwitch from '@/components/tabSwitch/tabSwitch'
  import { Swipe, SwipeItem } from 'mint-ui';
  Vue.component(Swipe.name, Swipe);
  Vue.component(SwipeItem.name, SwipeItem);
  // import videoPage from '../videoPage/videoPage'
  import '../../assets/jquery-3.3.1'
  export default {
    name: 'home',
    data(){
      return {
        MusicCampus:[],
        showPage:"home",
        isType:1
      }
    },
    created() {
      this.getData()
      //this.getAjax();
      /* this.$axios.post(url,[{is_type:1}])
         .then(function (response) {
           console.log(response.data);

         })
         .catch(function (error) {
           console.log(error);
         });*/
    },
    methods:{
      login(){
        console.log(1)
      },
      singType(i){
        this.isType = i;
        this.getData()
      },
      getData(){
        $.ajax({
          url:'http://match.tianshuai.com.cn/index.php/index/Musiccampus/actionMusicCampusList',
          type: 'post',
          dataType: 'json',
          data: {
            is_type:this.isType
          },
          success: (res)=>{
            var that = this;
            that.MusicCampus = res.data.MusicCampus
            console.log(that.MusicCampus)
          },
          error: function(){
          }
        })
      }
    },
    components:{
      // videoPage
      tabSwitch
    }
  }
</script>

<style scoped>
  header{
    width: 100%;
    height: 7.16rem;
    background-image: url("../../assets/音为校园h5页面_01.png");
    background-size: 100%;
    overflow: hidden;
  }
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
  /*赛事规则*/
  .index_wrap{
    width:65px;
    height:21px;
    font-size: 0.25rem;
    color: #fff;
    line-height: 0.42rem;
    background:rgba(16,3,102,1);
    border-radius:3px;
    text-align: center;
    margin-left: 296px;
    margin-top: 15px;
  }
  .index_wrap a{
    /*width:48px;*/
    /*height:12px;*/
    font-size:12.5px;
    font-family:SourceHanSansCN-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
  }

  .header_nav li:nth-child(2){
    margin-top: -6px;
  }
  .header_nav_2{
    height: 37px;
  }
  .header_nav_2 img{
    display: block;
  }
  .header_nav li:nth-child(3),
  .header_nav_2 li:nth-child(3){
    margin-left: -4px;
  }
  .header_nav_2 li:nth-child(2){
    margin-top: -6px;
  }
  .content{
    width: 100%;
    background-image: url("../../assets/音为校园h5页面_02.png");
    height: 100%;
    overflow: hidden;
    margin-top: -1px;
  }
  .takeAndMyWork{
    display: flex;
    margin-left: 26px;
    margin-top: 11px;
  }

  .header_nav_2{
    width: 80%;
    /*border: solid 1px red;*/
    display: flex;
    margin-left: 60px;
    margin-top: 20px;
  }
  .takeAndMyWork li:nth-child(2){
    margin-left: 10px;
  }

  .singType li:nth-child(1){
    margin-left: 105px;
  }
  .singType li:nth-child(2){
    margin-left: 6px;
    margin-top: 1px;
  }
  .foot{
    margin-left: 27px;
    margin-top: 14px;
  }
  /*---------------投票样式开始---------------------*/

  /*查看更多*/
  .more{
    width:1.58rem;
    height:0.4rem;
    background:rgba(24,5,153,1);
    border-radius:0.06rem;
    font-size:0.2rem;
    line-height: 0.4rem;
    text-align: center;
    margin-left: 2.98rem;
    margin-top: 0.2rem;
  }
  .more a{
    font-weight:400;
    color:rgba(255,255,255,1);
    font-family:SourceHanSansCN-Normal;
  }
  /*------------------投票样式结束-----------------------*/
  #app {
    /*background:red;*/
  }
</style>
