import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const TodoList = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todo) {
      setTodos([...todos, { key: todo }]);
      setTodo('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new todo"
        value={todo}
        onChangeText={setTodo}
      />
      <Button title="Add Todo" onPress={addTodo} />
      <FlatList
        data={todos}
        renderItem={({ item }) => <Text style={styles.todo}>{item.key}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  todo: {
    padding: 10,
    fontSize: 18,
  },
});

export default TodoList;
