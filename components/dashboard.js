import React, { Component } from 'react';
import { Text, View, Button, TextInput, StyleSheet, } from 'react-native';
import DisplayTodos from './DisplayTodos';
import { connect } from "react-redux";
import { AddTodo, DeleteAll, EditTodo, DeleteTodo } from "../store/TodoAction";

class DashBoard extends Component {
    constructor() {
        super()
        this.state = {
            todoItem: '',
            editIndex: null,
            edit: null,
        }
    }
    onAdd = () => {
        console.log(" i will add todos")
        if (this.state.todoItem === '') {
            return
        }
        if (this.state.editIndex !== null) {
            console.log("i am edit")
            this.props.edit(this.state.todoItem, this.state.editIndex) 
        }
        else {
            console.log("hey")
            this.props.add(this.state.todoItem)
        }
        this.setState({ todoItem: '', editIndex: null, edit: null })
    }

     ondelete = (itemIndex) => {
        const selectedItem = this.props.todoItems[itemIndex]
        if (selectedItem === this.state.todoItem) {
            this.setState({ todoItem: '', editIndex: null, edit: null })
        }
        if(this.state.editIndex > itemIndex){
            let a = this.state.editIndex
            --a;
            this.setState({editIndex: a})
       }
        this.props.delete(itemIndex) 
    }
     
     onEdit = (itemIndex) => {
        const editItem = this.props.todoItems[itemIndex]
        this.setState({ todoItem: editItem, editIndex: itemIndex, edit: true});
     } 
     ondeleteAll = () => {
         this.props.deleteAll()
         this.setState({todoItem: "", editIndex: null, edit: null})
     } 
    whenChange = (value) => {
        this.setState({ todoItem: value })
    }

    render() {
        console.log(this.state.todoItem)
        const { todoItems } = this.props;
        console.log(todoItems)
        return (
            <View style={styles.mainContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Add Todo"
                        name="todo"
                        onChangeText={this.whenChange}
                        value={this.state.todoItem}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    {this.state.edit ? (
                        <Button title="Update Todo" color="#AB47BC" onPress={this.onAdd} />
                    ) : (<Button title="Add Todo" color="#AB47BC" onPress={this.onAdd} />)}
                </View>
                {this.props.todoItems.length > 1 ? (<View style={styles.buttonContainer2}>
                    <Button title="Delete All Todos" color="#9575CD" onPress={this.ondeleteAll} />
                </View>):(null)}
                <View style={styles.displayItemContainer}>
                    {this.props.todoItems.length > 0 ? (<DisplayTodos todoItems={todoItems} editItem={this.onEdit} delItem={this.ondelete}/>
                    ) : (<View style={styles.NoTodosText}><Text style={{fontSize: 20}}>No, To-do items</Text></View>)}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    loading: {
        fontSize: 40,
        color: "#90a4ae",
    },
    NoTodosText: {
        color: "#90a4ae",
        marginLeft: 135
    },
    mainContainer: {
        paddingTop: 15,
        paddingBottom: 15,
    },
    inputContainer: {
        borderBottomWidth: 1,
        width: 250,
        marginLeft: 70,
        marginBottom: 20,
    },
    buttonContainer: {
        width: 130,
        marginLeft: 140,
        marginBottom: 10,
    },
    buttonContainer2: {
        width: 150,
        marginLeft: 130,
        marginBottom: 20,
    },
    displayItemContainer: {

    }
});
const mapStateToProps = (state) => {
    return {
        todoItems: state
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        add: (additem) => dispatch(AddTodo(additem)),
        deleteAll: () => dispatch(DeleteAll()),
        edit: (editItem , eindex) => dispatch(EditTodo(editItem, eindex)),
        delete: (did) => dispatch(DeleteTodo(did)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);