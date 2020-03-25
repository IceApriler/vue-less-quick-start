<template>
  <div class="container">
    <div class="name">{{ $route.path }}</div>
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
    ...mapGetters({})
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="less" scoped>
.container {
  color: @primary-color;
  position: relative;
  height: 100px;
  .name {
    #layout.center(translate);
  }
}
</style>
