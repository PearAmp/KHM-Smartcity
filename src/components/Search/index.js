import React, { Component } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { icons } from "../../constants/images";
import { colors } from "../../constants/colors";

const { width, height } = Dimensions.get("window");
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  onSubmitEditing() {}

  render() {
    return (
      <View style={styles.search}>
        <TextInput
          style={[styles.input, this.props.input]}
          placeholder="ค้นหาโพสต์"
          keyboardType={this.props.keyboardType}
        />
        <Image source={icons.search} style={styles.icons} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  search: {
    width: width * 0.9,
  },
  input: {
    position: "relative",
    height: 40,
    marginVertical: 10,
    borderRadius: 20,
    backgroundColor: colors.white,
    paddingHorizontal: 35,
  },
  icons: {
    position: "absolute",
    left: 10,
    bottom: 22,
    width: 17,
    height: 17,
  },
});
