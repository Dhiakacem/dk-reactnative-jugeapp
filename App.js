import React from "react";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CardItem from "./screens/CardItem";
import Card from "./screens/Card";
import Choice from "./screens/Choice";
import EditBase from "./screens/EditBase";
import AccuseScreen from "./screens/AccuseScreen";
import ScanScreen from "./screens/ScanScreen";
import LeseScreen from "./screens/LeseScreen";
import WordScreen from "./screens/WordScreen";
import AuthGoogle from "./screens/AuthGoogle";

import { createDrawerNavigator } from "@react-navigation/drawer";
import Documents from "./screens/Documents";
import CrimeScreen from "./screens/CrimeScreen";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function App() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="WordScreen" component={WordScreen} />


      <Stack.Screen name="CrimeScreen" component={CrimeScreen} />

      <Stack.Screen name="Choice" component={Choice} />
      

      <Stack.Screen name="Signup" component={Signup} />

      <Stack.Screen name="Documents" component={Documents} />

      <Stack.Screen name="LeseScreen" component={LeseScreen} />

      <Stack.Screen name="AccuseScreen" component={AccuseScreen} />

      <Stack.Screen name="Card" component={Card} />

      <Stack.Screen name="AuthGoogle" component={AuthGoogle} />

      <Stack.Screen name="ScanScreen" component={ScanScreen} />

      <Stack.Screen name="EditBase" component={EditBase} />

      <Stack.Screen name="CardItem" component={CardItem} />
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
