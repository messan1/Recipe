import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ingrediants from "../../Screens/Recipe/RecipeDetails/Ingrediants";
import RecipeDetails from "../../Screens/Recipe/RecipeDetails/RecipeDetails";
import { sizes, colors } from "../../Atoms/Constants/theme";

const Tab = createMaterialTopTabNavigator();
export default function Navigation() {
  return (
        <Tab.Navigator
          initialRouteName="Ingrediants"
          tabBarOptions={{
            activeTintColor: colors.black,
            inactiveTintColor: colors.gray,
            style: {
              elevation: 0,
            },
            indicatorStyle: {
              height: 2,
              backgroundColor: colors.black,
              marginTop: 20
            },
            labelStyle: {
              fontSize: sizes.h4,
              fontWeight: "bold"
            }
          }}
        >
          <Tab.Screen name="Ingrediants" component={Ingrediants} />
          <Tab.Screen name="Etapes" component={RecipeDetails} />
        </Tab.Navigator>

  );
}
