import React from "react";
import { Block, Text, Container } from "../Atoms";
import { EvilIcons } from "@expo/vector-icons";
import { colors } from "../Atoms/Constants/theme";
import { LinearGradient } from "expo-linear-gradient";

export default function HeaderColor(props) {
  const { children } = props;
  return (
    <Container>
      <Block style={{ flex: 1, backgroundColor: "#FFDD00", paddingTop: 40 }}>
        <LinearGradient colors={["#FFDD00", "#FFEA61"]} style={{ flex: 1.8 }}>
          <Block row right>
            <EvilIcons name="bell" size={32} />
            <Block style={{ marginLeft: 5 }}>
              <EvilIcons name="gear" size={32} />
            </Block>
          </Block>
          <Block></Block>
        </LinearGradient>
        <Block style={{ flex: 5, backgroundColor: "white" }}>{children}</Block>
      </Block>
    </Container>
  );
}
