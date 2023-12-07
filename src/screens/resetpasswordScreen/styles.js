import React, { Component } from "react";
import { Platform, StyleSheet, Dimensions } from "react-native";
import { fontFamily } from "../../constants/fonts";
import { colors } from "../../constants/colors";
const { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  vContainerPage: {
    width: width,
    minHeight: height,
    position: "relative",
    backgroundColor: colors.base,
    padding: 20,
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
  txtLogin: {
    fontFamily: fontFamily.Bold,
    fontSize: "30",
    textAlign: "center",
    paddingVertical: 20,
  },
  styleBtn: {
    width: width * 0.9,
    marginTop: 30,
  },
});
