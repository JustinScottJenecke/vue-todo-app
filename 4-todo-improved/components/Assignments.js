import AssignmentList from "./AssignmentList.js";

const Assignments = {
    components: {
        'assignment-list': AssignmentList
    },
    /* html */
    template: `
        <section id="Assignments">
            <h1 class="m-2 font-bold text-center text-lg">Todo App</h1>
            <hr>
            <section class="grid grid-cols-2 p-2">
                <assignment-list :todos="backlogTodos" title="Backlog"/>
                <assignment-list :todos="completedTodos" title="Complete"/>
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

export default Assignments;