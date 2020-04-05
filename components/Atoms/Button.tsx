import React from "react";
import { Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import * as theme from "./Constants/theme";

const { width } = Dimensions.get("window");

export default function Button (props) {
  const { full, opacity, isSending,style,children ,...data } = props;
  const buttonStyle = [styles.button, style, full && styles.full];
  return (
    <TouchableOpacity
    disabled={isSending}
      TouchableOpacity={opacity || 0.9}
      style={buttonStyle}
      {...data}
    >
      {children}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
      backgroundColor:theme.colors.yellow,
      borderRadius:4,
      height:44,
      alignItems:"center",
      justifyContent:"center",
      paddingVertical:11
  },
  full:{
      width:width-50
  }
});
