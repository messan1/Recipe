import React from "react";
import { ToastAndroid } from "react-native";

export default function Notifcation(message) {
  ToastAndroid.show(message, ToastAndroid.LONG);
}
