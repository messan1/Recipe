import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

export default function BlockImage(props) {
  const {
    flex,
    middle,
    center,
    space,
    row,
    img,
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
    <ImageBackground  style={blockStyle} {...data}>
      {children}
    </ImageBackground>
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
