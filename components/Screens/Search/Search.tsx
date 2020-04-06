import React, { useRef } from "react";
import { SafeAreaView, ScrollView, Animated, Dimensions } from "react-native";
import { Text, Block, AnimatedBlock } from "../../Atoms";
import { Input } from "../../Moleculs";
import CatTabs from "../../Navigator/CategoriesTabs/Categories";
import contrains from "expo-constants";
const { width } = Dimensions.get("screen");
export default function ShowRecipe() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        marginTop: contrains.statusBarHeight,
      }}
    >
      <Block center>
        <Input
          placeholder={"Votre recherche"}
          style={{ width: width - 30, borderRadius: 25, padding: 10 }}
          border
        />
      </Block>
      <CatTabs />
    </SafeAreaView>
  );
}
