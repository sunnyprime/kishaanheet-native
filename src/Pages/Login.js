import React from 'react';
import { StyleSheet,Image, Text, View } from "react-native";
import Loginc from '../Components/Loginc'
import Loginform from '../Components/LoginForm'

export default function Login() {
  return (
    <View style={styles.container}>
            <Image
        style={styles.logo}
        source={{
          uri:
            'https://github.com/sunnyprime/LOGO/blob/master/kishaanHeet/kh%20icon.png?raw=true',
        }}
      />
    {/* <Text>Hello, I am your Login!</Text> */}
    {/* <Loginc /> */}
    <Loginform />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D7F7AF",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 66,
    height: 66,
  }
});