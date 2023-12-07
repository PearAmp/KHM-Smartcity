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
} from "react-native";

//import { TouchableOpacity } from "react-native-gesture-handler"
import { fontFamily } from "../../constants/fonts";
import SelectDropdown from "react-native-select-dropdown";
import { colors } from "../../constants/colors";

const { width, height } = Dimensions.get("window");
export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  onSubmitEditing() {}

  render() {
    return (
      <View style={{paddingVertical: 5}}>
        <Text style={styles.label}>{this.props.label}</Text>
        <SelectDropdown
          data={this.props.selectdata}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          defaultButtonText={this.props.defaultButtonText}
          buttonTextStyle={[styles.buttonTextStyle, styles.buttonTextStyle]}
          buttonStyle={[styles.buttonStyle, this.props.buttonStyle]}
          rowTextStyle={[styles.rowTextStyle, styles.rowTextStyle]}
          dropdownStyle={styles.dropdownStyle}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    height: 40,
    borderRadius: 100,
    backgroundColor: colors.white,
    width: width*0.9,
  },
  buttonTextStyle: {
    fontFamily: fontFamily.Regular,
    fontSize: 14,
    textAlign: 'left',
    color: colors.label
  },
  rowTextStyle: {
    fontFamily: fontFamily.Regular,
    fontSize: 14,
  },
  dropdownStyle: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  label: {
    fontFamily: fontFamily.Regular,
    fontSize: 16,
    paddingLeft: 10
  },
});
