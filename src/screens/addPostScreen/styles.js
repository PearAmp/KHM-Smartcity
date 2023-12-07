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
    // position: "relative",
    backgroundColor: colors.base,
    padding: 20,
    // justifyContent: "center",
    // alignItems: "center"
  },
  mockImg: {
    width:100,
    height: 100,
    borderRadius: 5
  },
  boxImg: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10
  },
  boxUpload: {
    marginLeft: 15,
    backgroundColor: colors.white,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width:100,
    height: 100,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.label
  },
  label: {
    fontFamily: fontFamily.Medium,
    fontSize: 12,
    color: colors.label,
    paddingTop: 5
  },
  icons: {
    width: 20,
    height: 20
  },
  close: {
    width: 20,
    height: 20,

  },
  showImg: {
    position: 'relative'
  },
  btnClose: {
    position: 'absolute',
    top: -5,
    zIndex: 999,
    right: -5
  },
  input: {
    height: 160,
    borderRadius: 10
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50
  },

});
