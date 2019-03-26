<template>
  <div class="morePage">
    <div id="maoDian"></div>

    <a href="#maoDian" class="maoDian"><img src="./maodian.png" alt=""></a>
    <tabSwitch :MusicCampus = MusicCampus :showPage = showPage v-on:singTypeEvent="singType"></tabSwitch>
    <!--------------投票部分结束----------->
    <p class="footer"> 没有更多作品啦！</p>
  </div>
</template>

<script>
import Vue from 'vue'
import tabSwitch from '@/components/tabSwitch/tabSwitch'
import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);
import '../../assets/jquery-3.3.1'
export default {
  name: 'morePage',
  data () {
    return {
      MusicCampus:[],
      showPage:"",
      isType:1
    }
  },
  created(){
    this.getData()
  },
  methods:{
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
          // console.log(res.data)
          var that = this;
          //that.MusicCampus = res.data.MusicCampus;
          that.MusicCampus = res.data.MusicCampus
          // console.log(this)
          console.log(that.MusicCampus)
        },
        error: function(){
        }
      })
    }
  },
  components:{
    tabSwitch
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.singType{
  width: 100%;
  display: flex;
  margin-top: 0.24rem;
  text-align: center;
}
.singType li:nth-child(1){
  margin-left: 2rem;
  display: inline-block;
}
.singType li:nth-child(2){
  display: inline-block;
  margin-left: 0.12rem;
  /*margin-top: 0.01rem;*/
}
.morePage{
  background-image: url("../../assets/音为校园h5页面_02.png");
  overflow: hidden;
}
/*---------------投票样式开始---------------------*/
.original_contents_2{
  display: flex;
  flex-flow:row wrap;
  margin-left: 0.5rem;
  margin-top: 0.15rem;
  /*justify-content: space-around;*/
}
.original_contents_3{
  width: 3.44rem;
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
}
/*学校*/
.school{
  width: 1.12rem;
  height: 0.3rem;
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
  margin-left: 0.3rem;
}
.footer{
  text-align: center;
  font-size: 0.28rem;
  font-family:SourceHanSansCN-Normal;
  font-weight:400;
  color:rgba(255,255,255,1);
  opacity:0.6;
  margin-bottom: 0.98rem;
  margin-top: 0.4rem;
}
  /*锚点*/
  .maoDian{
    position: fixed;
    bottom: 1.5rem;
    right: 0.3rem;
  }
</style>
