import React from "react";
import { View } from "react-native";

export default function Container(props) {
  const { style } = props;
  const styles = [
    style,
    {
      flex: 1,
      backgroundColor: "white",
      width: "100%",
      maxWidth: 800,
      paddingLeft: 15,
      paddingRight: 15
    }
  ];
  return <View style={styles}>{props.children}</View>;
}
