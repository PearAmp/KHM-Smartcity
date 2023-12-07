import React, { Component } from "react";
import {
  SafeAreaView,
  Platform,
  StatusBar,
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { colors } from "../constants/colors";
import { fontFamily } from "../constants/fonts";
import { tabmenu } from "../constants/images";

//screen
import HomeScreen from "../screens/homeScreen";
import SearchScreen from "../screens/searchScreen";
import AddPostScreen from "../screens/addPostScreen";
import NotificationScreen from "../screens/notificationScreen";
import ProfileScreen from "../screens/profileScreen";

const MainTab = createBottomTabNavigator();

export default function MainTabStackScreen() {
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: Platform.OS === "ios" ? 55 : 55,
          position: "relative",
          backgroundColor: colors.white,
          borderTopColor: "transparent",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
        tabBarBadgeStyle: {
            backgroundColor: 'transparent'
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarItemStyle: {
          marginBottom: 0,
          overflow: "visible",
          paddingLeft: 0,
          paddingRight: 0,
          marginLeft: 0,
          marginRight: 0,
          borderTopColor: "#00000040",
          borderTopWidth: 0.1,
          paddingTop: 10,
          paddingBottom: 10,
        },
        activeTintColor: '#4BB9F7',
        activeBackgroundColor: "transparent",
        keyboardHidesTabBar: true,
      }}
    >
      <MainTab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.vTabMenu}>
              <Image source={tabmenu.home} style={styles.imageIcon} />
              <Text style={focused ? styles.txtTabActive : styles.txtTab}>
                หน้าหลัก
              </Text>
            </View>
          ),
        }}
      />
      <MainTab.Screen
        name="SearchTab"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.vTabMenu}>
              <Image source={tabmenu.search} style={styles.imageIcon} />
              <Text style={focused ? styles.txtTabActive : styles.txtTab}>
                ค้นหา
              </Text>
            </View>
          ),
        }}
      />
      <MainTab.Screen
        name="AddPostTab"
        component={AddPostScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.vTabMenu}>
              <Image source={tabmenu.plus} style={styles.imageIcon} />
              <Text style={focused ? styles.txtTabActive : styles.txtTab}>
                เพิ่มโพส
              </Text>
            </View>
          ),
        }}
      />
      <MainTab.Screen
        name="NotificationTab"
        component={NotificationScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.vTabMenu}>
              <Image source={tabmenu.warn} style={styles.imageIcon} />
              <Text style={focused ? styles.txtTabActive : styles.txtTab}>
                แจ้งเตือน
              </Text>
            </View>
          ),
        }}
      />
      <MainTab.Screen
        name="ProfileTab"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.vTabMenu}>
              <Image source={tabmenu.profile} style={styles.imageIcon} />
              <Text style={focused ? styles.txtTabActive : styles.txtTab}>
                โปรไฟล์
              </Text>
            </View>
          ),
        }}
      />
    </MainTab.Navigator>
  );
}

const styles = StyleSheet.create({
  vTabMenu: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  imageIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginBottom: 4,
  },
  txtTab: {
    fontFamily: fontFamily.Medium,
    fontSize: 13,
    color: colors.text,
  },
  txtTabActive: {
    fontFamily: fontFamily.SemiBold,
    color: '#4BB9F7',
    fontSize: 13,
  },
});
