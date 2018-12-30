import React from 'react';
import { View, StyleSheet, Text, Button, ScrollView } from "react-native";
const DisplayTodos = (props) => {
    const { todoItems, editItem, delItem } = props;
    return (
            <ScrollView>
                <View style={styles.mainMainContainer}>
            {
                todoItems.map((v, i) => {
                return (<View key={i} style={styles.mainContainer}>
                    <View style={styles.number}>
                        <Text style={{fontSize: 17, color: "black"}}>{i + 1}.</Text></View>
                    <View style={styles.mainItem}>
                        <Text style={{fontSize: 17, color: "black"}}>{v}</Text></View>
                    <View style={styles.editBu}>
                        <Button title="Edit" color="#B39DDB" onPress={() => editItem(i)} /></View>
                    <View style={styles.delBu}>
                        <Button title="Done" color="#B39DDB" onPress={() => delItem(i)} /></View>
                    </View>)
                })
            }
                </View>
            </ScrollView>
        
    );
}
const styles = StyleSheet.create({
    mainMainContainer: {
        height: 1000,
    },
    mainContainer: {
        marginLeft: 10,
        marginRight: 5,
        display: "flex",
        flexDirection: "row"
    },
    number: {width:25, height: 40 },
    mainItem: {width: 200, height: 40 },
    editBu: { borderWidth: 3, borderColor:"#f3e5f5" ,width:60, height: 40,},
    delBu: { borderWidth: 3, borderColor:"#f3e5f5" ,width:70.,height: 40 },
})
export default DisplayTodos;