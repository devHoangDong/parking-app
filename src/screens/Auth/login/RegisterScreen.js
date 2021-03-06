import { theme } from "galio-framework";
import React, { useState } from 'react';
import {
  Alert, Dimensions, Image,
  ImageBackground, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView,
  Text,
  TouchableWithoutFeedback, View
} from 'react-native';
import { Button, withTheme } from 'react-native-elements';
import * as Keychain from 'react-native-keychain';
import InteractiveTextInput from "react-native-text-input-interactive";
import styleLogin from '../../../assets/styles/styleLogin';

let touchImages1 = require('../../../assets/images/fingerprint.png');
const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;
const EResult = {
  CANCELLED: 'CANCELLED',
  DISABLED: 'DISABLED',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
};

const LoginScreen = (props) => {
  const { navigation } = props;
  const emptyDataActive = {
    "activecode": "",
    "mobileToken": ""
  }
  const [dataActive, setDataActive] = useState(emptyDataActive);
  const [data, setData] = useState({
    phone: '',
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  const handlePhoneChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        phone: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        phone: val,
        check_textInputChange: false,
      });
    }
  };

  const handleUsernameChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
      });
    } else {
      setData({
        ...data,
        username: val,
      });
    }
  };

  const handlePasswordChange = val => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const setCredentials = async (userdata, password) => {
    return new Promise((resolve, reject) => {
      // Store the credentials
      Keychain.setGenericPassword(JSON.stringify(userdata), password)
        .then(resp => {
          resolve(true)
        })
        .catch(err => {
          console.log("err: ", err);
          reject(err);
        });
    });
  }

  const handleRegister = async (phone, username, password) => {
    if (!phone || !username || !password) {
      Alert.alert('Th???t b???i!', "D??? li???u nh???p kh??ng ???????c b??? tr???ng", [{ text: 'Ok' }]);
      return
    }
    try {
      let userData = {
        phone: phone,
        username: username,
      };
      await setCredentials(userData, password);
      Alert.alert('????ng k?? th??nh c??ng!', "", [{ text: 'Ok' }]);
      props.navigation.navigate('LOGIN');
    } catch (error) {
      Alert.alert('C?? l???i x???y ra!', '', [{ text: error }]);
    }
  };

  return (
    <SafeAreaView
      style={styleLogin.container}
    >
      <ImageBackground source={require('../../../assets/images/background.jpg')}
        resizeMode={'cover'}
        style={{
          flex: 1,
        }}
        imageStyle=
        {{ opacity: 0.6 }}
      >
        {/* KeyboardAvoidingView : khi nh???p th?? auto ch???nh kh??ng che button */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}>
          {/* TouchableWithoutFeedback : Khi nh???p click ra m??n h??nh tho??t keyboard */}
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1 }}>
              <View style={styleLogin.tview}>
                <Image
                  style={styleLogin.tinyLogo}
                  source={require('../../../assets/images/logo.png')}
                />
              </View>
              <View style={styleLogin.title}>
                <Text style={styleLogin.titleText}>????ng k?? t??i kho???n</Text>
              </View>
              <View
                style={styleLogin.tform}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <InteractiveTextInput
                    placeholder="T??n ????ng nh???p"
                    textInputStyle={styleLogin.inputPin}
                    onChangeText={val => handleUsernameChange(val)}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <InteractiveTextInput
                    placeholder="S??? ??i???n tho???i"
                    textInputStyle={styleLogin.inputPin}
                    onChangeText={val => handlePhoneChange(val)}
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 10
                  }}
                >
                  <InteractiveTextInput
                    placeholder="M???t kh???u"
                    onChangeText={val => handlePasswordChange(val)}
                    secureTextEntry={data.secureTextEntry ? true : false}
                    enableIcon
                    textInputStyle={styleLogin.inputPass}
                    iconImageSource={require("./../../../assets/images/visibility-button.png")}
                    onIconPress={updateSecureTextEntry}
                  />
                </View>
                <View style={styleLogin.taction}>
                  <Button
                    title={'????NG K??'}
                    buttonStyle={{ backgroundColor: '#95CD41', height: 48, paddingHorizontal: 40 }}
                    containerStyle={{
                      // width: 200,
                      height: 48,
                      marginHorizontal: 50,
                      marginVertical: 10,
                    }}
                    onPress={() => handleRegister(data.phone, data.username, data.password)}
                  />
                </View>
                <View style={styleLogin.taction}>
                  <Text
                    style={styleLogin.tactionLogin}
                    onPress={() => navigation.navigate('Register')}>
                    B???n ???? c?? t??i kho???n? <Text
                      style={styleLogin.tactionLoginText}
                      onPress={() =>
                        props.navigation.navigate('LOGIN')
                      }
                    >????ng nh???p</Text>
                  </Text>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default withTheme(LoginScreen);
