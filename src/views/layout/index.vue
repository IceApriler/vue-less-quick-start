<template>
  <a-layout class="layout-container">
    <!-- 侧边栏导航 -->
    <Aside class="layout-aside"></Aside>
    <a-layout>
      <!-- 头部 -->
      <Header></Header>
      <!-- 正文 -->
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import Aside from './aside'
import Header from './header'

export default {
  components: {
    Aside,
    Header,
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({}),
    ...mapGetters({}),
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    ...mapMutations({}),
  },
}
</script>

<style lang="less" scoped>
.layout-container {
  min-height: 100%;
}
</style>
