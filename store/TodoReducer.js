const initState = []
const todoReducer = (state = initState, action) => {
    console.log(action);
    switch(action.type){
        case "Add": 
        const temArr = [...state]
        temArr.push(action.additem)
        return state = temArr;
        case "DeleteAll":
        return state = [];
        case "Edit":
        const temArr2 = [...state];
        temArr2[action.editIndex] = action.edittodo;
        return state = temArr2;
        case "Del":
        const temArr1 = [...state];
        temArr1.splice(action.delIndex, 1);
        return state = temArr1;
        default:
        return state;
    }
}
export default todoReducer;