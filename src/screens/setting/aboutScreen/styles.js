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
    paddingHorizontal: 20
    // justifyContent: "center",
    // alignItems: "center"
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width *0.9,
    paddingVertical: 10
  },
  txtlabel: {
    fontFamily: fontFamily.Regular,
    fontSize: 16
  },
  txtvertion: {
    color: colors.label,
    fontFamily: fontFamily.Regular
  },
  icons:{
    width: 20,
    height: 20
  },
});
