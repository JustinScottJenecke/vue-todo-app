const AssignmentItem = {
    props: {
        todoItem: Object
    },
    /* html */
    template: `
        <div :id="todoItem.id">
            {{todoItem.id}} - {{todoItem.todoName}}
            <input type="checkbox" name="" id="" v-model="todoItem.complete">
        </div>
    `
}

export default AssignmentItem; 