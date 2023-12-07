import React, { Component } from "react";
import {
  SafeAreaView,
  Platform,
  StatusBar,
  Text,
  TextInput,
} from "react-native";
import "react-native-gesture-handler";
import GlobalFont from "react-native-global-font";

import SplashScreen from "react-native-splash-screen";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { I18nextProvider, initReactI18next } from "react-i18next";
import i18next from "i18next";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

/* Languages */
import thai from "./languages/thai.json";
import english from "./languages/english.json";

/* Contants */
import { fontFamily } from "./constants/fonts";
import { colors } from "./constants/colors";
import RegisterStackScreen from "./navigations/registerStackScreen";
import TopicStackScreen from "./navigations/topicStackScreen";
import MainTabStackScreen from "./navigations/maintabStackScreen";
import PostStackScreen from "./navigations/postStackScreen";
import ProfileStackScreen from "./navigations/profileStackScreen";

/* Navigations */

const languageDetectorPlugin = {
  type: "languageDetector",
  async: true,
  init: () => {},
  detect: async function (callback) {
    try {
      //get stored language from Async storage
      await AsyncStorage.getItem("lang_Key").then((language) => {
        if (language) {
          //if language was stored before, use this language in the app
          console.log("language : ", language);
          return callback(language);
        } else {
          //if language was not stored yet, use device's locale
          return callback("th");
        }
      });
    } catch (error) {
      console.log("Error reading language", error);
    }
  },
  cacheUserLanguage: async function (language) {
    try {
      //save a user's language choice in Async storage
      await AsyncStorage.setItem("lang_Key", language);
    } catch (error) {}
  },
};

i18next
  .use(initReactI18next)
  .use(languageDetectorPlugin)
  .init({
    compatibilityJSON: "v3",
    fallbackLng: "th",
    resources: {
      en: english,
      th: thai,
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
const RootStack = createStackNavigator();

export default class App extends Component<props> {
  constructor() {
    super();
    this.state = {
      isReady: false,
      isAuth: false,
    };
  }
  async componentDidMount() {
    GlobalFont.applyGlobal(fontFamily.defaultFont);
    SplashScreen.hide();
    StatusBar.setBarStyle("light-content");
    StatusBar.setBackgroundColor(colors.base);
    StatusBar.setHidden(false);
    Text.defaultProps = {
      ...(Text.defaultProps || {}),
      allowFontScaling: false,
    };
    TextInput.defaultProps = {
      ...(TextInput.defaultProps || {}),
      allowFontScaling: false,
    };
  }

  render() {
    return (
      <I18nextProvider i18n={i18next}>
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.base }}>
          <NavigationContainer>
            <RootStack.Navigator
              initialRouteName="LoadingStack"
              screenOptions={{
                headerShown: false,
              }}
            >
              <RootStack.Screen
                name="RegisStack"
                component={RegisterStackScreen}
              />
               <RootStack.Screen
                name="TopicStack"
                component={TopicStackScreen}
              />
               <RootStack.Screen
                name="MainTabStack"
                component={MainTabStackScreen}
              />
                <RootStack.Screen
                name="PostStack"
                component={PostStackScreen}
              />
                <RootStack.Screen
                name="ProfileStack"
                component={ProfileStackScreen}
              />
            </RootStack.Navigator>
            <Toast ref={(ref) => Toast.setRef(ref)} />
          </NavigationContainer>
        </SafeAreaView>
      </I18nextProvider>
    );
  }
}
