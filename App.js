import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoallList from './components/GoallList.js'
import GoallInput from './components/GoallInput'
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modal, setModal] = useState(false)

  const addGoalHandler = (goalTitle) => {
    if (goalTitle.lenght === 0) {
      return;
    }
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle }]);
    setModal(false)
  };
  const handleOnDelete = (goalid) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalid)
    })
  }
  const handleCancellGoal = () => {
    setModal(false)
  }
  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => setModal(true)} />
      <GoallInput addGoal={modal} goalInput={addGoalHandler} CancelGoal={handleCancellGoal} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemdata => (
          <GoallList id={itemdata.item.id} onDelete={handleOnDelete} title={itemdata.item.value} />
        )} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
