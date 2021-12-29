<template>
  <div
    class="menu-by-config-container"
    :class="{ 'menu-collapsed': isCollapsed }"
  >
    <div
      class="menu-item"
      v-for="item in navs"
      :key="item.name"
      @click="navigateTo(item)"
    >
      <a-icon class="menu-icon" type="user" />
      <div class="menu-name" v-if="!isCollapsed">{{ item.meta.title }}</div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

/**
 * 通过配置文件，设置侧边栏menu，可以自定义样式。
 *
 */

/**
 * title: 路由名称，用于在menu中展示。
 * name: 为vue-router中配置的route.name，用于跳转。
 * isSidebar: 可以作为权限控制标识。
 */
const menuList = [
  {
    name: 'ExampleA',
    meta: {
      title: '例子A',
      isSidebar: true,
    },
  },
  {
    name: 'ExampleB',
    meta: {
      title: '例子A',
      isSidebar: true,
    },
  },
  {
    name: 'DemoA',
    meta: {
      title: 'DemoA',
      isSidebar: true,
    },
  },
  {
    name: 'DemoB',
    meta: {
      title: 'DemoB',
      isSidebar: true,
    },
  },
]
export default {
  components: {},
  data() {
    return {
      defaultMenuRouteName: '',
      menuList,
    }
  },
  computed: {
    ...mapState({}),
    ...mapGetters({
      isCollapsed: 'layout/isCollapsed',
    }),
    // 菜单导航
    navs() {
      const routesClone = JSON.parse(JSON.stringify(this.menuList))
      /** 过滤出isSidebar为true的route */
      const navs = routesClone.filter(i => i.meta && i.meta.isSidebar)
      return navs
    },
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    ...mapMutations({}),
    /** 导航 */
    navigateTo(route) {
      const { name } = route
      // 通过route.name进行导航
      this.$router.push({ name })
    },
  },
}
</script>

<style lang="less" scoped>
.menu-by-config-container {
  .menu-item {
    width: 230px;
    height: 60px;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    border: 2px solid rgba(255, 255, 255, 1);
    background-color: aqua;
    cursor: pointer;
    .menu-icon {
      margin-right: 10px;
      font-size: 18px;
    }
  }
  &.menu-collapsed {
    .menu-item {
      width: 80px;
      background-color: transparent;
    }
  }
}
</style>
