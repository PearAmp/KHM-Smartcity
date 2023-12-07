import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PostDetail from "../screens/postDetail";

const Stack = createStackNavigator();

export default function PostStackScreen() {
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
        name="PostScreen"
        component={PostDetail}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
