import React from 'react';
import { StyleSheet,Image, Text, View } from "react-native";
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Test() {
  return (
    <View style={styles.container}>
      <Text>test</Text>
      <Button
      color="#0F0"
  title="Solid Button"
  style = {{color:'red'}}
/>
<Button color="#FF0000" title="I'm a button!" />

<Button
  title="Outline button"
  type="outline"
/>

<Button
  title="Clear button"
  type="clear"
/>

<Button
  icon={
    <Icon
      name="arrow-right"
      size={15}
      color="white"
    />
  }
  title="Button with icon component"
/>

<Button
  icon={{
    name: "arrow-right",
    size: 15,
    color: "white"
  }}
  title="Button with icon object"
/>

<Button
  icon={
    <Icon
      name="arrow-right"
      size={15}
      color="white"
    />
  }
  iconRight
  title="Button with right icon"
/>

<Button
  title="Loading button"
  loading
/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7AF",
    alignItems: "center",
    justifyContent: "center"
  },
  custom:{
    backgroundColor:"#F00",
    fontSize:2,
    
  },
  logo: {
    width: 66,
    height: 66,
  }
});