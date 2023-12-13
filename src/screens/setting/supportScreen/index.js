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

import { withTranslation } from "react-i18next";
import Container from "../../../components/Container";
import Accordion from "react-native-collapsible/Accordion";
import { colors } from "../../../constants/colors";
import { icons } from "../../../constants/images";

class SupportScreen extends Component {
  constructor() {
    super();
    this.state = {
      activeSections: [],
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
  _renderSectionTitle = (section) => {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  };

  _renderHeader = (section) => {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: colors.base,
         marginVertical: 10
        }}
      >
        <Text style={styles.txtrender}>{section.title}</Text>
        <Image style={styles.arrow} source={icons.arrowdodwn} />
      </View>
    );
  };

  _renderContent = (section) => {
    return (
      <View
        style={{
          height: 'auto',
        }}
      >
        <Text style={styles.txtcontent}>{section.content}</Text>
      </View>
    );
  };

  _updateSections = (activeSections) => {
    this.setState({ activeSections });
  };

  render() {
    const SECTIONS = [
      {
        title: "วิธีตรวจสอบและลืมรหัสผ่าน",
        content:
          "หากลืมรหัสผ่าน กรุณาตั้งรหัสผ่านใหม่ตามขั้นตอน *ขอแนะนำให้จดจำรหัสผ่านที่เปบลี่ยนใหม่เพื่อป้องกันไม่ให้ลืม",
      },
      {
        title: "แก้ไขข้อมูลส่วนตัว",
        content:
          "หากลืมรหัสผ่าน กรุณาตั้งรหัสผ่านใหม่ตามขั้นตอน *ขอแนะนำให้จดจำรหัสผ่านที่เปบลี่ยนใหม่เพื่อป้องกันไม่ให้ลืม",
      },
      {
        title: "เพิ่ม/แก้ไขที่อยู่",
        content:
          "หากลืมรหัสผ่าน กรุณาตั้งรหัสผ่านใหม่ตามขั้นตอน *ขอแนะนำให้จดจำรหัสผ่านที่เปบลี่ยนใหม่เพื่อป้องกันไม่ให้ลืม",
      },
    ];
    return (
      <Container>
        <View style={styles.vContainerPage}>
          <Accordion
            sections={SECTIONS}
            activeSections={this.state.activeSections}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            onChange={this._updateSections}
            underlayColor={colors.base}
          />
        </View>
      </Container>
    );
  }
}

export default withTranslation()(SupportScreen);
