import React from "react";
import { Dimensions, View, StyleSheet, TextInput } from "react-native";
import * as theme from "../Atoms/Constants/theme";
import Text from "../Atoms/Text";
import { Block } from "../Atoms";
import { colors } from "../Atoms/Constants/theme";
const { width } = Dimensions.get("window");

let error;
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
    error,
    ...data
  } = props;
  const inputStyle = [
    styles.input,
    full && { width: width - full },
    !icon && border && styles.border,
    error && { borderColor: theme.colors.red },
    style
  ];
  const inputIconStyle = [styles.inputIconContainer, styles.border, style];
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
        <Block>
          <TextInput
            keyboardType={inputType}
            style={inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            {...data}
          />
          {error && <Text style={{ fontSize: 11, color: colors.red,marginBottom:15 }}>{error}</Text>}
        </Block>
      );
    }
    return (
      <Block row center middle style={inputIconStyle}>
        <Text>icon</Text>
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
      <View style={styles.labelContainer}></View>
      {RenderIcon()}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    paddingVertical: 11,
    paddingHorizontal: 16,
    fontSize: theme.sizes.font,
    color: theme.colors.black
  },
  inputIconContainer: {
    paddingLeft: 15
  },
  border: {
    borderColor: theme.colors.yellow,
    borderBottomWidth: 1,
    borderRadius: 5
  },
  label: {
    textTransform: "uppercase"
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
