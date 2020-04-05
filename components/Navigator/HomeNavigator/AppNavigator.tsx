import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Settings } from "../StettingNavigator";
import Home from "../../Screens/HomePage/HomePage";
//Icons
import { Feather } from "@expo/vector-icons";
//Screens
import HomeCart from "../../Screens/CartPage/HomeCart";
import HomeCategory from "../../Screens/CategoryPage/HomeCategory";
import { colors } from "../../Atoms/Constants/theme";
import { useStoreState } from "../../../stores/hooks";

const BottomTab = createBottomTabNavigator();

export default function AppNavigator() {
  const IsVisible = useStoreState((state) => state.AppAction.OnAuthPage);
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
        component={HomeCategory}
      />
      <BottomTab.Screen
        options={{
          tabBarLabel: "Ajouter",
          tabBarIcon: ({ color, size }) => (
            <Feather name="plus-circle" size={size} color={color} />
          ),
        }}
        name="add"
        component={HomeCart}
      />
      <BottomTab.Screen
        options={{
          tabBarLabel: "Actualité",
          tabBarIcon: ({ color, size }) => (
            <Feather name="list" size={size} color={color} />
          ),
          tabBarVisible: IsVisible,
        }}
        name="actu"
        component={Settings}
      />
      <BottomTab.Screen
        options={{
          tabBarLabel: "Mon Compte",
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
          tabBarVisible: IsVisible,
        }}
        name="Mon Compte"
        component={Settings}
      />
    </BottomTab.Navigator>
  );
}
