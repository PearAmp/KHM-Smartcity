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
  TouchableOpacity,
  Image,
} from "react-native";
import { fontFamily } from "../../constants/fonts";
import { colors } from "../../constants/colors";
import { topicicons } from "../../constants/images";
const { width, height } = Dimensions.get("window");

export default class BlockItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <TouchableOpacity>
        <View style={styles.block}>
          <Image source={this.props.topicImg} style={styles.icons} />
          <Text style={styles.txtlabel}>{this.props.topicName}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: colors.white,
    padding: 10,
    width: 80,
    height: 80,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'center'
  },
  icons: {
    width: 30,
    height: 30,
  },
  txtlabel: {
    fontFamily: fontFamily.Medium,
    paddingTop: 3,
    fontSize: 12
  },
});
