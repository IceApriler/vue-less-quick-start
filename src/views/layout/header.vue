<template>
  <a-layout-header class="layout-header">
    <div class="header">
      <div class="left">
        <!-- 控制侧边栏 -->
        <a-icon
          class="trigger"
          :type="isCollapsed ? 'menu-unfold' : 'menu-fold'"
          @click="toggleSideBar()"
        />
      </div>
      <div class="right">
        <!-- 用户名 -->
        <div class="fun-item">
          <img :src="locationImg" />
          <span class="fun-item-text">{{ nickName || '未知用户' }}</span>
        </div>
        <!-- 修改密码 -->
        <div class="fun-item" @click="editPassword">
          <img :src="lockImg" />
          <span class="fun-item-text">修改密码</span>
        </div>
        <!-- 退出登录 -->
        <div class="fun-item" @click="logout">
          <img :src="loginoutImg" />
          <span class="fun-item-text">退出登录</span>
        </div>
      </div>
    </div>
    <!-- 页面标题 -->
    <div class="page-title">
      <div class="text">{{ $route.meta.title }}</div>
    </div>
  </a-layout-header>
</template>
<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  components: {},
  data() {
    return {
      loginoutImg: require('../../assets/images/loginout.png'),
      lockImg: require('../../assets/images/lock.png'),
      locationImg: require('../../assets/images/icon_location.png'),

      nickName: ''
    }
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
    ...mapMutations({
      toggleSideBar: 'layout/toggleSideBar'
    }),
    editPassword() {},
    logout() {}
  }
}
</script>

<style lang="less" scoped>
.layout-header {
  position: relative;
  z-index: 21;
  padding: 0;
  height: auto;
  background: #fff;
  .header {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 1px 4px 0px rgba(0, 21, 41, 0.12);
    height: 56px;
    line-height: 56px;
    .left {
      .trigger {
        font-size: 16px;
      }
    }
    .right {
      display: flex;
      align-items: center;
      .fun-item {
        display: flex;
        align-items: center;
        cursor: pointer;
        img {
          width: 16px;
          height: 16px;
          margin: 0 5px 0 0px;
        }
        &:not(:last-child) {
          margin-right: 20px;
        }
      }
      .fun-item-text {
        font-size: 16px;
        color: #a1a1a1;
      }
    }
  }
  .page-title {
    height: 60px;
    line-height: 60px;
    font-size: 20px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.85);
    .text {
      margin-left: 30px;
    }
  }
}
</style>
