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
  feed,
  TouchableWithoutFeedback,
} from "react-native";
import { fontFamily } from "../../constants/fonts";
import { colors } from "../../constants/colors";
const { width, height } = Dimensions.get("window");

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <View style={[styles.button, this.props.styleBtn]}>
        <Text style={styles.lebel}>{this.props.btnlabel}</Text>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4BB9F7",
    height: 37,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: width * 0.4,
  },
  lebel: {
    fontSize: 18,
    fontFamily: fontFamily.SemiBold,
    color: colors.white,
  },
});
