import { reactive } from "vue";

export const ModalState = reactive( {
    ShowHideModal: true,
    props: ['firstname', 'lastname']
})