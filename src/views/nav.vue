<template>
  <div class="nav page">
    <div class="router" v-for="item in 9" :key="item">{{item}}</div>
  </div>
</template>

<script>
export default {
  name: 'nav',
  mounted () {
    console.log(this.$router.afterEach())
  }
}
</script>

<style lang="scss">
.nav{
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
// 布局
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.router{
  width: 300px;
  height: 80px;
  background-color: seagreen;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
