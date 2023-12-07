import React, { Component } from "react";
import { Platform, StyleSheet, Dimensions } from "react-native";
import { fontFamily } from "../../constants/fonts";
import { colors } from "../../constants/colors";
const { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  vContainerPage: {
    width: width,
    height: height,
    // minHeight: '72%',
    position: "relative",
    backgroundColor: colors.base,
    padding: 20,
    // justifyContent: "center",
    // alignItems: "center"
  },
  input: {
    borderRadius: 10,
  },
  boxlike: {
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  icons: {
    width: 16,
    height: 16,
  },
  txtLike: {
    fontFamily: fontFamily.Regular,
    color: colors.label,
    paddingLeft: 15,
    fontSize: 16,
  },
  imgProfile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#4B87A0",
  },
  boxImg: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonStyle: {
    borderRadius: 10
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 30
  }
});
