import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../Screens/HomePage/HomePage";
//Icons
import { Feather } from "@expo/vector-icons";
//Screens
import AddRecipe from "../../Screens/AddRecipe/AddRecipe";
import Search from "../../Screens/Search/Search";
import { colors } from "../../Atoms/Constants/theme";
import Feed from "../../Screens/FeedPage/Feed";
import HomeAccount from "../../Screens/AccountPage/HomeAccount";

const BottomTab = createBottomTabNavigator();

export default function AppNavigator() {
return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: "black",
        style:{
          elevation:0
        },
        showLabel:false,
        labelStyle: {
          color: "black",
        },
      }}
      initialRouteName="Home"
    >
      <BottomTab.Screen
        options={{
          tabBarLabel: "Acceuil",
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
        name="home"
        component={Home}
      />
      <BottomTab.Screen
        options={{
          tabBarLabel: "Recherches",
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
        name="search"
        component={Search}
      />
      <BottomTab.Screen
        options={{
          tabBarLabel: "Ajouter",
          tabBarIcon: ({ color, size }) => (
            <Feather name="plus-circle" size={size} color={color} />
          ),
        }}
        name="add"
        component={AddRecipe}
      />
      <BottomTab.Screen
        options={{
          tabBarLabel: "Actualité",
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" size={size} color={color} />
          ),
        }}
        name="actu"
        component={Feed}
      />
      <BottomTab.Screen
        options={{
          tabBarLabel: "Mon Compte",
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
       
        }}
        name="Mon Compte"
        component={HomeAccount}
      />
    </BottomTab.Navigator>
  );
}
