<template>
  <div id="app">
  <Mheader></Mheader>
  <Tab></Tab>
  <router-view></router-view>
  </div>
</template>

<script>


import Tab from '@/components/common/tab/tab'

import Mheader from '@/components/common/m-header/m-header'

export default {
  name: 'App',
  components:{Tab,Mheader}
}
</script>

<style lang="less">

</style>
