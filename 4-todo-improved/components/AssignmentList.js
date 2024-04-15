const AssignmentList = {

    props: {
        todos: Array,
        title: String
    },
    /* html */
    template: `
        <section v-show="todos.length">
            <h2 class="font-bold">{{ title }}:</h2>
            <ul>
                <li class="pl-4 m-1" v-for="todoItem in todos" :key="todoItem.id">
                    {{todoItem.id}} - {{todoItem.todoName}}
                    <input type="checkbox" name="" id="" v-model="todoItem.complete">
                </li>
            </ul>
        </section>
    `
}

export default AssignmentList;