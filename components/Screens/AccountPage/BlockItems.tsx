import React from "react";
import { Text, Block } from "../../Atoms";
import { colors } from "../../Atoms/Constants/theme";
import AccountItems from "./AccountItems"
import { ScrollView } from "react-native";

export default function Items({title,master}) {
  return (
    <Block>
      <Block
        row
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <Text bold h3>
        {title}
        </Text>
        {master && <Text color={colors.primary}>+nouvelle liste</Text>}
      </Block>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <AccountItems />
        <AccountItems />
        <AccountItems />
        <AccountItems />
      </ScrollView>
    </Block>
  );
}
