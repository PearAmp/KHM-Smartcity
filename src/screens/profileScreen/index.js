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
  Modal,
  Switch,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import styles from "./styles";
import Container from "../../components/Container";
import { colors } from "../../constants/colors";
import { withTranslation } from "react-i18next";
import { icons, moks } from "../../constants/images";
import InputAunt from "../../components/Input/InputAunt";
import Dropdown from "../../components/Dropdown";
import Button from "../../components/Button";

class ProfileScreen extends Component {
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
        <View style={styles.vContainerPage}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.boxImg}>
              <Image source={moks.profile} style={styles.imgProfile} />
            </View>
            <View style={styles.form}>
              <InputAunt
                label="ชื่อ"
                placeholder="ดีดีดี"
                input={styles.input}
                editable={false}
              />
              <InputAunt
                label="นามสกุล"
                placeholder="ดีดีดี"
                input={styles.input}
                editable={false}
              />
              <InputAunt
                label="Email"
                placeholder="iooh@gmail.com"
                input={styles.input}
                editable={false}
              />
              <InputAunt
                label="ประเภทผู้ใช้"
                placeholder="ทั่วไป"
                input={styles.input}
                editable={false}
              />
              <TouchableWithoutFeedback
                onPress={() => {
                  this.props.navigation.navigate("ProfileStack", {
                    screen: "FavoritPost",
                  });
                }}
              >
                <View style={styles.boxlike}>
                  <Image source={icons.redheart} style={styles.icons} />
                  <Text style={styles.txtLike}>โพสต์ที่ฉันถูกใจ</Text>
                </View>
              </TouchableWithoutFeedback>
              <InputAunt
                label="หมู่บ้าน"
                placeholder="กันทรอมกลาง"
                input={styles.input}
                editable={false}
              />
              <InputAunt
                label="ตำบล"
                placeholder="กันทรอม"
                input={styles.input}
                editable={false}
              />
            </View>
            <View style={styles.bottom}>
              <Button btnlabel="แก้ไข"
              onPress={() => {
                this.props.navigation.navigate('ProfileStack', {
                  screen: 'EditProfile'
                })
              }}
              />
              <Button
                btnlabel="Logout"
                onPress={() => {
                  this.props.navigation.navigate("RegisStack", {
                    screen: "Login",
                  });
                }}
              />
            </View>
          </ScrollView>
        </View>
      </Container>
    );
  }
}

export default withTranslation()(ProfileScreen);
