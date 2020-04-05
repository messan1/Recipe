import React, { useState } from "react";
import { Block, Text } from "../../../Atoms";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../../Atoms/Constants/theme";
import { ScrollView } from "react-native";
import Sp from "../../../Moleculs/Sp";

export default function Ingrediant() {
  const recipe = [
    {
      nature: "Beef",
      quantity: "1 kilo",
    },
    {
      nature: "Milk",
      quantity: "330 ml",
    },
    {
      nature: "Sweet Potatoes",
      quantity: "500 g",
    },
    {
      nature: "Curd",
      quantity: "2 st",
    },
    {
      nature: "Salt",
      quantity: "3 g",
    },
    {
      nature: "Dround allspice",
      quantity: "15 ml",
    },
    {
      nature: "Water",
      quantity: "200 ml",
    },
    {
      nature: "Egg",
      quantity: "2 st",
    },
    {
      nature: "Flour",
      quantity: "150 g",
    },
    {
      nature: "Bread crumbs ",
      quantity: "110 g",
    },
  ];
  return (
    <ScrollView style={{backgroundColor:"white",paddingTop:15}}>
      <Block
        row
        style={{
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Feather name="clock" size={24} color={colors.primary} />
        <Text h5 color={colors.primary}>
          3 Secondes
        </Text>
      </Block>
      <Block style={{ marginTop: 15, marginBottom: 35 }}>
        <Block
          row
          style={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Block>
            <Text>Calories</Text>
            <Text>242</Text>
            <Text>Kcal</Text>
          </Block>
          <Sp />
          <Block>
            <Text>Proteins</Text>
            <Text>242</Text>
            <Text>8.9</Text>
          </Block>
          <Sp />
          <Block>
            <Text>Fats</Text>
            <Text>7.5</Text>
            <Text>Gram</Text>
          </Block>
          <Sp />
          <Block>
            <Text>Carbs</Text>
            <Text>33.6</Text>
            <Text>Gram</Text>
          </Block>
        </Block>
      </Block>
      {recipe.map((ingr) => (
        <Block
          row
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text h5>{ingr.nature}</Text>
          <Text h5>{ingr.quantity}</Text>
        </Block>
      ))}
    </ScrollView>
  );
}
