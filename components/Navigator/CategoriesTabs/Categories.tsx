import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { sizes, colors } from "../../Atoms/Constants/theme";
import SearchTab from "../../Screens/Search/SearchTab";

const Tab = createMaterialTopTabNavigator();
export default function Navigation() {
  return (
    <Tab.Navigator
      initialRouteName="Categories"
      tabBarOptions={{
        activeTintColor: colors.black,
        inactiveTintColor: colors.gray,
        style: {
          elevation: 0,
        },
        indicatorStyle: {
          height: 2,
          backgroundColor: colors.black,
          marginTop: 20,
        },
        labelStyle: {
          fontSize: sizes.h4,
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen name="Categories" component={SearchTab} />
      <Tab.Screen name="Allergies" component={SearchTab} />
    </Tab.Navigator>
  );
}
