import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TopicScreen from "../screens/topicScreen";

const Stack = createStackNavigator();

export default function TopicStackScreen() {
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
        name="Topic"
        component={TopicScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
