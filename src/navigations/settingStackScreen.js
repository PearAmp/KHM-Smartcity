import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingScreen from "../screens/setting/settingScreen";
import AboutScreen from "../screens/setting/aboutScreen";
import LanguageScreen from "../screens/setting/languageScreen";
import SupportScreen from "../screens/setting/supportScreen";


const Stack = createStackNavigator();

export default function SettingStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        gesturesEnabled: false,
        headerStyle: {
          height: 62,
        },
      }}
    >
      <Stack.Screen
        name="SettingPage"
        component={SettingScreen}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="Language"
        component={LanguageScreen}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
        name="Support"
        component={SupportScreen}
        options={{
          headerShown: false,
        }}
      />
    
    </Stack.Navigator>
  );
}
