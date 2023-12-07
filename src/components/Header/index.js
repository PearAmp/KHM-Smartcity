import React, { Component } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { fontFamily } from "../../constants/fonts";
import { colors } from "../../constants/colors";
import { icons } from "../../constants/images";
const { width, height } = Dimensions.get("window");

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.head}>
        <TouchableOpacity onPress={this.props.onPressBack}>
          <Image source={icons.arrow} style={[styles.arrow, this.props.arrow]} />
        </TouchableOpacity>
        <Text style={styles.label}>{this.props.title}</Text>
        <View></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  head: {
    backgroundColor: "#4B87A0",
    height: 60,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  label: {
    color: colors.white,
    textAlign: "center",
    fontFamily: fontFamily.SemiBold,
    fontSize: 20,
  },
  arrow: {
    width: 25,
    height: 25,
  },
});
