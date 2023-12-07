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
import Header from "../../components/Header";
import NotificatePost from "../../components/NotificatePost";
import { moks } from "../../constants/images";

class NotificationScreen extends Component {
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
    const dataNotificate = [
      {
        id: 1,
        profile: moks.profile,
        postName: 'ใจดี ดีดีดี',
        activity: 'เพิ่มรูปภาพ',
        postDetail: 'สวยสมชื่อ....................',
        topicPost: 'ท่องเที่ยว'
      },
      {
        id: 2,
        profile: moks.profile,
        postName: 'ใจดี ดีดีดี',
        activity: 'เพิ่มโพส',
        postDetail: 'สวยสมชื่อ....................',
        topicPost: 'เกษตรกรรม'
      },
      {
        id: 3,
        profile: moks.profile,
        postName: 'ใจดี ดีดีดี',
        activity: 'เพิ่มโพส',
        postDetail: 'สวยสมชื่อ....................',
        topicPost: 'เกษตรกรรม'
      },
      {
        id: 4,
        profile: moks.profile,
        postName: 'ใจดี ดีดีดี',
        activity: 'เพิ่มโพส',
        postDetail: 'สวยสมชื่อ....................',
        topicPost: 'เกษตรกรรม'
      },
      {
        id: 5,
        profile: moks.profile,
        postName: 'ใจดี ดีดีดี',
        activity: 'เพิ่มโพส',
        postDetail: 'สวยสมชื่อ....................',
        topicPost: 'เกษตรกรรม'
      },
      {
        id: 6,
        profile: moks.profile,
        postName: 'ใจดี ดีดีดี',
        activity: 'เพิ่มโพส',
        postDetail: 'สวยสมชื่อ....................',
        topicPost: 'เกษตรกรรม'
      },
      {
        id: 7,
        profile: moks.profile,
        postName: 'ใจดี ดีดีดี',
        activity: 'เพิ่มโพส',
        postDetail: 'สวยสมชื่อ....................',
        topicPost: 'เกษตรกรรม'
      },
      {
        id: 8,
        profile: moks.profile,
        postName: 'ใจดี ดีดีดี',
        activity: 'เพิ่มโพส',
        postDetail: 'สวยสมชื่อ....................',
        topicPost: 'เกษตรกรรม'
      },
      {
        id: 9,
        profile: moks.profile,
        postName: 'ใจดี ดีดีดี',
        activity: 'เพิ่มโพส',
        postDetail: 'สวยสมชื่อ....................',
        topicPost: 'เกษตรกรรม'
      },
    ]
    return (
      <Container>
        <Header title="แจ้งเตือน" arrow={{ display: "none" }} />
        <View style={styles.vContainerPage}>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.scrooll}>
            {dataNotificate.map((item) => (
              <NotificatePost
                onPress={() => {
                  this.props.navigation.navigate("PostStack", {
                    screen: "PostScreen",
                  });
                }}
                profile={item.profile}
                postName={item.postName}
                activity={item.activity}
                postDetail={item.postDetail}
                topicPost={item.topicPost}
              />
            ))}
          </ScrollView>
        </View>
      </Container>
    );
  }
}

export default withTranslation()(NotificationScreen);
