import React from 'react'
import {
    View, StyleSheet, Text, Slider
} from 'react-native'
import AddEntry from "./components/AddEntry";


export default class App extends React.Component {
    state = {
        value: 0
    }


  render() {
    return (
     <AddEntry/>
    );
  }
}


// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         marginLeft: 10,
//         marginRight: 10,
//         alignItems: 'stretch',
//         justifyContent: 'center'
//     }
// })
