export const AddTodo = (additem) => {
    return {type: "Add", additem: additem}
}
export const DeleteAll = () => {
    return{type:"DeleteAll"}
}
export const EditTodo = (editItem, eIndex) => {
    return {type:"Edit", edittodo: editItem, editIndex: eIndex}
}
export const DeleteTodo = (did) => {
    return {type:"Del",delIndex: did}
}