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
import { SearchBar } from "react-native-elements";
import Search from "../../components/Search";
import Post from "../../components/Post";
import { icons } from "../../constants/images";
class SearchScreen extends Component {
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
          title="ค้นหา"
          onPressBack={() => {
            this.props.navigation.goBack();
          }}
          arrow={{ display: "none" }}
        />
        <View style={styles.vContainerPage}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ paddingVertical: 10 }}>
              <Search />
            </View>
            <View style={styles.boxPost}>
              <View style={{ marginBottom: 20 }}>
                <Post
                  onPress={() => {
                    this.props.navigation.navigate("PostStack", {
                      screen: "PostScreen",
                    });
                  }}
                  iconheart={icons.heart}
                />
              </View>
              <View style={{ marginBottom: 20 }}>
                <Post
                  onPress={() => {
                    this.props.navigation.navigate("PostStack", {
                      screen: "PostScreen",
                    });
                  }}
                  iconheart={icons.heart}
                />
              </View>
              <View style={{ marginBottom: 20 }}>
                <Post
                  onPress={() => {
                    this.props.navigation.navigate("PostStack", {
                      screen: "PostScreen",
                    });
                  }}
                  iconheart={icons.heart}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </Container>
    );
  }
}

export default withTranslation()(SearchScreen);
