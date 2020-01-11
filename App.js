import React,{ useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header.js';
import ToDoItem from './components/toDoItem.js';
import AddToDo from './components/addToDo.js';
export default function App() {
  const[todos,setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ]);

  const pressHandler = (key)=>{
    setTodos((prevToDos) => {
      return prevToDos.filter(todo => todo.key !=key);
    })
  }
  const submitHandler = (text) => {
    setTodos((prevToDos)=>{
      return [
        { text:text, key: Math.random().toString() },
        ...prevToDos
      ]
    })
  }


  return (
    <View style={styles.container}>
      {/* header */}
      <Header/>
      <View style={styles.content}></View>
      {/* to form */}
      <AddToDo submitHandler={submitHandler}/>
      <View style={styles.list}></View>
      <FlatList
        data={todos}
        renderItem={({item}) => (
          <ToDoItem item={item} pressHandler={pressHandler}/>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  content:{
    padding:40,
  },
  list:{
    marginTop:20,
  }
});
