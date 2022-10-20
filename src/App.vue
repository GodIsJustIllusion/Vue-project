<template>
  <div v-for="item in User.data" :key="item.id">
    {{ item }}
  </div>
  <post-user></post-user>
</template>

<script>
import { User } from '@/User';
import PostUser from "@/components/PostUser";

export default {
  name: 'App',
  components: {
    PostUser
  },
  data() {
    return {
      list: {},
      User
    }
  },
  created() {
    User.getListUser()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
