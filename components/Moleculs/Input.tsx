import React from "react";
import { Dimensions, View, StyleSheet, TextInput } from "react-native";
import * as theme from "../Atoms/Constants/theme";
import Text from "../Atoms/Text";
import { Block } from "../Atoms";
const { width } = Dimensions.get("window");

export default function Input(props) {
  const {
    label,
    full,
    rightlabel,
    number,
    phone,
    email,
    border,
    bgColor,
    password,
    icon,
    style,
    ...data
  } = props;
  const inputStyle = [
    styles.input,
    full && {width:width-full},
    !icon && border && styles.border,
    !icon && bgColor && styles.bgColor,
    style
  ];
  const inputIconStyle = [
    styles.inputIconContainer,
    styles.border,
    styles.bgColor,
    style
  ];
  const inputType = email
    ? "email-address"
    : number
    ? "numeric"
    : phone
    ? "phone-pad"
    : "default";

  function RenderIcon() {
    const { icon } = props;
    if (!icon) {
      return (
        <TextInput
          keyboardType={inputType}
          style={inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          {...data}
        />
      );
    }
    return (
      <Block row center middle style={inputIconStyle}>
        <Text>{icon}</Text>
        <TextInput
          style={inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          {...data}
        />
      </Block>
    );
  }
  return (
    <View>
      <View style={styles.labelContainer}>
        <Text h5 style={styles.label}>
          {label}
        </Text>
        <Text>{rightlabel}</Text>
      </View>
      {RenderIcon()}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 45,
    paddingVertical: 11,
    paddingHorizontal: 16,
    fontSize: theme.sizes.font,
    color: theme.colors.black
  },
  inputIconContainer: {
   paddingLeft:15
  },
  border: {
    borderColor: theme.colors.border,
    borderWidth: 1,
    borderRadius: 5
  },
  bgColor: {
    backgroundColor: theme.colors.input
  },
  label: {
    textTransform: "uppercase",
    marginTop:15
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8
  },

});
