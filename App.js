import React from 'react';
import { Text } from 'react-native';
import { NativeRouter, Switch, Route } from "react-router-native";
import Home from './src/Pages/Home'
import Login from './src/Pages/Login'
import Test from './src/Pages/Test'


export default function App() {
  return (
    <>
    <NativeRouter>
      {/* <Home></Home> */}
      {/* <Login></Login> */}
      <Test />
    </NativeRouter>
    </>
  );
}
