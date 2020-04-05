import React, { useRef } from "react";
import {
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
  PanResponder,
} from "react-native";
import { Text, Block, AnimatedBlock } from "../../Atoms";
import BlockImage from "../../Atoms/BlockImage";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../Atoms/Constants/theme";

const { height } = Dimensions.get("screen");
export default function ShowRecipe() {
  const heightAnim = useRef(new Animated.Value(height - 200)).current;
  const pan = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (e, gestureState) => {
        if (heightAnim._value > height - 200) {
          heightAnim.setValue(height-200)
        } else {
          heightAnim.setOffset(heightAnim._value);
        }
      },

      onPanResponderMove: Animated.event([null, { dy: heightAnim }]),

      onPanResponderRelease: (e, { vx, vy }) => {
        console.log(heightAnim);
        heightAnim.flattenOffset();
      },
    })
  ).current;
  const open = () => {
    Animated.spring(heightAnim, {
      toValue: height - 100,
    }).start();
  };
  return (
    <SafeAreaView style={{ flex: 1, position: "relative" }}>
      <BlockImage
        style={{
          flex: 1,
          padding: 20,
          height: 550,
          justifyContent: "space-between",
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
        }}
        source={require("../../../assets/eat.png")}
      >
        <Block
          row
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 35,
          }}
        >
          <Feather name="arrow-left" size={24} color={colors.primary} />
          <Feather name="heart" size={24} color={"white"} />
        </Block>
        <Block center>
          <Feather name="play-circle" size={100} color={"#FFFFFF"} />
        </Block>
        <Block>
          <Text h2 style={{ width: 200 }} color={"white"}>
            Swedish meatballs{" "}
          </Text>
          <Block
            row
            style={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Block row style={{ marginBottom: 45 }}>
              <Text color={"white"}>By</Text>
              <Text style={{ marginLeft: 5 }} color={colors.primary}>
                Christian
              </Text>
            </Block>
            <Text color={colors.primary}>+Suivre</Text>
          </Block>
        </Block>
      </BlockImage>
      <AnimatedBlock
        {...pan.panHandlers}
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "white",
          height: heightAnim,
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
        }}
      >
        <Block center>
          <TouchableWithoutFeedback onPress={() => open()}>
            <Block center style={{ width: 200 }}>
              <Block
                style={{
                  width: 100,
                  height: 10,
                  backgroundColor: "gray",
                  marginTop: 10,
                  borderRadius: 50,
                }}
              />
            </Block>
          </TouchableWithoutFeedback>
        </Block>
        <ScrollView style={{ padding: 35 }}>
          <Text>Recipe infinty</Text>
        </ScrollView>
      </AnimatedBlock>
    </SafeAreaView>
  );
}
