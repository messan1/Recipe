import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigator from "../AuthNavigator/AuthNavigator";
import SettingsHome from "../../Screens/Settings/Home";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    
    <Stack.Navigator  initialRouteName="Settings" mode="card" headerMode="none">
      <Stack.Screen name="Settings" component={SettingsHome} />
      <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
    </Stack.Navigator>
  );
}
