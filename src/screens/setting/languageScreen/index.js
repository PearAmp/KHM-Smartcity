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
  FlatList,
} from "react-native";
import styles from "./styles";

import { withTranslation } from "react-i18next";
import Container from "../../../components/Container";
import language from "../../../../assets/language/language.json";
import Header from "../../../components/Header";
import Search from "../../../components/Search";
import RadioButtonRN from "radio-buttons-react-native";
import { colors } from "../../../constants/colors";
class LanguageScreen extends Component {
  constructor() {
    super();
    this.state = {
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
    const data = [
      {
        label: "",
      },
    
    ];
    return (
      <Container>
        <Header
          title="ภาษา"
          onPressBack={() => {
            this.props.navigation.goBack();
          }}
        />
        <View style={styles.vContainerPage}>
          <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
            <Search placeholder="ค้นหา" />
          </View>

          <FlatList
            showsVerticalScrollIndicator={false}
            data={language}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <View style={styles.boxlang}>
                  <Text style={styles.txtlang}>{item.lang}</Text>
                  <RadioButtonRN
                    data={data}
                    selectedBtn={(e) => console.log(e)}
                    boxStyle={styles.boxradio}
                    deactiveColor={colors.black}
                    activeColor={colors.primary}
                    // icon={
                    //   <Icon name="check-circle" size={25} color="#2c9dd1" />
                    // }
                  />
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </Container>
    );
  }
}

export default withTranslation()(LanguageScreen);
