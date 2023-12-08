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
import Container from "../../components/Container";
import { colors } from "../../constants/colors";
import { withTranslation } from "react-i18next";
import Header from "../../components/Header";
import { icons, moks } from "../../constants/images";
import InputAunt from "../../components/Input/InputAunt";
import Dropdown from "../../components/Dropdown";
import Button from "../../components/Button";

class EditProfileScreen extends Component {
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
    const vilage = [
      "บ้านกันทรอม",
      "บ้านจองกอ",
      "บ้านตานวน",
      "บ้านกันทรอมใต้",
      "บ้านตาเอก",
      "บ้านกันทรอมน้อย",
      "บ้านข้าง",
      "บ้านตาเอกใหม่",
      "บ้านกันทรอมตะวันออก",
      "บ้านโนนทองหลาง",
      "บ้านกันทรอมกลาง",
      "บ้านไทรน้อย",
      "บ้านตาเอกพัฒนา",
    ];
    const distric = [
      "สิ",
      "บักดอง",
      "พราน",
      "โพธิ์วงศ์",
      "ไพร",
      "กระหวัน",
      "ขุนหาญ",
      "โนนสูง",
      "ภูฝ้าย",
      "ห้วยจันทร์",
      "กันทรอม",
      "โพธิ์กระสังข์",
    ];
    return (
      <Container>
        <Header
          title="แก้ไขโปรไฟล์"
          onPressBack={() => this.props.navigation.goBack()}
        />
        <View style={styles.vContainerPage}>
          <View style={styles.boxImg}>
            <Image source={moks.profile} style={styles.imgProfile} />
            <TouchableOpacity>
            <Image source={icons.camera} style={styles.iconcamera} />
            </TouchableOpacity>
          </View>
          <View style={styles.form}>
            <InputAunt label="ชื่อ" placeholder="ดีดีดี" input={styles.input} />
            <InputAunt
              label="นามสกุล"
              placeholder="ดีดีดี"
              input={styles.input}
            />
            <InputAunt
              label="Email"
              placeholder="iooh@gmail.com"
              input={styles.input}
            />
            <InputAunt
              label="ประเภทผู้ใช้"
              placeholder="ทั่วไป"
              input={styles.input}
            />
            <Dropdown
              label="หมู่บ้าน"
              defaultButtonText="กันทรอมกลาง"
              buttonStyle={styles.buttonStyle}
              selectdata={vilage}
            />
            <Dropdown
              label="ตำบล"
              defaultButtonText="กันทรอม"
              buttonStyle={styles.buttonStyle}
              selectdata={distric}
            />
          </View>
          <View style={styles.bottom}>
            <Button
              btnlabel="บันทึก"
              onPress={() => {
                this.props.navigation.navigate("MainTabStack", {
                  screen: "ProfileTab",
                });
              }}
            />
          </View>
        </View>
      </Container>
    );
  }
}

export default withTranslation()(EditProfileScreen);
