import React from 'react'
import {
    View, StyleSheet, Text, Slider
} from 'react-native'
import AddEntry from "./components/AddEntry"
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'


export default class App extends React.Component {
  render() {
    return (
        <Provider store={createStore(reducer)}>
            <View>
                <AddEntry/>
            </View>
        </Provider>
    )
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'stretch',
        justifyContent: 'center'
    }
})
