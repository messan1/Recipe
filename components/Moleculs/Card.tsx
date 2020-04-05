import React from "react";
import { Text, Block } from "../Atoms";
import * as theme from "../Atoms/Constants/theme";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function Card(props) {
  const { shadow,padding,border, radius, style, children, ...data } = props;
  const cardStyles = [
    styles.card,
    shadow && styles.shadow,
    border && styles.border,
    radius && styles.radius,
    padding && styles.padding,
    style
  ];
  function renderHeader() {
    const { title } = props;
    if (!title) return null;
    return (
      <Block row space="between" style={styles.header}>
        <Text caption>{title}</Text>
        <TouchableOpacity>
          <Text>Icon</Text>
        </TouchableOpacity>
      </Block>
    );
  }
  return (
    <Block style={cardStyles} {...data}>
      {renderHeader()}
      {children}
    </Block>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: theme.colors.white
  },
  padding:{
    padding: 25,
  },
  header: {
    paddingBottom: 24
  },
  border: {
    borderColor: theme.colors.card,
    borderWidth: 1
  },
  radius:{
      borderRadius:10,
      overflow:"hidden"
  },
  shadow: {
    shadowColor: theme.colors.shadow,
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    elevation: 2
  }
});
