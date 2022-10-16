<template>
  <form>
    <h2>Форма приветствия</h2>
    <section>
      <label for="firstname">Введите Ваше имя</label>
      <input type="text" name="" id="firstname" required v-model=firstname>
    </section>
    <section>
      <label for="lastname">Введите Вашу фамилию</label>
      <input type="text" name="" id="lastname" required v-model=lastname>
    </section>
    <button @click="show()">ПРИВЕТ</button>
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
  // methods: {
  //   show: function () {
  //     ModalState.shadowBoxHidden = true;
  //     this.hidden = true;
  //   }
  // }
}
</script>

<style scoped>

</style>