<template>
  <a-locale-provider :locale="locale">
    <router-view></router-view>
  </a-locale-provider>
</template>
<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
export default {
  name: 'App',
  data() {
    return {
      locale: zhCN
    }
  }
}
</script>
<style lang="less" scoped>
#app {
  color: #333333;
}
</style>
