import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>This app is developed by Abdul Hadi!</Text>
      </View>
      <View>
        <Text
          style={{
            margin: 16,
            borderWidth: 2,
            borderColor: "red",
            padding: 16,
          }}
        >
          Hello, Tap the Button
        </Text>
        <Button title="Tap me" />
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
