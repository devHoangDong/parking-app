import React, { useEffect } from 'react';
import { SafeAreaView, View, Text, StatusBar, Alert } from 'react-native';
import styleHome from '../../../assets/styles/styleHome';
import userApi from '../../../api/userApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import firebase from '@react-native-firebase/app';
import { Platform } from 'react-native';
import PushNotification from 'react-native-push-notification';
import SearchBar from "react-native-dynamic-search-bar";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListParking from './ListParking';
import ParkingDetail from './ParkingDetail';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Stack = createNativeStackNavigator();
const HomeScreen = ({ navigation }) => {
  const getUser = async () => {
    try {
      const result = await userApi.getInfoUser();
      if (result) {
        const { statuscode, message, data, error } = result;
        if (statuscode === 1000) {
        } else {
          Alert.alert('Thất bại!', message, [{ text: 'Ok' }]);
        }
      }
    } catch (error) {
      Alert.alert('Có lỗi xảy ra!', '', [{ text: error }]);
    }
  };
  // useEffect(() => {
  //   // requestUserPermission();
  //   messaging()
  //     .getToken(firebase.app().options.messagingSenderId)
  //     .then(x => console.log(x))
  //     .catch(e => console.log(e));
  // }, [])
  // useEffect(() => {
  //   // const token = await AsyncStorage.getItem('@storage_Token');
  //   // token && console.log('token: ', token);
  //   getUser();
  // }, [])
  // useEffect(() => {
  //   firebase.messaging().onMessage(response => {
  //     console.log(JSON.stringify(response));
  //     if (Platform.OS !== 'ios') {
  //       showNotification(response.notification);
  //       const { title, body } = response.notification;
  //       Alert.alert(title, body);
  //       return;
  //     }
  //     // PushNotificationIOS.requestPermissions().then(() =>
  //     //   showNotification(response.notification!),
  //     // );
  //   });
  // }, []);
  const showNotification = (notification) => {
    PushNotification.localNotification({
      title: notification.title,
      message: notification.body,
    });
  };
  // const channel = new firebase.notifications.Android.Channel('test-channel', 'Test Channel', firebase.notifications.Android.Importance.Max)
  //   .setDescription('My apps test channel');
  // console.log('my chanel id = ', channel);
  // firebase.notifications().android.createChannel(channel);
  // return (
  //   <SafeAreaView style={styleHome.container}>
  //     <StatusBar style="dark" />
  //     <View
  //       style={{
  //         // paddingHorizontal: 20,
  //         paddingBottom: 20,
  //         paddingTop: 20,
  //       }}>
  //       <SearchBar
  //         fontColor="rgba(#c6c6c6,60%)"
  //         iconColor="#c6c6c6"
  //         shadowColor="#282828"
  //         cancelIconColor="#c6c6c6"
  //         placeholder="Tìm kiếm bãi đậu"
  //         onChangeText={text => {
  //           console.log(text)
  //         }}
  //         onPressCancel={() => {
  //           console.log("");
  //         }}
  //         onPress={() => alert("onPress")}
  //       />
  //     </View>
  //   </SafeAreaView>
  // );
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="ListParking"
          component={ListParking}
          // options={{
          //   title: 'Trang chủ',
          //   // headerShown: false,
          //   headerStyle: {
          //     backgroundColor: '#f4511e',
          //   },
          //   headerTintColor: '#fff',
          //   headerTitleStyle: {
          //     fontWeight: 'bold',
          //   },
          // }}
          options={{
            title: 'Trang chủ',
            headerStyle: {
              backgroundColor: '#FFDB53',
            },
            headerTitleStyle: { fontSize: 16 },
            headerLeft: () => (
              <Icon.Button
                name="bars"
                size={25}
                style={{
                  paddingLeft: 15,
                }}
                color="#000"
                backgroundColor="#FFDB53"
                onPress={() => navigation.openDrawer()}
              ></Icon.Button>
            ),
            headerRight: () => (
              <Icon.Button
                name="bell"
                size={25}
                style={{
                  marginRight: 5
                }}
                color="#000"
                backgroundColor="#FFDB53"
              // onPress={() => navigation.openDrawer()}
              ></Icon.Button>
            ),
          }}
        />
        <Stack.Screen
          name="ParkingDetail"
          component={ParkingDetail}
          options={{
            title: 'Chi tiết',
            headerStyle: {
              backgroundColor: '#FFDB53',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeScreen;
