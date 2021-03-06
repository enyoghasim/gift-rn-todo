import { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  Switch,
  Alert,
  Vibration,
  ScrollView,
} from "react-native";

import styles from "./style";
import React from "react";
import Checkbox from "expo-checkbox";

const Home = ({ navigation, route }) => {
  const [todos, setTodos] = useState([]);

  const [inputText, setInputText] = useState("");

  const editTodoCompleted = (index) => {
    const newTodos = todos.map((todo) => {
      if (Number(index) === todo.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo = () => {
    if (inputText.trim() === "") {
      const ONE_SECOND_IN_MS = 50;

      const PATTERN = [
        1 * ONE_SECOND_IN_MS,
        2 * ONE_SECOND_IN_MS,
        3 * ONE_SECOND_IN_MS,
      ];

      const PATTERN_DESC =
        Platform.OS === "android"
          ? "wait 1s, vibrate 2s, wait 3s"
          : "wait 1s, vibrate, wait 2s, vibrate, wait 3s";

      Vibration.vibrate(10 * ONE_SECOND_IN_MS);
      Alert.alert("Error", "Please enter a todo");
      return;
    }
    const newTodo = {
      title: inputText,
      completed: false,
      id: Math.random() * 100 + 10000,
    };
    setTodos([...todos, newTodo]);
    setInputText("");
  };
  return (
    <View style={styles.padding}>
      <View style={styles.flex}>
        <View>
          <TextInput
            style={styles.input}
            value={inputText}
            placeholder="Enter title"
            onChangeText={(text) => setInputText(text)}
            onSubmitEditing={addTodo}
          ></TextInput>
        </View>
        <View style={styles.buttonWrapper}>
          <Button style={styles.button} title="Add" onPress={addTodo}></Button>
        </View>
      </View>
      <ScrollView>
        <View style={styles.todosList}>
          {todos.map((item, index) => (
            <View key={index} style={styles.todosListItem}>
              <Text style={item.completed ? styles.todoListTitleCompleted : {}}>
                {item.title}
              </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={true ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                value={item.completed}
                onChange={() => editTodoCompleted(item.id)}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      {/* <Checkbox />
      <Checkbox />
      <Checkbox /> */}
    </View>
  );
};

export default Home;
