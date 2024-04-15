const App = {
    template: `
        <section>
            <h1 class="m-2 font-bold text-center text-lg">Todo App</h1>
            <hr>
            <section class="grid grid-cols-2 p-2">
                <div v-show="backlogTodos.length">
                    <h2 class="font-bold">Backlog:</h2>
                    <ul>
                        <li class="pl-4 m-1" v-for="todoItem in backlogTodos" :key="todoItem.id">
                            {{todoItem.id}} - {{todoItem.todoName}}
                            <input type="checkbox" name="" id="" v-model="todoItem.complete">
                        </li>
                    </ul>
                </div>
                <div v-show="completedTodos.length">
                    <h2 class="font-bold">Completed:</h2>
                    <ul>
                        <li class="pl-4 m-1" v-for="todoItem in completedTodos" :key="todoItem.id">
                            {{todoItem.id}} - {{todoItem.todoName}}
                            <input type="checkbox" name="" id="" v-model="todoItem.complete">
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    `,
    data() {
        return {
            todoItemList: [
                { id: 1, todoName: "finish Vue.js tutorial", complete: false },
                { id: 2, todoName: "Setup repository, project, folder structure, etc.", complete: false },
                { id: 3, todoName: "Complete user stories", complete: true },
                { id: 4, todoName: "Notify manager", complete: false }
            ]
        }
    },
    methods: {

    },
    computed: {
        completedTodos() {
            return this.todoItemList.filter(item => item.complete)
        },
        backlogTodos() {
            return this.todoItemList.filter(item => !item.complete)
        }
    }
}

Vue.createApp(App).mount('#app');