import React from 'react'
import {
    View, StyleSheet, Text, Slider, Image, ScrollView, FlatList
} from 'react-native'
import AddEntry from "./components/AddEntry"
import getReviews from './reviews'

// not relate to the app... just examples with ScrollView, FlatList and Image
// using the reviews file


function Review ({ name, text, avatar}) {
    return (
        <View style={styles.review} >
            <Image source={{uri:avatar}} style={styles.avatar} />
            <View style={{flex: 1, flexWrap: 'wrap'}}>
                <Text style={{fontSize: 20}}> {name} </Text>
                <Text>{text}</Text>
            </View>
        </View>
    )
}


export default class App extends React.Component {

    renderItem = ({ item }) => {
        return  (<Review {...item}/>)

    }



    render() {
        const reviews = getReviews()


        return (

            <View style={styles.container}>
                <FlatList
                    data={reviews}
                    renderItem={this.renderItem}
                />

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    review: {
        margin: 10,
        flexDirection: 'row'
    },
    avatar: {
        width: 75,
        height: 75,
        borderRadius: 25
    }

})
