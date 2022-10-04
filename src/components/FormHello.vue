<template>
  <form>
    <h2>Форма приветствия</h2>
    <section>
      <label for="firstname">Введите Ваше имя</label>
      <input type="text" name="" id="firstname" required v-model="firstname">
    </section>
    <section>
      <label for="lastname">Введите Вашу фамилию</label>
      <input type="text" name="" id="lastname" required v-model="lastname">
    </section>
    <button @click="sayHello()">ПРИВЕТ</button>
  </form>
  <modal-window></modal-window>
</template>

<script>
import { ModalState } from "@/ModalState";
import modalWindow from "@/components/ModalWindow";

export default {
  name: "FormHello",
  data() {
    return {
      modalWindow,
      ModalState,
      firstname,
      lastname
    }
  },
  methods: {
    sayHello() {
      ModalState.ShowHideModal = true;
      let modal = document.getElementById("my_modal");
      modal.style.display = "block";
    }
  }
}
</script>

<style scoped>

</style>