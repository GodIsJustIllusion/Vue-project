import { reactive } from "vue";

export const ModalState = reactive( {
    ShowHideModal: false,
    firstname: '',
    lastname: '',
    props: ['firstname', 'lastname']
})