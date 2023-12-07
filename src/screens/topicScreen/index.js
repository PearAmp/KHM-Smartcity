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
import Button from "../../components/Button";
import TopicBox from "../../components/TopicBox";
import { topicicons } from "../../constants/images";
const dataTopic = [
  { id: 1, topicimg: topicicons.resterant, topicName: "ร้านอาหาร" },
  { id: 2, topicimg: topicicons.pet, topicName: "สัตว์เลี้ยง" },
  { id: 3, topicimg: topicicons.sport, topicName: "กีฬา" },
  { id: 4, topicimg: topicicons.dentistry, topicName: "ทัตกรรม" },
];
const dataTopic2 = [
  { id: 1, topicimg: topicicons.domitory, topicName: "ห้องพัก/เช่า" },
  { id: 2, topicimg: topicicons.durian, topicName: "ทุเรียนภูเขาไฟ" },
  { id: 3, topicimg: topicicons.construct, topicName: "ก่อสร้าง" },
  { id: 4, topicimg: topicicons.goverment, topicName: "องค์กร" },
];
const dataTopic3 = [
  { id: 1, topicimg: topicicons.graduate, topicName: "การศึกษา" },
  { id: 2, topicimg: topicicons.buety, topicName: "ความงาม" },
  { id: 3, topicimg: topicicons.healthy, topicName: "สุขภาพ" },
  { id: 4, topicimg: topicicons.house, topicName: "อสังหา" },
];
const dataTopic4 = [
  { id: 1, topicimg: topicicons.internet, topicName: "อินเทอร์เน็ต" },
  { id: 2, topicimg: topicicons.search, topicName: "ค้นหา" },
  { id: 3, topicimg: topicicons.travel, topicName: "ท่องเที่ยว" },
  { id: 4, topicimg: topicicons.transport, topicName: "ขนส่ง" },
];
const dataTopic5 = [
  { id: 1, topicimg: topicicons.wather, topicName: "อากาศ" },
  { id: 2, topicimg: topicicons.farm, topicName: "การเกษตร" },
  { id: 3, topicimg: topicicons.plant, topicName: "พืชพรรณ" },
  { id: 4, topicimg: topicicons.utilities, topicName: "สารณูปโภค" },
];
const dataTopic6 = [
  { id: 1, topicimg: topicicons.worker, topicName: "รับเหมา" },
];
class TopicScreen extends Component {
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
        <Header
          title="หัวข้อที่สนใจ"
          onPressBack={() => {
            this.props.navigation.goBack();
          }}
        />
        <View style={styles.vContainerPage}>
          <View style={styles.vflex}>
            {dataTopic.map((item) => (
              <View key={item.id}>
                <TopicBox topicimg={item.topicimg} topicName={item.topicName} />
              </View>
            ))}
          </View>
          <View style={styles.vflex}>
            {dataTopic2.map((item) => (
              <View key={item.id}>
                <TopicBox topicimg={item.topicimg} topicName={item.topicName} />
              </View>
            ))}
          </View>
          <View style={styles.vflex}>
            {dataTopic3.map((item) => (
              <View key={item.id}>
                <TopicBox topicimg={item.topicimg} topicName={item.topicName} />
              </View>
            ))}
          </View>
          <View style={styles.vflex}>
            {dataTopic4.map((item) => (
              <View key={item.id}>
                <TopicBox topicimg={item.topicimg} topicName={item.topicName} />
              </View>
            ))}
          </View>
          <View style={styles.vflex}>
            {dataTopic5.map((item) => (
              <View key={item.id}>
                <TopicBox topicimg={item.topicimg} topicName={item.topicName} />
              </View>
            ))}
          </View>
          <View style={styles.vflex}>
            {dataTopic6.map((item) => (
              <View key={item.id}>
                <TopicBox topicimg={item.topicimg} topicName={item.topicName} />
              </View>
            ))}
          </View>
          <View style={styles.bottom}>
            <Button
              btnlabel="ข้าม"
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

export default withTranslation()(TopicScreen);
