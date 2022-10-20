<template>
  <div id="my_modal" v-bind:class="{ 'modal-open': ModalState.ShowHideModal }">
    <div class="modal_content">
      <span class="close_modal_window" @click="hide()">×</span>
      <p>{{ ModalState.firstname }} {{ ModalState.lastname }}, вас приветствует приложение Vue</p>
    </div>
  </div>
</template>

<script>
import { ModalState } from "@/ModalState";

export default {
  name: "ModalWindow",
  data() {
    return {
      ModalState,
      hidden: false
    }
  },
  props: {
    firstname: {
      type: String,
      require: false,
      default: "Имя"
    },
    lastname: {
      type: String,
      require: false,
      default: "Фамилия"
    },
  },
  methods: {
    hide: function () {
      ModalState.ShowHideModal = false;
      this.hidden = false;
    }
  }
}
</script>

<style scoped>
  #my_modal {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.8);
    z-index: 5;
  }
  #my_modal.modal-open {
    display: block;
  }

  #my_modal .modal_content {
    background-color: #fefefe;
    margin: 20vh auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50vw;
    z-index: 10;
  }
  #my_modal .modal_content .close_modal_window {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
  }

  .modal_content p {
    display: flex;
    justify-content: center;
    margin: 13% auto;
    font-size: 5em;
    font-weight: bold;
  }
</style>