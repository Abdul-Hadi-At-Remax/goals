import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>This app is developed by Abdul Hadi!</Text>
      </View>
      <View>
        <Text style={styles.text}>Hello</Text>
        <Button title="Tap me" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    margin: 16,
    borderWidth: 2,
    borderColor: "blue",
    padding: 16,
  },
});
