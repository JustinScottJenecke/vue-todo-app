import TodoItem from "./TodoItem.js";

const AssignmentList = {

    props: {
        todos: Array,
        title: String
    },
    components: {
        "todo-item": TodoItem
    },
    /* html */
    template: `
        <section v-show="todos.length">
            <h2 class="font-bold">{{ title }}:</h2>
            <ul>
                <li class="pl-4 m-1" v-for="todoItem in todos" :key="todoItem.id">
                    <todo-item :todoItem="todoItem"/>
                </li>
            </ul>
        </section>
    `
}

export default AssignmentList;