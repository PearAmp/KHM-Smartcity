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
import Container from "../../components/Container";
import { withTranslation } from "react-i18next";
import { logos } from "../../constants/images";
import InputAunt from "../../components/Input/InputAunt";
import Dropdown from "../../components/Dropdown";
import Button from "../../components/Button";

class RegisterScreen extends Component {
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
    const {} = this.state;
    const gender = ["ชาย", "หญิง"];
    const district = [
      "สิ",
      "บักดอง",
      "พราน",
      "ไพร",
      "กระหวัน",
      "ขุนหาญ",
      "โนนสูง",
      "ภูฝ้าย",
      "ห้วยจันทร์",
      "กันทรอม",
      "โพธิ์กระสังค์",
    ];
    const userType = [
      "บุคคลทั่วไป ",
      "องค์กร / หน่วยงาน",
      "โรงเรียน",
      "เจ้าของกิจการ",
      "บุคลากรภาครัฐ",
    ];
    return (
      <Container>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View style={styles.vContainerPage}>
            <View style={styles.imgLogo}>
              <Image source={logos.logo} style={styles.img} />
            </View>
            <View>
              <InputAunt label="ชื่อ" placeholder="ชื่อ" />
              <InputAunt label="นามสกุล" placeholder="นามสกุล" />
              <InputAunt
                label="อายุ"
                placeholder="อายุ"
                keyboardType="numeric"
              />
              <Dropdown
                label="เพศ"
                defaultButtonText="เพศ"
                selectdata={gender}
              />
              <Dropdown
                label="ตำบล"
                defaultButtonText="ตำบล"
                selectdata={district}
              />
              <Dropdown label="หมู่บ้าน" defaultButtonText="หมู่บ้าน" />
              <InputAunt label="E-Mail" placeholder="E-Mail" />
              <InputAunt label="Password" placeholder="Password" />
              <InputAunt
                label="Confirm Password"
                placeholder="Confirm Password"
              />
              <Dropdown
                label="เลือกประเภทผู้ใช้งาน"
                defaultButtonText="เลือกประเภทผู้ใช้งาน"
                selectdata={userType}
              />
            </View>
            <View style={styles.button}>
              <Button
                btnlabel="ลงทะเบียน"
                onPress={() => {
                  this.props.navigation.navigate("RegisStack", {
                    screen: "Condition",
                  });
                }}
              />
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

export default withTranslation()(RegisterScreen);
