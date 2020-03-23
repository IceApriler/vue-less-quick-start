<template>
  <a-layout-sider
    class="layout-aside"
    :trigger="null"
    collapsible
    v-model="isCollapsed"
    width="256"
  >
    <!-- 项目名称、logo等 -->
    <div class="project-info"></div>
    <!-- 菜单导航栏 -->
    <menuByRoutes></menuByRoutes>
  </a-layout-sider>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import menuByRoutes from './components/menuByRoutes'

export default {
  components: {
    menuByRoutes
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({}),
    ...mapGetters({
      isCollapsed: 'layout/isCollapsed'
    })
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    ...mapMutations({})
  }
}
</script>

<style lang="less" scoped>
.layout-aside {
  position: relative;
  background: #ffffff;
  box-shadow: 0px 0px 6px 4px rgba(0, 0, 0, 0.2);
  z-index: 22;
  .project-info {
    height: 100px;
    background-color: #ededed;
  }
}
</style>
