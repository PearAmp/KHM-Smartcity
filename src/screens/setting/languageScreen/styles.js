import React, { Component } from "react";
import { Platform, StyleSheet, Dimensions } from "react-native";
import { fontFamily } from "../../../constants/fonts";
import { colors } from "../../../constants/colors";
const { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  vContainerPage: {
    width: width,
    height: '100%',
    // minHeight: '72%',
    position: "relative",
    backgroundColor: colors.base,

    // justifyContent: "center",
    // alignItems: "center"
  },
  boxlang: {
    borderBottomWidth: 0.5,
    borderBottomColor: colors.label,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  boxradio: {
    backgroundColor: 'transparant',
    borderWidth: 0
  }

});
