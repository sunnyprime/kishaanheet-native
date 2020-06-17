import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
// import { TextInput } from 'react-native-paper';

export default function Loginform() {
  return (
    <View style={styles.container}>
    <Text style={styles.inputext}>LOGIN</Text>
      <Input
        // value={this.state.username}
        // onChangeText={(username) => this.setState({ username })}
         label='Email'
        style={styles.input}
      />
      <Input
        // value={this.state.password}
        // onChangeText={(password) => this.setState({ password })}
        label='Password'
        secureTextEntry={true}
        style={styles.input}
      />
      
      <Button
        title={'Login'}
        style={styles.inputbutton}
        // onPress={this.onLogin.bind(t}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height:'70%',
    width:'80%',
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#D7F7AF',
    // borderWidth: 1,
    // borderColor: 'black',
    
    
  },
  input: {
    width: 400,
    height: 44,
    padding: 10,
    // backgroundColor:"#FFF",
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    color:'#FFF',
  },
  inputext: {
    width: 200,
    height: 44,
    padding: 10,
    fontSize:20,
    textAlign:'center',
    fontWeight:'bold',
    // borderWidth: 1,
    // borderColor: 'black',
    marginBottom: 10,
    marginTop:10,
    // paddingBottom:15,
  },
  inputbutton:{
    backgroundColor:'#F00',
        borderWidth: 1,
    borderColor: 'black',
  }
});