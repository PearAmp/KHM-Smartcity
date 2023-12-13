import React, { Component } from "react";
import { Platform, StyleSheet, Dimensions } from "react-native";
import { fontFamily } from "../../../constants/fonts";
import { colors } from "../../../constants/colors";
const { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  vContainerPage: {
    width: width,
    height: height,
    // minHeight: '72%',
    position: "relative",
    backgroundColor: colors.base,
    padding: 20
    // justifyContent: "center",
    // alignItems: "center"
  },
  arrow: {
    width: 20,
    height: 20
  },
  txtrender: {
    fontFamily: fontFamily.Medium
  },
  txtcontent: {
    fontFamily: fontFamily.Regular,
    fontSize: 14,
    color: colors.label,
  },
});
