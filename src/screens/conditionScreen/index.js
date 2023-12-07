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
import CheckBox from "react-native-check-box";
import styles from "./styles";
import Container from "../../components/Container";
import { colors } from "../../constants/colors";
import { withTranslation } from "react-i18next";
import Header from "../../components/Header";
import { logos } from "../../constants/images";
import Button from "../../components/Button";

class ConditionScreen extends Component {
  constructor() {
    super();
    this.state = {
      isChecked: false,
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

  render() {
    const { isChecked } = this.state;
    return (
      <Container>
        <Header title="เงื่อนไขการใช้งาน" />
        <View style={styles.vContainerPage}>
          <View>
            <View style={styles.imgLogo}>
              <Image source={logos.logo} style={styles.img} />
            </View>
            <Text style={styles.discript}>
              Khunhan Smart City เป็น Application ที่เป็นศูนย์
              รวมของข้อมูลภายในอำเภอขุนหาญ ทางผู้พัฒนาจะขอ
              สงวนสิทธิ์ในการจัดเก็บข้อมูลของผู้ใช้งาน เพื่อนำไปทำ
              การประเมิณคุณภาพของ Application ต่อไป
            </Text>
            <CheckBox
              style={{ marginVertical: 10 }}
              onClick={() => {
                this.setState({
                  isChecked: !this.state.isChecked,
                });
              }}
              isChecked={this.state.isChecked}
              rightText={"ยอมรับเงื่อนไขการใช้งาน"}
              rightTextStyle={styles.rightTextStyle}
              uncheckedCheckBoxColor="#4BB9F7"
              checkBoxColor="#4BB9F7"
            />
          </View>
          <View style={styles.botton}>
            <Button
              btnlabel="ถัดไป"
              onPress={() => {
                this.props.navigation.navigate("RegisStack", {
                  screen: "Login",
                });
              }}
            />
          </View>
        </View>
      </Container>
    );
  }
}

export default withTranslation()(ConditionScreen);
