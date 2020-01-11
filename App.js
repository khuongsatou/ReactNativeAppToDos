import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Header from './components/header.js';
import ToDoItem from './components/toDoItem.js';
import AddToDo from './components/addToDo.js';
import Sandbox from './components/sanBox.js';
export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ]);

  const pressHandler = (key) => {
    setTodos((prevToDos) => {
      return prevToDos.filter(todo => todo.key != key);
    })
  }
  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevToDos) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevToDos
        ]
      });
    } else {
      Alert.alert('Notification', 'You must input greater than or equal to 3', [
        { text: 'Yes', onPress: () => console.log('alert Closed') }
      ]);
    }
  }


  return (
    //<Sandbox/>
    <TouchableWithoutFeedback onPress={() => {
      console.log("Dismissed ketboard");
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          {/* to form */}
          <AddToDo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <ToDoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    //backgroundColor: 'pink',
    flex: 1
  },
  list: {
    marginTop: 20,
    //backgroundColor: 'yellow'
  }
});
