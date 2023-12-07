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
const { width, height } = Dimensions.get("window");

export default class TopicBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.topic}>
        <View style={styles.box}>
          <Image source={this.props.topicimg} style={styles.img} />
        </View>
        <View>
          <Text style={styles.label}>{this.props.topicName}</Text>
        </View>
      </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.white,
    borderRadius: 100,
    width: 70,
    height: 70,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#4B87A0",
  },
  label: {
    paddingTop: 3,
    fontFamily: fontFamily.SemiBold,
    fontSize: 14,
    textAlign: "center",
  },
  topic: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 10
  },
});
