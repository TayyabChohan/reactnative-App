import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
const GoallList = props => {
    return (
        <TouchableOpacity style={styles.listItem} onPress={props.onDelete.bind(this, props.id)}>
            <Text>{props.title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
})
export default GoallList