import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import Loginform from "./LoginForm"

export default function Loginc() {
  return (
    <View style={styles.container}>
    {/* <Text>Hello, I am your Login Component</Text> */}
    <Loginform />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height:500,
    width:280,
    backgroundColor: "#D7F7AF",
    alignItems: "center",
    justifyContent: "center"
  }
});
