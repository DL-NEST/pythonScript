<template>
  <n-config-provider>
    <AppProvider>
      <router-view></router-view>
    </AppProvider>
  </n-config-provider>
</template>

<script>
import AppProvider from './components/Application/Application'
import { NConfigProvider } from 'naive-ui'
export default {
  components: {
    AppProvider,
    NConfigProvider
  },
  mounted () {
    console.info('%c  _____ _____ ____ _____ \n' +
      ' |_   _| ____/ ___|_   _|\n' +
      '   | | |  _| \\___ \\ | |  \n' +
      '   | | | |___ ___) || |  \n' +
      '   |_| |_____|____/ |_|  \n' +
      '                         ', 'color:#ffeb2b')
  },
  created () {
    let key1 = null
    document.onkeydown = (e) => {
      if (key1 === 'Alt' && e.key === 'a') {
        this.$router.push('nav')
      }
      key1 = e.key
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: fixed;
  width: 100%;
  height: 100%;
  box-sizing:border-box;
  padding: 2px;
  background-color: rgba(0,0,0,0);
  overflow: hidden;
}
</style>
