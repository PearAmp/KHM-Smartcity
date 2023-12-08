import React, { Component } from "react";
import {
  View,
  Image,
  BackHandler,
  StatusBar,
  TouchableOpacity,
  Text,
  ImageBackground,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
  Switch,
} from "react-native";
import styles from "./styles";
import Container from "../../../components/Container";
import { withTranslation } from "react-i18next";
import Header from "../../../components/Header";
import { icons } from "../../../constants/images";
import { colors } from "../../../constants/colors";

class SettingScreen extends Component {
  constructor() {
    super();
    this.state = {
      isNoti: true,
    };
  }

  async componentDidMount() {
    //BackHandler.addEventListener("hardwareBackPress", this.handleBackButton)
    StatusBar.setBarStyle("light-content");
    StatusBar.setBackgroundColor(colors.base);
    StatusBar.setHidden(false);
    // await setToken(
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiI0dUFFSjNNSlYwdTQ4WTd5TjJTcyIsImxvZ2luX3R5cGUiOiJOT1JNQUwiLCJ0b2tlbl90eXBlIjoiQU5EUk9JRCIsImlhdCI6MTY3NjI2MTYzMiwiZXhwIjoxNjc2ODY2NDMyfQ.0bFOZz_Z6alNhKOmkZO4EpvMDKygWHkEpjs6eS3XT6M"
    // )
    this.checkLang();
  }

  componentWillUnmount() {
    //BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton)
  }

  handleBackButton() {
    return true;
  }
  checkLang = async () => {
    let lang = await getLang();
    //console.log('Lang: ', lang);
    if (!lang || lang == null) {
      //this.props.navigation.dispatch(StackActions.replace("LangStack"))
      const { t, i18n } = this.props;
      i18n.changeLanguage("th");
    }
  };

  render() {
    return (
      <Container>
        <Header
          title="ตั้งค่า"
          onPressBack={() => {
            this.props.navigation.goBack();
          }}
        />
        <View style={styles.vContainerPage}>
          <TouchableWithoutFeedback
            onPress={() => {
              this.props.navigation.navigate("SettingStack", {
                screen: "Language",
              });
            }}
          >
            <View style={styles.boxItem}>
              <View style={styles.left}>
                <Image source={icons.language} style={styles.icons} />
                <Text style={styles.txtTitle}>ภาษา</Text>
              </View>
              <View style={styles.left}>
                <Text style={styles.txtlabel}>Thai</Text>
                <Image source={icons.arrowRight} style={styles.icons} />
              </View>
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.boxItem}>
            <View style={styles.left}>
              <Image source={icons.darkmode} style={styles.icons} />
              <Text style={styles.txtTitle}>โหมดมืด</Text>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: "#90EE90" }}
              thumbColor={this.state.isMode ? "green" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => {
                this.setState({ isMode: !this.state.isMode });
              }}
              value={this.state.isMode}
            />
          </View>
          <View style={styles.boxItem}>
            <View style={styles.left}>
              <Image source={icons.map} style={styles.icons} />
              <Text style={styles.txtTitle}>แผนที่</Text>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: "#90EE90" }}
              thumbColor={this.state.isMap ? "green" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => {
                this.setState({ isMap: !this.state.isMap });
              }}
              value={this.state.isMap}
            />
          </View>
          <View style={styles.boxItem}>
            <View style={styles.left}>
              <Image source={icons.noti} style={styles.icons} />
              <Text style={styles.txtTitle}>แจ้งเตือน</Text>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: "#90EE90" }}
              thumbColor={this.state.isNoti ? "green" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => {
                this.setState({ isNoti: !this.state.isNoti });
              }}
              value={this.state.isNoti}
            />
          </View>
          <TouchableWithoutFeedback
            onPress={() => {
              this.props.navigation.navigate("SettingStack", {
                screen: "About",
              });
            }}
          >
            <View style={styles.boxItem}>
              <View style={styles.left}>
                <Image source={icons.info} style={styles.icons} />
                <Text style={styles.txtTitle}>เกี่ยวกับเรา</Text>
              </View>
              <Image source={icons.arrowRight} style={styles.icons} />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() => {
              this.props.navigation.navigate("SettingStack", {
                screen: "Support",
              });
            }}
          >
            <View style={styles.boxItem}>
              <View style={styles.left}>
                <Image source={icons.support} style={styles.icons} />
                <Text style={styles.txtTitle}>ศูนย์ช่วยเหลือ</Text>
              </View>
              <Image source={icons.arrowRight} style={styles.icons} />
            </View>
          </TouchableWithoutFeedback>
          <View style={styles.boxItem}>
            <View style={styles.left}>
              <Image source={icons.lock} style={styles.icons} />
              <Text style={styles.txtTitle}>เปลี่ยนรหัสผ่าน</Text>
            </View>
            <Image source={icons.arrowRight} style={styles.icons} />
          </View>
          <View style={styles.boxItem}>
            <Text style={styles.txtTitle}>อัพเดตซอร์ฟแวร์</Text>
            <Image source={icons.warn} style={styles.icons} />
          </View>
        </View>
      </Container>
    );
  }
}

export default withTranslation()(SettingScreen);
