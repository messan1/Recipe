import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

import * as theme from './Constants/theme';

export default function Label(props) {
  const {
    blue,
    green,
    red,
    yellow,
    teal,
    purple,
    black,
    white,
    gray,
    color,
    style,
    height,
    width,
    border,
    children,
    ...data
  } = props;

  const labelStyles = [
    styles.label,
    color && { backgroundColor: color },
    blue && { backgroundColor: theme.colors.blue },
    green && { backgroundColor: theme.colors.green },
    red && { backgroundColor: theme.colors.red },
    yellow && { backgroundColor: theme.colors.yellow },
    teal && { backgroundColor: theme.colors.teal },
    purple && { backgroundColor: theme.colors.purple },
    black && { backgroundColor: theme.colors.black },
    white && { backgroundColor: theme.colors.white },
    gray && { backgroundColor: theme.colors.gray },
    width && {width:width},
    height && {height:height},
    border && styles.border,
    style,
  ];

  return (
    <View style={labelStyles} {...data}>
      {children}
    </View>
  )

}

const styles = StyleSheet.create({
  label: {
    margin: 4,
    width:20,
    height: 20,
    padding:1,
    borderRadius: 12,
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
    backgroundColor:"white"
  },
  border:{
    borderWidth:1,
    borderColor:theme.colors.gray
  }
});
