import React from "react";
import { Block, Text } from "../../../Atoms";
import { ScrollView } from "react-native";

export default function RecipeDetails() {
  const recipeSetps = [
    {
      title: "Setp 1",
      content:
        "In a medium sized bowl combine ground beef, panko, parsley, allspice, nutmeg, onion, garlic powder, pepper, salt and egg. Mix until combined.",
    },
    {
      title: "Setp 2",
      content:
        "Roll into 12 large meatballs or 20 small meatballs. In a large skillet heat olive oil and 1 Tablespoon butter. Add the meatballs and cook turning continuously until brown on each side and cooked throughout. Transfer to a plate and cover with foil.",
    },
    {
      title: "Setp 3",
      content:
        "Add the meatballs back to the skillet and simmer for another 1-2 minutes. Serve over egg noodles or rice.",
    },
  ];
  return (
    <ScrollView style={{ backgroundColor: "white", paddingTop: 15 }}>
      <Block>
        {recipeSetps.map((element) => (
          <Block key={element.title}>
            <Text h4 style={{marginBottom:15,marginTop:15}}>{element.title}</Text>
            <Text>{element.content}</Text>
          </Block>
        ))}
        <Text style={{marginBottom:15,marginTop:15}}>Enjoy : )</Text>
      </Block>
    </ScrollView>
  );
}
