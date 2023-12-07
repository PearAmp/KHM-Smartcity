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
class PostDetailScreen extends Component {
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
          title="ใจดี ดีดีดี"
          onPressBack={() => {
            this.props.navigation.goBack();
          }}
        />
        <View style={styles.vContainerPage}>
          <View style={styles.header}>
            <View style={styles.profile}>
              <Image source={moks.profile} style={styles.profileimg} />
              <View style={styles.boxName}>
                <Text style={styles.postName}>ใจดี ดีดีดี</Text>
                <Text style={styles.topic}>ท่องเที่ยว</Text>
              </View>
            </View>
            <TouchableOpacity>
              <View style={styles.like}>
                <Image source={icons.heart} style={styles.icons} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.Post}>
            <View style={styles.grid}>
              <Image source={moks.kh} style={styles.mock} />
              <View style={styles.vflex}>
                <Image source={moks.kh} style={styles.imgSmall} />
                <Image source={moks.kh} style={styles.imgSmall} />
              </View>
            </View>

            <Text style={styles.txtDetail}>
              สวยสมชื่อ...............................
            </Text>
          </View>
          <Text style={styles.txttime}>อาทิตย์ 10.10 น.</Text>
        </View>
      </Container>
    );
  }
}

export default withTranslation()(PostDetailScreen);
