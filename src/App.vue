<template>
  <img alt="Vue logo" src="./assets/logo.png">
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--  <counter-block></counter-block>-->
<!--  <form-hello></form-hello>-->
<!--  <ModalWindow></ModalWindow>-->
  <NodeList></NodeList>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import CounterBlock from "@/components/Counter";
// import FormHello from "@/components/FormHello";
// import modalWindow from "@/components/ModalWindow";

import NodeList from "@/components/NodeList";
export default {
  name: 'App',
  components: {
    NodeList
    // FormHello,
    // CounterBlock,
    // modalWindow
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
