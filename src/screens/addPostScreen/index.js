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

class AddPostScreen extends Component {
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
    const dataArea = ["บักดอง", "กันทรอม", "สิ"];
    const topicData = [
      "ร้านอาหาร",
      "สัตว์เลี้ยง",
      "กีฬา",
      "ทัตกรรม",
      "ห้องพัก/เช่า",
      "ทุเรียนภูเขาไฟ",
      "ก่อสร้าง",
      "องค์กร",
      "การศึกษา",
      "ความงาม",
      "สุขภาพ",
      "อสังหา",
      "อินเทอร์เน็ต",
      "ค้นหา",
      "ท่องเที่ยว",
      "ขนส่ง",
      "อากาศ",
      "การเกษตร",
      "พืชพรรณ",
      "สารณูปโภค",
      "รับเหมา",
    ];
    return (
      <Container>
        <Header title="โพสต์" arrow={{display: 'none'}} />
        <View style={styles.vContainerPage}>
          <View style={styles.boxImg}>
            <View style={styles.showImg}>
              <Image source={moks.kh} style={styles.mockImg} />
              <TouchableOpacity style={styles.btnClose}>
                <Image source={icons.close} style={styles.close} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <View style={styles.boxUpload}>
                <Image source={icons.plus} style={styles.icons} />
                <Text style={styles.label}>อัพโหลดรูปภาพ</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ marginBottom: 5 }}>
            <InputAunt
              placeholder="รายละเอียดโพส"
              input={styles.input}
              label="รายละเอียดโพสต์"
            />
          </View>
          <View style={{ marginBottom: 5 }}>
            <Dropdown
              label="ระบุพื้นที่"
              defaultButtonText="ระบุพื้นที่"
              selectdata={dataArea}
            />
          </View>
          <View style={{ marginBottom: 5 }}>
            <InputAunt
              label="เบอร์โทรศัพท์"
              placeholder="เบอร์โทรศัพท์"
              keyboardType="numeric"
            />
          </View>
          <View style={{ marginBottom: 5 }}>
            <Dropdown
              label="ประเภทโพส"
              defaultButtonText="ประเภทโพส"
              selectdata={topicData}
            />
          </View>
          <View style={styles.bottom}>
            <Button
              btnlabel="โพสต์"
              onPress={() => {
                this.props.navigation.navigate("MainTabStack", {
                  screen: "HomeTab",
                });
              }}
            />
          </View>
        </View>
      </Container>
    );
  }
}

export default withTranslation()(AddPostScreen);
