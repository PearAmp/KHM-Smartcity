import React, { Component } from "react";
import { Platform, StyleSheet, Dimensions } from "react-native";
import { fontFamily } from "../../constants/fonts";
import { colors } from "../../constants/colors";
const { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  vContainerPage: {
    width: width,
    height: "100%",
    // minHeight: '72%',
    position: "relative",
    backgroundColor: colors.base,
    paddingHorizontal: 20,
    // justifyContent: "center",
    // alignItems: "center"
  },
  boxPost: {
    marginBottom: 100,
  },
});
