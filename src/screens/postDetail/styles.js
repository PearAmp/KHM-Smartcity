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
  profileimg: {
    height: 50,
    width: 50,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: "#6A6666",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icons: {
    width: 15,
    height: 15,
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  boxName: {
    paddingLeft: 20,
  },
  postName: {
    fontFamily: fontFamily.Medium,
  },
  topic: {
    color: colors.label,
    fontFamily: fontFamily.Regular,
    fontSize: 12,
  },
  txtDetail: {
    fontFamily: fontFamily.Regular,
    paddingBottom: 20,
  },
  vflex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  imgSmall: {
    width: 160,
    height: 100,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 20,
  },
  timePost: {},
  txttime: {
    fontFamily: fontFamily.Regular,
    fontSize: 12,
    color: colors.label,
    textAlign: "right",
    paddingTop: 5,
  },
});
