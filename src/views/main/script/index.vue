<template>
  <div class="script">
<!--    <div class="script-item" v-for="item in 10" :key="item"></div>-->
    <script-item class="script-item" v-for="item in 10" :key="item"></script-item>
  </div>
</template>

<script>
import ScriptItem from './script-item'

export default {
  components: { ScriptItem },
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
    border-radius: 4px;
    //布局
    display: flex;
    flex-direction: row;
  }
}
.script::-webkit-scrollbar {
  width: 0;
}
</style>
