import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { Block, Text } from "../../Atoms";
import Contains from "expo-constants";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../Atoms/Constants/theme";
import { Input } from "../../Moleculs";
import * as ImagePicker from "expo-image-picker";
import BlockImage from "../../Atoms/BlockImage";

export default function AddRecipe() {
  let [selectedIm, setSelectedIm] = useState([]);
  let openImagePicker = async () => {
    let permissionRes = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionRes.granted == false) {
      alert("Require permission");
      return;
    }
    let pickerRe = await ImagePicker.launchImageLibraryAsync();
    if (pickerRe.cancelled == true) {
      return;
    }
    console.log(selectedIm);
    setSelectedIm((selectedIm) => [...selectedIm, pickerRe.uri]);
  };
  const dl = (title) => {
    console.log(selectedIm);
    setSelectedIm((setSelectedIm) => {
      return setSelectedIm.filter(function (value) {
        return value != title;
      });
    });
  };
  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block style={{ padding: 25 }}>
          <Block
            style={{ marginTop: Contains.statusBarHeight, marginBottom: 25 }}
          >
            <Text h3>Ajouter Recette</Text>
            <Block
              style={{
                width: 250,
                height: 3,
                backgroundColor: "black",
              }}
            />
          </Block>

          <Block>
            <Text>Ajouter Photos et des Vidéos</Text>
            <TouchableWithoutFeedback onPress={openImagePicker}>
              <Block
                middle
                center
                style={{
                  width: 200,
                  borderRadius: 1,
                  position: "relative",
                  height: 200,
                  borderWidth: 2,
                  borderColor: colors.primary,
                  borderStyle: "dotted",
                  marginTop: 15,
                }}
              >
                <Feather color={colors.primary} name="plus" size={55} />
              </Block>
            </TouchableWithoutFeedback>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {selectedIm &&
                selectedIm.map((el) => (
                  <Block
                    key={el}
                    style={{ position: "relative", marginTop: 15 }}
                  >
                    <TouchableWithoutFeedback onPress={() => dl(el)}>
                      <Block style={{width:55,height:55,position: "absolute",}}>
                        <Feather
                          color={colors.red}
                          name="x"
                          size={10}
                          style={{ position: "absolute", width: 15 }}
                        />
                      </Block>
                    </TouchableWithoutFeedback>
                    <BlockImage
                      source={{ uri: el }}
                      style={{ width: 100, height: 100, margin: 10 }}
                    />
                  </Block>
                ))}
            </ScrollView>
            <Block>
              <Input
                placeholder="Pain de mais"
                label="Nom"
                border
                rounded
                style={{ borderColor: "gray", opacity: 0.5 }}
              />
              <Text h5 style={{ marginTop: 25 }}>
                INGREDIANTS
              </Text>
              <Block row style={{ flex: 1 }}>
                <Input
                  placeholder="Ingediant 1"
                  border
                  rounded
                  style={{
                    width: 220,
                    borderColor: "gray",
                    opacity: 0.5,
                  }}
                />
                <Input
                  placeholder="Ingrediant 2"
                  border
                  rounded
                  style={{ borderColor: "gray", opacity: 0.5, marginLeft: 5 }}
                />
              </Block>
              <Block center>
                <Text style={{ color: colors.primary, marginTop: 15 }}>
                  + Ajouter Ingrediants
                </Text>
              </Block>
            </Block>
          </Block>
        </Block>
      </ScrollView>
    </SafeAreaView>
  );
}
