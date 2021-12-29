<template>
  <div class="container" style="font-size: 20px;">{{ $route.path }}</div>
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
  width: 750px;
}
</style>
