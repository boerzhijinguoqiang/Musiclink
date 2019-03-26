<template>
  <div class="trackPage">
    <div @click="UniqueCover">
      <img src="./独特翻唱.png" alt="">
    </div>
    <div @click="myOriginal">
      <img src="./我的原创.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'trackPage',
  data () {
    return {
    }
  },
  methods:{
    UniqueCover(){
      this.$router.push({
        path: 'UniqueCover',
        name:'UniqueCover'
      });
    },
    myOriginal(){
      this.$router.push({
        path: 'myOriginal',
        name:'myOriginal'
      });
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html,
  body{
    height: 100%;
  }
.trackPage{
  width: 100%;
  height: 13.34rem;
  background-image: url("../../assets/home_img/images/音为校园h5页面_02.png");
  overflow: hidden;
}
.trackPage div:nth-child(1){
  width: 84.53%;
  height: 3.52rem;
  margin-left: 7.73%;
  margin-top: 1.02rem;
}
.trackPage div:nth-child(2){
  width: 84.53%;
  height: 3.52rem;
  margin-left: 7.73%;
  margin-bottom: 23.09%;
  margin-top: 1rem;
}
</style>
