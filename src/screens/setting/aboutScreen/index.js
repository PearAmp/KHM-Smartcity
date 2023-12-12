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
  ScrollView,
} from "react-native";
import styles from "./styles";

import { withTranslation } from "react-i18next";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import { icons } from "../../../constants/images";

class AboutScreen extends Component {
  constructor() {
    super();
    this.state = {};
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
        <Header title="เกี่ยวกับเรา" onPressBack={() => {
          this.props.navigation.goBack();
        }} />
        <View style={styles.vContainerPage}>
          <ScrollView>
            <View style={styles.box}>
              <Text style={styles.txtlabel}>เวอร์ชั่นที่ใช้อยู่</Text>
              <Text style={styles.txtvertion}>13.19.1</Text>
            </View>
            <TouchableWithoutFeedback>
              <View style={styles.box}>
                <Text style={styles.txtlabel}>ข้อกำหนดการใช้บริการ</Text>
                <Image source={icons.arrowRight} style={styles.icons} />
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <View style={styles.box}>
                <Text style={styles.txtlabel}>ประกาศทางกฎหมาย</Text>
                <Image source={icons.arrowRight} style={styles.icons} />
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </View>
      </Container>
    );
  }
}

export default withTranslation()(AboutScreen);
