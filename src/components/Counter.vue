<template>
  <div class="container">
    <h1>{{ title }}: {{ counter }}</h1>
    <button class="btn addCount" v-on:click="addCount">Прибавить</button>
    <button class="btn removeCount" v-on:click="removeCount">Уменьшить</button>
  </div>
</template>

<script>
export default {
  name: "CounterBlock",
  data() {
    return {
      title: "Счётчик",
      counter: 0
    }
  },
  methods: {
    addCount() {
      return this.counter++;
    },
    removeCount() {
      return this.counter--;
    }
  }
}
</script>

<style scoped>
  .container {
    padding: 50px 70px;
    background-color: #cca7ff;
    margin: 0 auto;
    max-width: 30%;
    border-radius: 15px;
  }

  .btn {
    cursor: pointer;
    background-color: ivory;
    padding: 15px 30px;
    border-radius: 10px;
    border: 0;
    font-size: 1rem;
    transition: all 0.5s ease;
  }

  .btn:hover {
    font-size: 1.1rem;
    background-color: #2c3e50;
    color: ivory;
    transition: all 0.5s ease;
  }

  .addCount {
    margin-right: 20px;
  }
</style>