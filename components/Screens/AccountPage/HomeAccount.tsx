import React from "react";
import { SafeAreaView } from "react-native";
import { Text, Block } from "../../Atoms";
import constrains from "expo-constants";
import { ScrollView } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../Atoms/Constants/theme";
import BlockImage from "../../Atoms/BlockImage";
import BlockItems from "./BlockItems";

export default function HomeAccount(props) {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: constrains.statusBarHeight,backgroundColor:"white" }}>
      <Block style={{ flex: 1, padding: 25 }}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <Block row right>
            <Feather name="settings" size={24} color={colors.primary} />
          </Block>
          <Block center>
            <BlockImage
              source={require("../../../assets/user.png")}
              style={{ width: 50, height: 50 }}
            />
          </Block>
          <Text center style={{ marginTop: 10 }}>
            Mcheal Gorvy
          </Text>
          <Block
            row
            style={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Block style={{ marginTop: 15 }}>
              <Text center>10</Text>
              <Text>Publication</Text>
            </Block>
            <Block style={{ marginTop: 10 }}>
              <Text center>52</Text>
              <Text>Following</Text>
            </Block>
            <Block style={{ marginTop: 10 }}>
              <Text center>250</Text>
              <Text>Followers</Text>
            </Block>
          </Block>
          <BlockItems master title={"Favories"} />
          <BlockItems title={"Publication"} />
          <BlockItems title={"La Paix"} />
        </ScrollView>
      </Block>
    </SafeAreaView>
  );
}
