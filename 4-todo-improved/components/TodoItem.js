const AssignmentItem = {
    props: {
        todoItem: Object
    },
    /* html */
    template: ` 
        <li :id="todoItem.id">
            {{todoItem.id}} - {{todoItem.todoName}}
            <input type="checkbox" name="" id="" v-model="todoItem.complete">
        </li>
    `
}

export default AssignmentItem; 