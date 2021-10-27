<template>
  <div class="script">
    <div class="script-item" v-for="item in 20" :key="item"></div>
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
.script{
  -webkit-app-region: no-drag;
  position: absolute;
  width: 100%;
  height: 86%;
  background-color: #9efcc2;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 0 0 4px 4px;
  // 布局
  box-sizing:border-box;
  padding: 10px;

  .script-item{
    width: 100%;
    height: 60px;
    margin-bottom: 5px;
    background-color: #2c3e50;
  }
}
.script::-webkit-scrollbar {
  width: 0;
}
</style>
