import { StyleSheet } from "react-native";

export default StyleSheet.create({
  padding: {
    padding: 20,
  },
  flex: {
    // display: "flex",
    // flex: 1,
    flexDirection: "column",
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  buttonWrapper: {
    marginTop: 20,
  },
  button: {
    marginTop: 3,
  },
  todosList: {},
  todosListItem: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // width: "100%",
    marginTop: 20,
  },
  todoListTitleCompleted: {
    textDecorationLine: "line-through",
  },
});
