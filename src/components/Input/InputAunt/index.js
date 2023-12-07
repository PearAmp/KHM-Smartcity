import React, { Component } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
} from "react-native";
import { colors } from "../../../constants/colors";
import { fontFamily } from "../../../constants/fonts";

export default class InputAunt extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View
        style={{
          marginVertical: 5,
        }}
      >
        <Text style={[styles.label, this.props.inputlabel]}>{this.props.label}</Text>
        <View style={[styles.input, this.props.input]}>
          <TextInput placeholder={this.props.placeholder}
          editable={this.props.editable}
          keyboardType={this.props.keyboardType}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    paddingLeft: 10,
    fontFamily: fontFamily.Regular,
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: 50,
    paddingHorizontal: 10,
  },
  label: {
    fontFamily: fontFamily.Regular,
    fontSize: 16,
    paddingLeft: 10,
  },
});
