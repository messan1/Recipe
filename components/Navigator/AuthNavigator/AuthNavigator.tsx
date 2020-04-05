import React from "react";
import {TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Login from "../../Screens/Auth/Login";
import Signup from "../../Screens/Auth/Signup";
import { sizes, colors } from "../../Atoms/Constants/theme";
import { Block, Text, SafeArea, Container } from "../../Atoms";
import { EvilIcons } from "@expo/vector-icons";
import {useStoreActions} from "../../../stores/hooks";

const Tab = createMaterialTopTabNavigator();
export default function Navigation(props) {
  const isItVisite = useStoreActions(state=>state.AppAction.visiteAuthPage)
  function CloseAuthPage(){
    props.navigation.goBack()
    isItVisite(true)
  }
  return (
    <SafeArea>
      <Container>
        <Block row right>
          <TouchableOpacity onPress={CloseAuthPage}>
            <EvilIcons name="close" size={32} />
          </TouchableOpacity>
        </Block>
        <Block middle center>
          <Text h2 style={{ paddingTop: 15, marginBottom: 30 }}>
            Infnity
          </Text>
        </Block>
        <Tab.Navigator
          initialRouteName="Login"
          tabBarOptions={{
            activeTintColor: colors.black,
            inactiveTintColor: colors.black3,
            style: {
              elevation: 0
            },
            indicatorStyle: {
              height: 5,
              backgroundColor: colors.yellow,
              marginTop: 25
            },
            labelStyle: {
              fontSize: sizes.h4,
              fontWeight: "bold"
            }
          }}
        >
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Signup" component={Signup} />
        </Tab.Navigator>
      </Container>
    </SafeArea>
  );
}
