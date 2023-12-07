import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "../screens/registerScreen";
import LoginScreen from "../screens/loginScreen";
import ConditionScreen from "../screens/conditionScreen";
import ResetpasswordScreen from "../screens/resetpasswordScreen";

const Stack = createStackNavigator();

export default function RegisterStackScreen() {
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
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Condition"
        component={ConditionScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Reset"
        component={ResetpasswordScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
