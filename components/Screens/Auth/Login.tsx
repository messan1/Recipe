import React, { useState } from "react";

import {
  KeyboardAvoidingView,
  TouchableOpacity,
  Dimensions,
  AsyncStorage
} from "react-native";

import { Block, Text, Button, Notification } from "../../Atoms";

import { InputAuth } from "../../Moleculs";

//Query
import { LoginMutation } from "../../../graphql/Auth";

//state
import {useStoreActions} from "../../../stores/hooks";

import { useMutation } from "@apollo/react-hooks";
import { colors } from "../../Atoms/Constants/theme";
import { Formik } from "formik";
import * as Yup from "yup";

const { height } = Dimensions.get("window");

export default function Login(props) {
  const [LaunchMutate] = useMutation(LoginMutation);
  const [isSending, setIsSending] = useState(false);
  const isItVisite = useStoreActions(state=>state.AppAction.visiteAuthPage)
  //Validating form
  const FormValidate = Yup.object().shape({
    email: Yup.string().email("Email invalid"),
    password: Yup.string().min(6, "Entrez au moins 6 caractères")
  });

  async function LoginMutate(data) {
    try {
      setIsSending(true);
      const response = await LaunchMutate({ variables: data });
      const { token, error } = response.data.login;
      if (token) {
        await AsyncStorage.setItem("@hebergeshopy/token", token);
        setIsSending(false);
        Notification("Authentification reuissie");
        isItVisite(true)
        props.navigation.goBack()
      } else {
        setIsSending(false);
        Notification(
          "Une error lors de votre connexion vérifié votre Email ou mot de passe"
        );
      }
    } catch (error) {
      setIsSending(false);
      Notification(
        "Une error lors de votre connexion vérifié votre connexion Internet"
      );
    }
  }

  return (
    <KeyboardAvoidingView
      enabled
      behavior="padding"
      style={{ flex: 1, backgroundColor: "white", paddingTop: 35 }}
      keyboardVerticalOffset={height * 0.2}
    >
      <Formik
        validationSchema={FormValidate}
        onSubmit={values => LoginMutate(values)}
        initialValues={{
          email: "",
          password: ""
        }}
      >
        {({
          errors,
          touched,
          handleReset,
          isSubmitting,
          isValid,
          handleSubmit,
          handleChange,
          values
        }) => (
          <Block center>
            <Block center >
              <InputAuth
                full={50}
                border
                bgColor
                email
                label="Email"
                style={{ marginBottom: 25 }}
                placeholder="Adresse Email"
                placeholderTextColor={colors.gray}
                value={values.email}
                onChangeText={handleChange("email")}
                error={errors.email}
              />
              <InputAuth
                full={50}
                border
                bgColor
                secureTextEntry
                label="Password"
                style={{ marginBottom: 25 }}
                placeholder="Mot de passe"
                placeholderTextColor={colors.gray}
                value={values.password}
                onChangeText={handleChange("password")}
                error={errors.password}
              />
            </Block>
            <Block  row right style={{width:"100%" ,marginBottom: 20, marginRight: 10 }}>
              <TouchableOpacity onPress={() => console.log("ok")}>
                <Text style={{ fontSize: 12 }}>Mot de passe oublié?</Text>
              </TouchableOpacity>
            </Block>
            <Button isSending={isSending} full onPress={handleSubmit}>
              {isSending ? (
                <Text color="black" bold>
                  {" "}
                  Chargement
                </Text>
              ) : (
                <Text color="black" bold>
                  Connexion
                </Text>
              )}
            </Button>
          </Block>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
}
