import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { useStoreActions } from "../../../stores/hooks";
import { useIsFocused } from "@react-navigation/native";
import { HeaderSplit } from "../../Moleculs";

export default function Home(props) {
  const isFocused = useIsFocused();
  const isItVisite = useStoreActions(state => state.AppAction.visiteAuthPage);
  if (isFocused) {
    isItVisite(true);
  }
  function handlerAuthPage() {
    isItVisite(false);
    props.navigation.push("AuthNavigator");
  }
  return (
      <HeaderSplit>
        <Text>ohj</Text>
      </HeaderSplit>
    
  );
}
