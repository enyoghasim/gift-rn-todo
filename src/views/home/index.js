import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import styles from "./style";
import React from "react";

const Home = ({ navigation, route }) => {
  return (
    <View style={styles.padding}>
      <View style={styles.flex}>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter title"
            onSubmitEditing={() => console.log("jjj")}
          ></TextInput>
        </View>
        <View style={styles.buttonWrapper}>
          <Button style={styles.button} title="Add"></Button>
        </View>
      </View>
      <View style={styles.todosList}>
        {[1, 2, 3, 4, 5].map((item) => (
          <View key={item} style={styles.todosListItem}>
            <Text>Todo 1</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Home;
