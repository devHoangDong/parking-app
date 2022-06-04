import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
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
import { useTheme } from 'react-native-paper';
import InteractiveTextInput from "react-native-text-input-interactive";
import TouchID from 'react-native-touch-id';
import { useDispatch } from 'react-redux';
import activeApi from '../../../api/activeApi';
import styleLogin from '../../../assets/styles/styleLogin';
import { useAuth } from '../../../context/authcontext';

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
  const { theme, navigation } = props;
  const dispatch = useDispatch();
  const { signIn } = useAuth();
  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState(null);
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isSupportAuth, setIsSupportAuth] = useState([]);
  const [isImageTouch, setIsImagesTouch] = useState(touchImages1);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(EResult);
  const [visible, setVisible] = useState(false);
  const [inputOTP, setInputOTP] = useState();
  const [dataUser, setDataUser] = useState()
  const emptyDataActive = {
    "activecode": "",
    "mobileToken": ""
  }
  const [dataActive, setDataActive] = useState(emptyDataActive);
  const updateField = (value, field) => {
    let newData = { ...dataActive };
    newData[field] = value;
    setDataActive(newData)
  }
  const [data, setData] = useState({
    phone: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });
  const { colors } = useTheme();
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

  const handleValidUser = val => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const checkTouchId = () => {
    TouchID.isSupported()
      .then(biometryType => {
        // Success code
        if (biometryType === 'FaceID') {
          console.log('FaceID is supported.');
        } else if (biometryType === 'TouchID') {
          console.log('TouchID is supported.');
        } else if (biometryType === true) {
          console.log('Touch ID is supported on Android');
          // Touch ID is supported on Android
        }
      })
      .catch(error => {
        // Nếu thiết bị của người dùng không hỗ trợ Touch ID và Face ID
        console.log(error);
      });
  };
  const clickHandler = () => {
    TouchID.isSupported()
      .then(authenticate())
      .catch(error => {
        alert('TouchID not supported');
      });
  }
  const authenticate = async () => {
    return TouchID.authenticate()
      .then(success => {
        getCredentials().then(credentials => {
          let username = credentials.username;
          let pass = JSON.parse(credentials.password);
          loginHandle(username, pass.toString());
        }
        )
        // setCredentials(user_name, JSON.stringify({ password }));
        // alert('Authenticated Successfully');
      })
      .catch(error => {
        console.log(error)
        alert(error.message);
      });
  }
  const setCredentials = async (username, password) => {
    return new Promise((resolve, reject) => {
      // Store the credentials
      Keychain.setGenericPassword(username, password)
        .then(resp => {
          resolve(true)
        })
        .catch(err => {
          console.log("err: ", err);
          reject(err);
        });
    });
  }
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
  const resetCredentials = async () => {
    return new Promise((resolve, reject) => {
      Keychain.resetGenericPassword()
        .then((response) => {
          // console.log('response', response);
          resolve(response);
        })
        .catch(err => {
          console.log("err: ", err);
          reject(err);
        });
    });
  }
  const loginHandle = async (phone, password) => {
    console.log('password: ', password);
    console.log('phone: ', phone);
    try {
      let dataAuth = JSON.parse(dataUser.username);
      console.log('dataAuth: ', dataAuth);
      console.log('dataUser?.password: ', dataUser?.password);
      if (phone === dataAuth?.phone && password === dataUser?.password) {
        console.log('phone === dataAuth?.phone: ', phone === dataAuth?.phone);
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
  const handleActive = async () => {
    try {
      let dataActiveSend = {
        ...dataActive,
        activecode: inputOTP,
      };
      const result = await activeApi.active(dataActiveSend);
      if (result) {
        const { statuscode, message, data, error } = result;
        if (statuscode === 1000) {
          Alert.alert('Tài khoản của bạn đã được kích hoạt!', message, [{ text: 'Okay' }]);
          signIn(dataUser);
        } else {
          // updateField(null, 'activecode');
          Alert.alert('Thất bại!', message, [{ text: 'Ok' }]);
          toggleDialog();
        }
      }
    } catch (error) {
      // updateField(null, 'activecode');
      Alert.alert('Có lỗi xảy ra!', '', [{ text: error }]);
      toggleDialog();
    } finally {
      setInputOTP();
    }
  };
  const storeData = async (value) => {
    try {
      // const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Token', value)
    } catch (e) {
      // saving error
      console.log('saving error');
    }
  }
  const getTokenFCM = () => {
    messaging()
      .getToken(firebase.app().options.messagingSenderId)
      .then(x => updateField(x, "mobileToken"))
      .catch(e => console.log(e));
  }
  const toggleDialog = (data) => {
    setVisible(!visible)
  }
  const handleCancelOTP = () => {
    toggleDialog();
    updateField(null, 'activecode');
    setInputOTP();
  }
  useEffect(() => {
    checkTouchId();
  }, []);

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
                    >Đăng kí</Text>
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
const styles = StyleSheet.create({
  FormInput: {
    marginVertical: theme.SIZES.BASE,
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#747474',
    backgroundColor: '#fff',
    width: '100%',
  },
  input: {
    width: '100%',
    // height: 65,
    paddingLeft: theme.SIZES.BASE / 2,
  },
  MainInput: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialogButtonContainer: {
    paddingTop: theme.SIZES.BASE / 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%'
  },
  dialogButton: {
    paddingHorizontal: theme.SIZES.BASE / 2,
    display: 'flex',
    justifyContent: 'center',
    width: '40%'
  },
  dialogContent: {
    fontWeight: 'bold'
  },
  dialogDetail: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  dialogRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: theme.SIZES.BASE / 2,
  },
  cardDialog: {
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  cardIcon: {
    padding: theme.SIZES.BASE / 2,
    backgroundColor: '#d1e7f8',
    borderRadius: 5
  },
  cardChip: {
    fontSize: 12,
    color: '#fff',
  },
  title: {
    marginTop: 22,
    color: "#fff",
    backgroundColor: "rgb(210,157,80)"
  },
  articles: {
    width: "100%",
  },
  group: {
    // paddingTop: theme.SIZES.BASE,
    width: "100%",
  },
  albumThumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  },
  category: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0
  },
  categoryTitle: {
    height: "100%",
    paddingHorizontal: theme.SIZES.BASE,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  imageBlock: {
    overflow: "hidden",
    borderRadius: 4
  },
  date: {
    padding: theme.SIZES.BASE / 2,
    paddingBottom: 0
  },
  card: {
    backgroundColor: theme.COLORS.WHITE,
    borderWidth: 0,
    display: 'flex',
    margin: theme.SIZES.BASE / 2,
    marginHorizontal: theme.SIZES.BASE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.SIZES.BASE / 2,
    borderRadius: 5
  },
  cardTitle: {
    fontWeight: "bold",
    flexWrap: 'wrap',
  },
  cardContent: {
    flexWrap: 'wrap',
    fontSize: 14,
  },
  cardDescription: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: theme.SIZES.BASE / 2,
    // justifyContent: 'space-around'
  },
  cardTitleContain: {
    padding: theme.SIZES.BASE / 2,
  },
  imageContainer: {
    borderRadius: 3,
    elevation: 1,
    overflow: 'hidden',
  },
  image: {
    // borderRadius: 3,
  },
  horizontalImage: {
    height: 122,
    width: 'auto',
  },
  horizontalStyles: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  fullImage: {
    height: 215
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default withTheme(LoginScreen);
