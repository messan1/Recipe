import React from "react";
import Block from "./Block";

export default function SafeArea(props) {
  return (
    <Block style={{ flex: 1, backgroundColor: "white", paddingTop: 40 }}>
      {props.children}
    </Block>
  );
}
