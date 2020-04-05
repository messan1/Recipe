import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Block, Text } from "../../Atoms";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../Atoms/Constants/theme";
import BlockImage from "../../Atoms/BlockImage";

export default function Feed() {
  const data = [
    {
      id: 1,
      user: require("../../../assets/user.png"),
      image: require("../../../assets/eat5.png"),
      name: "Eva Karlsson",
      recipe: "Brownie with almonds and melted chocolate ",
    },
    {
      id: 2,
      user: require("../../../assets/user2.png"),
      image: require("../../../assets/eat6.png"),
      name: "Susan karl",
      recipe: "Brownie with almonds and melted chocolate ",
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block style={{ padding: 25 }}>
          <Block style={{ marginTop: 15, marginBottom: 25 }}>
            <Text h2>Feed</Text>
            <Block
              style={{
                width: 100,
                height: 3,
                backgroundColor: "black",
              }}
            />
          </Block>
          {data.map((user) => (
            <Block style={{marginBottom:25}}>
              <Block
                row
                center
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Block row style={{ alignItems: "center" }}>
                  <BlockImage
                    style={{ width: 50, height: 50, marginBottom: 15 }}
                    source={user.user}
                  />
                  <Text style={{ marginLeft: 5 }}>{user.name}</Text>
                </Block>
                <Feather name="heart" size={24} color={colors.primary} />
              </Block>
              <BlockImage
                style={{
                  width: 350,
                  height: 350,
                  borderRadius: 20,
                  overflow: "hidden",
                }}
                source={user.image}
              />
              <Text>{user.recipe}</Text>
            </Block>
          ))}
        </Block>
      </ScrollView>
    </SafeAreaView>
  );
}
