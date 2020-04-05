import React from "react";
import { View, StyleSheet } from "react-native";

export default function Block(props) {
  const {
    flex,
    middle,
    center,
    space,
    row,
    left,
    right,
    block,
    style,
    children,
    ...data
  } = props;
  const blockStyle = [
    block && styles.block,
    flex && { flex },
    middle && styles.middle,
    center && styles.center,
    space && { justifyContent: `space-${space}` },
    left && styles.left,
    right && styles.right,
    row && styles.row,
    style
  ];

  return (
    <View style={blockStyle} {...data}>
      {children}
    </View>
  );
}
const styles = StyleSheet.create({
  block: {
    flex: 1,
  },

  center: {
    alignItems: "center"
  },
  middle: {
    justifyContent: "center"
  },
  right: {
    justifyContent: "flex-end"
  },
  row: {
    flexDirection: "row"
  },
  left: {
    justifyContent: "flex-start"
  }
});
