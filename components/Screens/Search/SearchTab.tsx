import React, { useState } from "react";
import { SectionList, SafeAreaView } from "react-native";
import ItemUi from "./ItemUi";
export default function SearchTab(props) {
  const items = [
    {
      id: 0,
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"],
      check: false,
    },
    {
      id: 1,
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"],
      check: false,
    },
    {
      id: 2,
      title: "Drinks",
      data: ["Water", "Coke", "Beer"],
      check: false,
    },
    {
      id: 3,
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
      check: false,
    },
  ];
  const [item, setItems] = useState(items);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", padding: 30 }}>
      <SectionList
        showsVerticalScrollIndicator={false}
        sections={item}
        keyExtractor={(items, index) => items + index}
        renderItem={({ item }) => <ItemUi title={item} />}
      />
    </SafeAreaView>
  );
}
