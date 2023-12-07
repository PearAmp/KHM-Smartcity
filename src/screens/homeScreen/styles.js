import React, { Component } from "react";
import { Platform, StyleSheet, Dimensions } from "react-native";
import { fontFamily } from "../../constants/fonts";
import { colors } from "../../constants/colors";
const { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  vContainerPage: {
    width: width,
    height: '100%',
    // minHeight: '72%',
    position: "relative",
    backgroundColor: colors.base,
    // padding: 20,
    // justifyContent: "center",
    // alignItems: "center"
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  logos: {
    width: 120,
    height: 50,
  },
  icons: {
    width: 20,
    height: 20
  },
  imgHeader: {
    marginVertical: 20
  },
  itemSlide: {
    width: 8,
    height: 8,
    backgroundColor: '#4B87A0',
    borderRadius: 50,
    marginRight: 5
  },
  vflex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20
  },
  boxPost: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
});
