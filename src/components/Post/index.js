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
  TouchableWithoutFeedback,
} from "react-native";
import { colors } from "../../constants/colors";
import { icons, moks } from "../../constants/images";
import { fontFamily } from "../../constants/fonts";
const { width, height } = Dimensions.get("window");
import Icon from "react-native-vector-icons/FontAwesome";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <View style={styles.box}>
        <View style={styles.head}>
          <Image source={moks.profile} style={styles.imgProfile} />
          <Text style={styles.txtName}>ใจดี ดีดีดี</Text>
        </View>
        <View style={styles.boxCenter}>
          <View style={styles.boximg}>
            <Image source={moks.kh} style={styles.imgPost} />
            <View style={styles.vflex}>
              <Image source={icons.map} style={styles.map} />
              <Text style={styles.txtlocate}>วัดล้านขวด</Text>
            </View>
          </View>
        </View>
        <Text style={styles.txtPost}>สวยสมชื่อ....................</Text>

        <View style={styles.like}>
          <Image source={this.props.iconheart} style={styles.icons} />
        </View>
      </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: 20,
  },
  imgProfile: {
    height: 50,
    width: 50,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: "#6A6666",
  },
  head: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  txtName: {
    fontFamily: fontFamily.Bold,
    fontSize: 16,
    paddingLeft: 20,
  },
  imgPost: {
    width: 250,
    height: 130,
    borderRadius: 10,
  },
  boximg: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingTop: 10,
  },
  boxCenter: {
    display: "flex",
    flexDirection: 'column',
    alignItems: 'center',
  },
  vflex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 3,
  },
  txtlocate: {
    color: "#6A6666",
    fontFamily: fontFamily.Medium,
    paddingLeft: 5,
  },
  like: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  icons: {
    width: 15,
    height: 15,
  },
  txtPost: {
    fontFamily: fontFamily.Regular,
    fontSize: 14,
    paddingTop: 10
  },
  map: {
    width: 15,
    height: 15
  }
});
