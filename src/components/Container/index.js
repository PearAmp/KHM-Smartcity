import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {colors} from '../../constants/colors';
// import Loader from '../Loader';

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={
            Platform.OS === 'ios'
              ? this.props.iosOffset
                ? this.props.iosOffset
                : 50
              : this.props.androidOffset
              ? this.props.androidOffset
              : 120
          }
          style={{flex: 1, flexGrow: 1}}
          enabled>
          {this.props.Loading && <Loader />}
          {this.props.children}
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
