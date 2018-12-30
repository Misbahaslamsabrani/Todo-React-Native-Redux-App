import React, {Component} from 'react';
import {Text, View, StyleSheet,} from 'react-native';
import DashBoard from './components/dashboard';
import {Provider} from "react-redux"
import store  from "./store/store"
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.bg} >
        <View>
          <Text style={styles.heading}>Todo React Native App</Text>
        </View>
        <DashBoard/>
      </View>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#f3e5f5",
    height: 800,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 30,  
    color: "#6A1B9A",
    paddingTop: 15, 
    paddingBottom:5,
    paddingLeft: 40,
  },
});
