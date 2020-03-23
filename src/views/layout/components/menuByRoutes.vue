<template>
  <a-menu
    mode="inline"
    :defaultSelectedKeys="[defaultMenuRouteName]"
    :inlineCollapsed="isCollapsed"
  >
    <template v-for="item in navs">
      <a-sub-menu :key="item.name" v-if="item.children && item.children.length">
        <template slot="title">
          <a-icon type="user" />
          <span>{{ item.meta.title }}</span>
        </template>
        <a-menu-item
          v-for="child in item.children"
          :key="child.name"
          @click="navigateTo(child)"
          >{{ child.meta.title }}</a-menu-item
        >
      </a-sub-menu>
      <a-menu-item :key="item.name" v-else @click="navigateTo(item)">
        <a-icon type="user" />
        <span>{{ item.meta.title }}</span>
      </a-menu-item>
    </template>
  </a-menu>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  components: {},
  data() {
    return {
      defaultMenuRouteName: ''
    }
  },
  computed: {
    ...mapState({}),
    ...mapGetters({
      isCollapsed: 'layout/isCollapsed'
    }),
    // 菜单导航（默认是由/src/router/routes自动控制）
    navs() {
      const routesClone = JSON.parse(
        JSON.stringify(this.$router.options.routes)
      )
      const navs = routesClone
        .map(item => {
          if (item.children) {
            item.children = item.children.filter(
              i => i.meta && i.meta.isSidebar
            )
          }
          return item
        })
        .filter(i => i.meta && i.meta.isSidebar)
      return navs
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    ...mapMutations({}),
    navigateTo(route) {
      const { name } = route
      this.$router.push({ name })
    }
  }
}
</script>

<style lang="less" scoped></style>
