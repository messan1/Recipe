import React, { useState } from "react";

import { KeyboardAvoidingView, Dimensions, AsyncStorage } from "react-native";

import { Block, Text, Button, Notification } from "../../Atoms";

import { InputAuth } from "../../Moleculs";

//Query
import { SignupMutation } from "../../../graphql/Auth";
//state
import {useStoreActions} from "../../../stores/hooks";

import { useMutation } from "@apollo/react-hooks";
import { colors } from "../../Atoms/Constants/theme";
import { Formik } from "formik";
import * as Yup from "yup";

const { height } = Dimensions.get("window");

export default function Signup(props) {
  const [LaunchMutate] = useMutation(SignupMutation);
  const [isSending, setIsSending] = useState(false);
  const isItVisite = useStoreActions(state=>state.AppAction.visiteAuthPage)
 
  //Validating form
  const FormValidate = Yup.object().shape({
    email: Yup.string().email("Email invalid"),
    password: Yup.string().min(6, "Entrez au moins 6 caractères")
  });

  async function SignupMutate(data) {
    setIsSending(true);
    try {
      const response = await LaunchMutate({ variables: data });
      const { token, error } = response.data.signup;
      if (token) {
        await AsyncStorage.setItem("@hebergeshopy/token", token);
        setIsSending(false);
        Notification("Inscription reuissie");
        isItVisite(true)
        props.navigation.goBack()

      }
    } catch (e) {
      setIsSending(false);
      Notification("l'adresse email est déjà utilisé");
    }
  }

  return (
    <KeyboardAvoidingView
      enabled
      behavior="padding"
      style={{ flex: 1, backgroundColor: "white",paddingTop: 35  }}
      keyboardVerticalOffset={height * 0.2}
    >
      <Formik
        validationSchema={FormValidate}
        onSubmit={values => SignupMutate(values)}
        initialValues={{
          email: "",
          password: ""
        }}
      >
        {({ errors, handleSubmit, handleChange, values }) => (
          <Block center >
            <Block center middle>
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
            <Button isSending={isSending} full onPress={handleSubmit}>
              {isSending ? (
                <Text color="black" bold>
                  {" "}
                  Chargement
                </Text>
              ) : (
                <Text color="black" bold>
                  Inscription
                </Text>
              )}
            </Button>
          </Block>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
}
