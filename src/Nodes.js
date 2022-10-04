import { reactive } from "vue";

export const DefaultNote = {
        id: 0,
        titleNote: '',
        descNote: ''
}

export const Nodes = reactive({
        nodes: [
            {
                id: 0,
                titleNote: 'Сходить в магазин',
                descNote: '235435'
            },
            {
                id: 1,
                titleNote: 'Помыть пол',
                descNote: 'example534'
            },
            {
                id: 2,
                titleNote: 'Приготовить ужин',
                descNote: 'test9999'
            }
        ],

        createNode(new_note = DefaultNote) {
            new_note.id = this.nodes.length;
            this.nodes.push(new_note);
        },

        delNode(task) {
            this.nodes.splice(
                this.nodes.findIndex(el => el.id === Number(task)),
                1);

        }
    }
)