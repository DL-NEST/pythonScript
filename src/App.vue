<template>
  <router-view/>
</template>

<script>
export default {
  name: 'Home',
  components: {
  },
  mounted () {
    console.info('%c  _____ _____ ____ _____ \n' +
      ' |_   _| ____/ ___|_   _|\n' +
      '   | | |  _| \\___ \\ | |  \n' +
      '   | | | |___ ___) || |  \n' +
      '   |_| |_____|____/ |_|  \n' +
      '                         ', 'color:#ffeb2b')
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
  padding: 4px;
  background-color: rgba(0,0,0,0);
  overflow: hidden;
}
</style>
