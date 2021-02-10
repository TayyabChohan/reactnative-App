import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Modal } from 'react-native';
const GoallInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };
    const addGoal = () => {
        props.goalInput(enteredGoal)
        setEnteredGoal('');
    }
    return (
        <Modal visible={props.addGoal} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Course Goalf"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonInline}>
                    <View style={styles.Button}>
                        <Button title="CANCEL" color='red' onPress={props.CancelGoal} />
                    </View>
                    <View style={styles.Button}>
                        <Button title="ADD" onPress={addGoal} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonInline: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    Button: {
        width: '40%'
    }
})
export default GoallInput