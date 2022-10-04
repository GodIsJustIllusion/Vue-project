<template>
  <div id="my_modal" class="modal">
    <div class="modal_content">
      <span class="close_modal_window" @click="modalClose">×</span>
      <p>{{ firstname }} + ' ' + {{ lastname }}, вас приветствует приложение Vue</p>
    </div>
  </div>
</template>

<script>
import {ModalState} from "@/ModalState";

export default {
  name: "ModalWindow",
  data() {
    return {
      firstname: '',
      lastname: ''
    }
  },
  methods: {
    modalClose() {
      let modal = document.getElementById("my_modal");
      ModalState.ShowHideModal = false
      modal.style.display = "none";

      window.onclick = function (event) {
        ModalState.ShowHideModal = false
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    }
  }
}
</script>

<style scoped>
  .modal {
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
  .modal .modal_content {
    background-color: #fefefe;
    margin: 20vh auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50vw;
    z-index: 10;
  }
  .modal .modal_content .close_modal_window {
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