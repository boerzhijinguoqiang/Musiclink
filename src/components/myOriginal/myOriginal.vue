<template>
  <div class="myOriginal">
      <register></register>
  </div>
</template>

<script>
  import register from '@/components/register/register'
export default {
  name: 'myOriginal',
  data () {
    return {
    }
  },
  components:{
    register
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
