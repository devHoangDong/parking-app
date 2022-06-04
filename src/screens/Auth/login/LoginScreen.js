import { theme } from "galio-framework";
import React, { useEffect, useState } from 'react';
import {
  Alert, Dimensions, Image,
  ImageBackground, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView,
  StyleSheet, Text,
  TouchableWithoutFeedback, View
} from 'react-native';
import { Button, withTheme } from 'react-native-elements';
import * as Keychain from 'react-native-keychain';
import InteractiveTextInput from "react-native-text-input-interactive";
import styleLogin from '../../../assets/styles/styleLogin';
import { useAuth } from '../../../context/authcontext';


const LoginScreen = (props) => {
  const { navigation } = props;
  const { signIn } = useAuth();
  const [visible, setVisible] = useState(false);
  const [dataUser, setDataUser] = useState()
  const emptyDataActive = {
    "activecode": "",
    "mobileToken": ""
  }
  const [dataActive, setDataActive] = useState(emptyDataActive);

  const [data, setData] = useState({
    phone: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  const textInputChange = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        phone: val,
        check_textInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        phone: val,
        check_textInputChange: false,
        isValidUser: false,
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

  const getCredentials = async () => {
    return new Promise((resolve, reject) => {
      Keychain.getGenericPassword()
        .then((credentials) => {
          if (credentials && credentials.username) {
            console.log('Credentials successfully loaded for user ' + credentials);
            resolve(credentials);
          } else {
            // console.log('No credentials stored');
            resolve(null);
          }
        })
        .catch(err => {
          console.log("err: ", err);
          reject(err);
        });
    });
  }

  const loginHandle = async (phone, password) => {
    try {
      let dataAuth = JSON.parse(dataUser?.username);
      if (phone === dataAuth?.phone && password === dataUser?.password) {
        Alert.alert('Thành công!', "Đăng nhập thành công", [{ text: 'Ok' }]);
        signIn(dataAuth);
      } else {
        Alert.alert('Thất bại!', "Số điện thoại hoặc mật khẩu không đúng", [{ text: 'Ok' }]);
      }
    } catch (error) {
      console.log('error: ', error);
      Alert.alert('Có lỗi xảy ra!');
    }
  };
  const fetchDataAuth = async () => {
    const credentials = await getCredentials();
    console.log('credentials: ', credentials);
    setDataUser(credentials);
  }

  useEffect(() => {
    fetchDataAuth();
  }, [])
  return (
    <SafeAreaView
      style={styleLogin.container}
    >
      {/* <StatusBar style="light" /> */}
      <ImageBackground source={require('../../../assets/images/background.jpg')}
        resizeMode={'cover'}
        style={{
          flex: 1,
        }}
        imageStyle=
        {{ opacity: 0.6 }}
      >
        {/* KeyboardAvoidingView : khi nhập thì auto chỉnh không che button */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}>
          {/* TouchableWithoutFeedback : Khi nhập click ra màn hình thoát keyboard */}
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1 }}>
              <View style={styleLogin.tview}>
                <Image
                  style={styleLogin.tinyLogo}
                  source={require('../../../assets/images/logo.png')}
                />
              </View>
              <View style={styleLogin.title}>
                <Text style={styleLogin.titleText}>Đăng nhập tài khoản</Text>
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
                    placeholder="Số điện thoại"
                    onChangeText={val => textInputChange(val)}
                    textInputStyle={styleLogin.inputPin} />
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
                    placeholder="Mật khẩu"
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
                    title={'ĐĂNG NHẬP'}
                    buttonStyle={{ backgroundColor: '#95CD41', height: 48, paddingHorizontal: 40 }}
                    containerStyle={{
                      // width: 200,
                      height: 48,
                      marginHorizontal: 50,
                      marginVertical: 10,
                    }}
                    onPress={() => loginHandle(data.phone, data.password)}
                  />
                </View>
                <View style={styleLogin.taction}>
                  <Text
                    style={styleLogin.tactionLogin}
                    onPress={() => navigation.navigate('Register')}>
                    Bạn chưa có tài khoản? <Text
                      style={styleLogin.tactionLoginText}
                      onPress={() =>
                        props.navigation.navigate('REGISTER')
                      }
                    >Đăng ký</Text>
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
