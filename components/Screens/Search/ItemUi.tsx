import React, { useState } from "react";
import { Block,Text } from "../../Atoms";
import { TouchableWithoutFeedback } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../Atoms/Constants/theme";

export default function ItemUi({title}) {
  const [check ,setCheck] = useState(false)
  const checkIt = (title: String) => {
    setCheck(!check)
  };

  return (
    <TouchableWithoutFeedback onPress={() => checkIt(title)}>
      <Block
        row
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 15,
          marginBottom: 15,
        }}
      >
        <Text>{title}</Text>
        {check && <Feather name="check" size={24} color={colors.primary} />}
      </Block>
    </TouchableWithoutFeedback>
  );
}
