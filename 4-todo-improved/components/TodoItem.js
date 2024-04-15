const AssignmentItem = {
    props: {
        todoItem: Object
    },
    /* html */
    template: ` 
        <li class="border-solid m-2 border-slate-100" :id="todoItem.id">
            {{todoItem.id}} - {{todoItem.todoName}}
            <input type="checkbox" name="" id="" v-model="todoItem.complete">
        </li>
    `
}

export default AssignmentItem; 