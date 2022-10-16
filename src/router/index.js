import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router';
import NodeList from "@/components/NodeList";
import Counter from "@/components/Counter";
import FormHello from "@/components/FormHello";

const isServer = typeof window === 'undefined';
const history = isServer ? createMemoryHistory() : createWebHistory();
const routes = [
    {
        path: '/',
        name: 'Nodes',
        component: NodeList,
    },
    {
        path: '/counter',
        name: 'Counter',
        component: Counter,
    },
    {
        path: '/formHello',
        name: 'FormHello',
        component: FormHello,
    },
];

const router = createRouter({
    history,
    routes,
});

export default router;