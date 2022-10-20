import {reactive} from "vue";

const params = new URLSearchParams ({
    name: '',
    email: '',
    password: ''
});
const str = params.toString();
console.log(str);

export const User = reactive({
    async getListUser() {
        await fetch('http://192.168.25.81:81/api/user')
            .then((response) => response.json())
            .then((data) => {
                User.data = data
            });
    },
    data: [],
    async postUser() {
        await fetch('http://192.168.25.81:81/api/user', {
            method: 'POST',
            body: str
        })
    }
})