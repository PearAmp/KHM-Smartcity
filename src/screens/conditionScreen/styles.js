import React, { Component } from "react";
import { Platform, StyleSheet, Dimensions } from "react-native";
import { fontFamily } from "../../constants/fonts";
import { colors } from "../../constants/colors";
const { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  vContainerPage: {
    width: width,
    height: height *0.9,
    // minHeight: '72%',
    position: "relative",
    backgroundColor: colors.base,
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
    // justifyContent: "center",
    // alignItems: "center"
  },
  imgLogo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  img: {
    width: 216,
    height: 166,
  },
  discript: {
    color: colors.label,
    fontFamily: fontFamily.Regular,
    fontSize: 16,
    marginVertical: 10
  },
  rightTextStyle: {
    fontFamily: fontFamily.Medium,
    fontSize: 16
  },

});
