<template>
  <div class="main page">
    <div class="top-tool">
      <div class="tool script" @click="$router.push('script')" style="border-radius: 4px 0 0 0;margin-left: 0;">脚本</div>
      <div class="tool crawler" @click="$router.push('crawler')">爬虫</div>
      <div class="tool store" @click="$router.push('store')">商店</div>
      <div class="tool setting" @click="$router.push('setting')" style="border-radius: 0 4px 0 0;margin-right: 0;">设置</div>
    </div>
    <div class="main-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  mounted () {
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.main{
  background-color: white;
  // 布局
  display: flex;
  flex-direction: column;
  .top-tool{
    min-height: 60px;
    max-height: 65px;
    flex-grow: 1;
    background-color: #2c3e50;
    margin-bottom: 2px;
  //  布局
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    .tool{
      -webkit-user-select: none;
      -webkit-app-region: no-drag;
      flex-wrap:nowrap;
      flex-grow: 1;
      height: 100%;
      background-color: white;
      margin-right: 1px;
      margin-left: 1px;
    }
    .tool:hover{
      background-color: #e1e1e1;
    }
  }
  .main-content{
    flex-grow: 8;
    background-color: #6060fa;
    border-radius: 0 0 4px 4px;
  }
}
</style>
