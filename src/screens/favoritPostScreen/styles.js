import React, { Component } from "react";
import { Platform, StyleSheet, Dimensions } from "react-native";
import { fontFamily } from "../../constants/fonts";
import { colors } from "../../constants/colors";
const { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  vContainerPage: {
    width: width,
    height: height * 0.9,
    // minHeight: '72%',
    position: "relative",
    backgroundColor: colors.base,
    padding: 20,
    // justifyContent: "center",
    // alignItems: "center"
  },
});
