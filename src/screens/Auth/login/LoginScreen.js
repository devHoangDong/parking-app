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
        Alert.alert('Th??nh c??ng!', "????ng nh???p th??nh c??ng", [{ text: 'Ok' }]);
        signIn(dataAuth);
      } else {
        Alert.alert('Th???t b???i!', "S??? ??i???n tho???i ho???c m???t kh???u kh??ng ????ng", [{ text: 'Ok' }]);
      }
    } catch (error) {
      console.log('error: ', error);
      Alert.alert('C?? l???i x???y ra!');
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
                <Text style={styleLogin.titleText}>????ng nh???p t??i kho???n</Text>
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
                    placeholder="S??? ??i???n tho???i"
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
                    title={'????NG NH???P'}
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
                    B???n ch??a c?? t??i kho???n? <Text
                      style={styleLogin.tactionLoginText}
                      onPress={() =>
                        props.navigation.navigate('REGISTER')
                      }
                    >????ng k??</Text>
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
