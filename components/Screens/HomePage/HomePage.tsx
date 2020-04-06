import React from "react";
import {
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { Block, Text } from "../../Atoms";
import BlockImage from "../../Atoms/BlockImage";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../Atoms/Constants/theme";
import contrains from "expo-constants";
export default function HomePage(props) {
  const data = [
    {
      id: 1,
      image: require("../../../assets/eat2.png"),
      text: "Sandwich with smokedham",
    },
    {
      id: 2,
      image: require("../../../assets/eat3.png"),
      text: "Brownie with almonds and melted chocolate ",
    },
    {
      id: 3,
      image: require("../../../assets/eat4.png"),
      text: "Sandwich with smokedham",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback onPress={() => props.navigation.push("recipe")}>
          <BlockImage
            right
            source={require("../../../assets/eat.png")}
            style={styles.blockimage}
          >
            <Text h3 bold color={"white"} style={styles.text}>
              Recipe Of the Day
            </Text>
          </BlockImage>
        </TouchableWithoutFeedback>
        <Block
          row
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 35,
          }}
        >
          <Text h4 bold>
            Breakfast
          </Text>
          <TouchableWithoutFeedback>
            <Feather name="arrow-right" size={24} color={colors.primary} />
          </TouchableWithoutFeedback>
        </Block>

        <Block style={{ marginTop: 10 }}>
          <ScrollView
            horizontal={true}
            bouncesZoom={true}
            showsHorizontalScrollIndicator={false}
          >
            {data.map((element) => (
              <TouchableWithoutFeedback
                key={element.id}
                onPress={() => console.log("press")}
              >
                <Block style={{ marginRight: 15 }}>
                  <BlockImage
                    style={{ width: 180, height: 180 }}
                    source={element.image}
                  ></BlockImage>
                  <Text h5 style={{ width: 180 }}>
                    {element.text}
                  </Text>
                </Block>
              </TouchableWithoutFeedback>
            ))}
          </ScrollView>
        </Block>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 20,
    marginTop:contrains.statusBarHeight
  },
  blockimage: {
    marginTop: 15,
    height: 400,
    borderRadius: 20,
    overflow: "hidden",
  },
  text: {
    margin: 15,
    width: 200,
  },
});
