<template>
 <h1>Список дел на день</h1>
  <form>
    <input type="text" name="title" required placeholder="Введите новую задачу" v-model="nameTask">
    <input type="text" name="describe" required placeholder="Описание задачи" v-model="describeTask">
    <button v-if="nameTask !== ''" @click.prevent="addNode()">Добавить задачу</button>
    <button v-else disabled>Введите задачу</button>
  </form>
  <table class="node-list" border="">
    <caption>Список дел на день</caption>
    <tr>
      <th>Имя задачи</th>
      <th>Описание задачи</th>
    </tr>
    <tr v-for:="node in Nodes.nodes">
<!--      <td>{{node.id}}</td>-->
      <td>{{ node.titleNote }}</td>
      <td>{{ node.descNote }}</td>
      <td><button @click.prevent="delNode" v-bind:value="node.id">X</button></td>
    </tr>
  </table>
</template>

<script>
import { Nodes, DefaultNote } from "@/Nodes";

export default {
  name: "NodeList",
  data() {
    return {
      Nodes,
      DefaultNote,
      nameTask: '',
      describeTask: ''
    }
  },
  methods: {
    addNode() {
      this.DefaultNote.titleNote = this.nameTask;
      this.DefaultNote.descNote = this.describeTask;
      Nodes.createNode({ ... this.DefaultNote});
      this.nameTask = '',
      this.describeTask = ''
    },

    delNode(event) {
      let task = event.target.value;
      console.log(event.target)
      Nodes.delNode(task)
    }
  }
}
</script>

<style scoped>
  .node-list {
    width: fit-content;
    margin: 30px auto;
    text-align: left;
  }

  .node-list * {
    padding: 5px;
  }
</style>