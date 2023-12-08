import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import EditProfileScreen from "../screens/editProfileScreen";
import FavoritPostScreen from "../screens/favoritPostScreen";
import SettingScreen from "../screens/setting/settingScreen";

const Stack = createStackNavigator();

export default function ProfileStackScreen() {
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
        name="Editprofile"
        component={EditProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FavoritPost"
        component={FavoritPostScreen}
        options={{
          headerShown: false,
        }}
      />
     
    </Stack.Navigator>
  );
}
