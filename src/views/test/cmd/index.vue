<template>
  <div class="cmd page">
<!--    <button @click="test">ewf</button>-->
  </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    test () {
      window.$message.success('成功', { duration: 800 })
    }
  }
}
</script>

<style lang="scss">
.cmd{
  background-color: #ffffff;
//  布局
  display: flex;
}
</style>
