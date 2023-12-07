import React, { Component } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  Image,
} from "react-native";
import { colors } from "../../../constants/colors";
import { iconlogin } from "../../../constants/images";

export default class InputPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.input}>
        <TextInput placeholder={this.props.placeholder}  />
        <Image source={iconlogin.key} style={styles.icons} />
        <Image source={iconlogin.eyes} style={styles.iconseyes} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.white,
    position: "relative",
    paddingHorizontal: 35,
    borderRadius: 50,
    height: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  icons: {
    position: "absolute",
    left: 0,
    marginHorizontal: 15,
    height: 18,
    width: 18
  },
  iconseyes: {
    position: "absolute",
    right: 0,
    marginRight: 15,
  },
});
