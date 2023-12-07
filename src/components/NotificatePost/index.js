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
  TouchableWithoutFeedback
} from "react-native";
import { fontFamily } from "../../constants/fonts";
import { colors } from "../../constants/colors";
import { icons, moks } from "../../constants/images";
const { width, height } = Dimensions.get("window");

export default class NotificatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.onPress}>
        <View style={styles.block}>
          <View style={styles.head}>
            <View style={styles.vleft}>
              <Image source={this.props.profile} style={styles.profile} />
              <Text style={styles.txtName}>{this.props.postName}</Text>
            </View>
            <Text style={styles.txtdiscript}>{this.props.activity}</Text>
          </View>
          <Text style={styles.txtpost}>{this.props.postDetail}</Text>
            <Text style={styles.txtTopic}>{this.props.topicPost}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    width: width * 0.9,
    borderBottomWidth: 1,
    borderBottomColor: colors.label,
    paddingVertical: 10
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#6A6666'
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  vleft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  txtName: {
    paddingLeft: 10,
    fontFamily: fontFamily.Medium,
    fontSize: 16
  },
  txtpost: {
    paddingLeft: 50,
    fontFamily: fontFamily.Regular
  },

  txtTopic: {
    textAlign: 'right',
    fontFamily: fontFamily.Regular,
    fontSize: 13,
    color: colors.label
  },
  txtdiscript: {
    color: colors.label,
    fontFamily: fontFamily.Regular
  },
});
