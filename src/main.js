import buildApp from './App';

const { app, router } = buildApp();

router.isReady()
    .then(() => {
        app.mount('#app', true);
    });