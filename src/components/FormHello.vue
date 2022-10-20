<template>
  <form>
    <h2>Форма приветствия</h2>
    <section>
      <label for="firstname">Введите Ваше имя</label>
      <input type="text" name="" id="firstname" required :value="firstname"
             @input="event => this.firstname = event.target.value">
    </section>
    <section>
      <label for="lastname">Введите Вашу фамилию</label>
      <input type="text" name="" id="lastname" required :value="lastname"
             @input="event => this.lastname = event.target.value">
    </section>
    <button @click="show()" type="button">ПРИВЕТ</button>
  </form>
  <modal-window></modal-window>
</template>

<script>
import { ModalState } from "@/ModalState";
import ModalWindow from "@/components/ModalWindow";

export default {
  name: "FormHello",
  components: {
    ModalWindow
  },
  data() {
    return {
      ModalWindow,
      ModalState,
      firstname: '',
      lastname: ''
    }
  },
  methods: {
    show: function () {
      ModalState.lastname = this.lastname;
      ModalState.firstname = this.firstname;

      ModalState.ShowHideModal = true;

      this.hidden = true;
    }
  }
}
</script>

<style scoped>

</style>