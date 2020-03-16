<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import * as api from '../api'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created() {
    api.login({ username: '130723125', password: 'ylbzj00823' }).then(res => {
      console.log(res)
    })
  }
}
</script>
