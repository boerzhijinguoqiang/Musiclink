<template>
  <div class="login">
    <div>手机号:<input type="text" v-model.number="telNumber"></div>
    <div><button @click = "yanzheng">提交1</button></div>
    <div>验证码:<input type="text" v-model.number="yzCode"></div>
    <div><button @click = "denglu">提交2</button></div>
  </div>
</template>

<script>
  import '../../assets/jquery-3.3.1'
export default {
  name:"login",
  data () {
    return {
      telNumber:0,
      yzCode:0
    }
  },
  methods:{
      denglu(){
        console.log(this.telNumber)
        console.log(this.yzCode)
        let yzCode1 = this.yzCode
        let telNumber1 = this.telNumber
        $.ajax({
          url:'http://match.tianshuai.com.cn/index.php/index/Musiccampus/actionLogin',
          type: 'post',
          dataType: 'json',
          data: {
            telephone:telNumber1,
            code:yzCode1
          },
          success: (res)=>{
              console.log(res)
          }
        })
      },
    yanzheng(){
      $.ajax({
        url:'http://match.tianshuai.com.cn/index.php/index/Musiccampus/actionGetSms',
        type: 'post',
        dataType: 'json',
        data: {
          is_type:1,
          telephone:this.telNumber
        },
        success: (res)=>{
          console.log(res)
        }
      })
    },
  },
  created(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{

}
</style>
