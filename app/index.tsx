import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
  <View style={styles.container}>
    <Text style={styles.text}>Parking-lot finder</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 600,
    color: 'blue'
  },
});