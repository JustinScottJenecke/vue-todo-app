const App = {
    data() {
        return {
            todoItemList: [
                {id: 1, todoName: "finish Vue.js tutorial", complete: false},
                {id: 2, todoName: "Setup repository, project, folder structure, etc.", complete: false},
                {id: 3, todoName: "Complete user stories", complete: true},
                {id: 4, todoName: "Notify manager", complete: false}
            ]
        }
    },
    methods: {

    },
    computed: {

    }
}

Vue.createApp(App).mount('#app');