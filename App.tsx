import * as React from "react";
import { Platform, StatusBar } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { NavigationContainer } from "@react-navigation/native";
import { createStore, StoreProvider } from "easy-peasy";
import store from "./stores/CombineStore";
import AppNavigator from "./components/Navigator/HomeNavigator/AppNavigator";

const Store = createStore(store);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://192.168.1.103:4000/",
  onError: ({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      console.log("Graphql error");
    }
    if (networkError) {
      console.log("Network Error");
    }
  },
});

interface Props {
  skipLoadingScreen?: boolean;
}

export default class App extends React.Component<Props> {
  public state = {
    isLoadingComplete: false,
  };

  public loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        "Rubik-Black": require("./assets/fonts/Rubik-Black.ttf"),
        "Rubik-BlackItalic": require("./assets/fonts/Rubik-BlackItalic.ttf"),
        "Rubik-Bold": require("./assets/fonts/Rubik-Bold.ttf"),
        "Rubik-BoldItalic": require("./assets/fonts/Rubik-BoldItalic.ttf"),
        "Rubik-Italic": require("./assets/fonts/Rubik-Italic.ttf"),
        "Rubik-Light": require("./assets/fonts/Rubik-Light.ttf"),
        "Rubik-LightItalic": require("./assets/fonts/Rubik-LightItalic.ttf"),
        "Rubik-Medium": require("./assets/fonts/Rubik-Medium.ttf"),
        "Rubik-MediumItalic": require("./assets/fonts/Rubik-MediumItalic.ttf"),
        "Rubik-Regular": require("./assets/fonts/Rubik-Regular.ttf"),
      }),
    ]);
  };

  public handleLoadingError = (error: Error) => {
    console.warn(error);
  };

  public handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  public render(): JSX.Element {
    const { isLoadingComplete } = this.state;
    const { skipLoadingScreen } = this.props;
    if (!isLoadingComplete && !skipLoadingScreen) {
      return (
        <AppLoading
          // @ts-ignore
          startAsync={this.loadResourcesAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
        />
      );
    }
    return (
      <NavigationContainer>
        <StoreProvider store={Store}>
          <ApolloProvider client={client}>
            {Platform.OS === "ios" && <StatusBar barStyle="default" />}
            <AppNavigator />
          </ApolloProvider>
        </StoreProvider>
      </NavigationContainer>
    );
  }
}
