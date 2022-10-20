<template>
  <form name="postUser">
    <section>
      <label for="name">Введите Ваше имя</label>
      <input type="text" name="" id="name" required :value="name"
             @input="event => this.name = event.target.value">
    </section>
    <section>
      <label for="email">Введите Ваш Email</label>
      <input type="email" name="" id="email" required :value="email"
             @input="event => this.email = event.target.value">
    </section>
    <section>
      <label for="password">Введите Ваш Email</label>
      <input type="password" name="" id="password" required :value="password"
             @input="event => this.password = event.target.value">
    </section>
    <button type="button" @click="User.postUser()">Добавить пользователя</button>
  </form>
</template>

<script>
import {User} from "@/User";

export default {
  name: "PostUser",
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods:
    User.postUser()
  }
</script>

<style scoped>

</style>