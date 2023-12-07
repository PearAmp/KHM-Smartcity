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
import { colors } from "../../constants/colors";
import { withTranslation } from "react-i18next";
import { logos, moks, tabmenu, topicicons } from "../../constants/images";
import BlockItem from "../../components/BlockItem";
import Post from "../../components/Post";

const topicBox = [
  {
    id: 1,
    topicImg: topicicons.resterant,
    topicName: "ร้านอาหาร",
  },
  {
    id: 2,
    topicImg: topicicons.pet,
    topicName: "สัตว์เลี้ยง",
  },
  {
    id: 3,
    topicImg: topicicons.sport,
    topicName: "กีฬา",
  },
  {
    id: 4,
    topicImg: topicicons.dentistry,
    topicName: "ทัตกรรม",
  },
  {
    id: 5,
    topicImg: topicicons.domitory,
    topicName: "ห้องพัก/เช่า",
  },
  {
    id: 6,
    topicImg: topicicons.durian,
    topicName: "ทุเรียนภูเขาไฟ",
  },

  {
    id: 7,
    topicImg: topicicons.construct,
    topicName: "ก่อสร้าง",
  },
  {
    id: 8,
    topicImg: topicicons.goverment,
    topicName: "องค์กร",
  },
  {
    id: 9,
    topicImg: topicicons.graduate,
    topicName: "การศึกษา",
  },
  {
    id: 10,
    topicImg: topicicons.buety,
    topicName: "ความงาม",
  },
  {
    id: 11,
    topicImg: topicicons.healthy,
    topicName: "สุขภาพ",
  },
];
const topicBox2 = [
  {
    id: 1,
    topicImg: topicicons.house,
    topicName: "อสังหา",
  },
  {
    id: 2,
    topicImg: topicicons.internet,
    topicName: "อินเทอร์เน็ต",
  },
  {
    id: 3,
    topicImg: topicicons.search,
    topicName: "ค้นหา",
  },
  {
    id: 4,
    topicImg: topicicons.travel,
    topicName: "ท่องเที่ยว",
  },
  {
    id: 5,
    topicImg: topicicons.transport,
    topicName: "ขนส่ง",
  },
  {
    id: 6,
    topicImg: topicicons.wather,
    topicName: "อากาศ",
  },

  {
    id: 7,
    topicImg: topicicons.farm,
    topicName: "การเกษตร",
  },
  {
    id: 8,
    topicImg: topicicons.plant,
    topicName: "พืชพรรณ",
  },
  {
    id: 9,
    topicImg: topicicons.utilities,
    topicName: "สารณูปโภค",
  },
  {
    id: 10,
    topicImg: topicicons.worker,
    topicName: "รับเหมา",
  },
];

class HomeScreen extends Component {
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
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View style={styles.vContainerPage}>
            <View style={{ padding: 20 }}>
              <View style={styles.header}>
                <View></View>
                <Image style={styles.logos} source={logos.textlogo} />
                <TouchableWithoutFeedback
                  onPress={() => {
                    this.props.navigation.navigate("ProfileStack", {
                      screen: "Setting",
                    });
                  }}
                >
                  <Image style={styles.icons} source={tabmenu.setting} />
                </TouchableWithoutFeedback>
              </View>
              <Image style={styles.imgHeader} source={moks.kh} />
              <View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {topicBox.map((item) => (
                    <View style={{ paddingRight: 20 }}>
                      <BlockItem
                        topicImg={item.topicImg}
                        topicName={item.topicName}
                      />
                    </View>
                  ))}
                </ScrollView>
              </View>
              <View style={{ paddingTop: 10 }}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {topicBox2.map((item) => (
                    <View style={{ paddingRight: 20 }}>
                      <BlockItem
                        topicImg={item.topicImg}
                        topicName={item.topicName}
                      />
                    </View>
                  ))}
                </ScrollView>
              </View>
              <View style={styles.vflex}>
                <View style={styles.itemSlide}></View>
                <View style={styles.itemSlide}></View>
                <View style={styles.itemSlide}></View>
                <View style={styles.itemSlide}></View>
              </View>
            </View>
            <View style={styles.boxPost}>
              <Post
                onPress={() => {
                  this.props.navigation.navigate("PostStack", {
                    screen: "PostScreen",
                  });
                }}
              />
              <View style={{ marginTop: 20 }}>
                <Post
                  onPress={() => {
                    this.props.navigation.navigate("PostStack", {
                      screen: "PostScreen",
                    });
                  }}
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <Post
                  onPress={() => {
                    this.props.navigation.navigate("PostStack", {
                      screen: "PostScreen",
                    });
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}

export default withTranslation()(HomeScreen);
