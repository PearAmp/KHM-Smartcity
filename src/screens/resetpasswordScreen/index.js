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
import { logos, social } from "../../constants/images";
import Container from "../../components/Container";
import { withTranslation } from "react-i18next";
import InputLogin from "../../components/Input/InputLogin";
import InputPassword from "../../components/Input/InputPassword";
import Button from "../../components/Button";
class ResetpasswordScreen extends Component {
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
    return (
      <Container>
        <View style={styles.vContainerPage}>
          <View style={styles.imgLogo}>
            <Image source={logos.logo} style={styles.img} />
          </View>
          <Text style={styles.txtLogin}>Reset Password</Text>
          <View>
            <InputLogin />
            <View style={{ marginVertical: 10 }}></View>
            <InputPassword placeholder="New Password" />
            <View style={{ marginVertical: 10 }}></View>
            <InputPassword placeholder="Confirm New Password" />
          </View>
          <Button
            btnlabel="รีเซ็ต"
            styleBtn={styles.styleBtn}
            onPress={() => {
              this.props.navigation.navigate("RegisStack", {
                screen: "Login",
              });
            }}
          />
        </View>
      </Container>
    );
  }
}

export default withTranslation()(ResetpasswordScreen);
