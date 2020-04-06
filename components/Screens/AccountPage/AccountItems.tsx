import React from "react";
import { Feather } from "@expo/vector-icons";

import { Text, Block } from "../../Atoms";
import BlockImage from "../../Atoms/BlockImage";

export default function Items() {
  return (
    <BlockImage
      source={require("../../../assets/eat5.png")}
      style={{ width: 150, height: 150, position: "relative",marginRight:10 }}
    >
      <Block row right style={{ margin: 10 }}>
        <Feather name="edit-2" color="white" size={24} />
      </Block>
      <Block style={{ position: "absolute", bottom: 0 }}>
        <Text bold left color={"white"} style={{ margin: 10 }}>
          Diners Favories
        </Text>
      </Block>
    </BlockImage>
  );
}
