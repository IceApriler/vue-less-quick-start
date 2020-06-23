<template>
  <div class="container">
    <div class="center-name ellipsis">{{ $route.path }}</div>
    <div class="ellipsis-name">{{ $route.path }}</div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  components: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters({}),
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style lang="less" scoped>
.container {
  .border-box();
  color: @primary-color;
  position: relative;
  height: 100px;
  .center-name {
    .box-center(translate);
  }
  .ellipsis-name {
    .text-ellipsis();
    width: 50px;
  }
}
</style>
