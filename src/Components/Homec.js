import React from 'react';
import { StyleSheet,Image, Text, View } from "react-native";
import { Header } from 'react-native-elements';
// import LinearGradient from 'react-native-linear-gradient';

export default function Homec() {
  return (
    <View style={styles.container}>
<Header
  backgroundColor="#F11"
  placement="left"
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    // justifyContent: "center"
  },
  logo: {
    width: 66,
    height: 66,
  }
});