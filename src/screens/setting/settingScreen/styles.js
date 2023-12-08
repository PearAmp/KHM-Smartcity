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
    backgroundColor: colors.white,
    // paddingHorizontal: 20
    // justifyContent: "center",
    // alignItems: "center"
  },
boxItem: {
  borderBottomWidth: 1,
  borderBottomColor: colors.label,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 10,
  paddingVertical: 20
},
left: {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
},
txtlabel: {
  fontFamily: fontFamily.Regular,
  fontSize: 16,
  color: colors.label
},
icons: {
  width: 20,
  height: 20
},
txtTitle: {
  fontFamily: fontFamily.Medium,
  fontSize: 16,
  paddingLeft: 10
},

});
