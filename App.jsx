/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet} from 'react-native';
import TodoList from './components/ToDoList';
import TodoForm from './components/ToDoForm';

function App() {
  return (
    <SafeAreaView>
      <ToDoList/>
      <ToDoForm/>
      
    </SafeAreaView>
  );
}

export default App;