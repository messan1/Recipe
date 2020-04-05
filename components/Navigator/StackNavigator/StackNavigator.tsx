import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AppNavigator from "../HomeNavigator/AppNavigator";
import Recipe from "../../Screens/Recipe/ShowRecipe";

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <Stack.Navigator initialRouteName="app" mode="card" headerMode="none">
      <Stack.Screen name="app" component={AppNavigator} />
      <Stack.Screen name="recipe" component={Recipe} />
    </Stack.Navigator>
  );
}
