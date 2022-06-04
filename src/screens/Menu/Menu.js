import React, { useContext } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import style from '../../assets/styles/styleMenu';
import { AuthContext, useAuth } from '../../context/authcontext';

import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Menu({ navigation }) {
  console.log('navigation: ', navigation);
  const { signOut } = useAuth();
  //const dispatch = useDispatch();
  //const userdata = useSelector((state) => state.user.userdata);
  //const loginStatus = useSelector((state) => state.user.loginStatus);
  const loginStatus = 1;
  // useEffect(() => {});
  //   const _onPressLogout = () => {
  //     AsyncStorage.removeItem("data");
  //     dispatch(updateUser(null));
  //     dispatch(updateThongbao(0));
  //     dispatch(updateRouteThongBao({}));
  //     navigation.closeDrawer();
  //   };

  // const {signOut, toggleTheme} = useContext(AuthContext);
  const handleSignOut = async () => {
    // navigation.navigate('RootStackScreen');
    // await AsyncStorage.clear();
    // await AsyncStorage.getAllKeys()
    //   .then(keys => AsyncStorage.multiRemove(keys))
    //   .then(() => alert('success'));
    await AsyncStorage.clear();
    const result = await AsyncStorage.getAllKeys();
    // result && console.log('result: ', result);
    signOut();
    console.log('signout');
  }
  return (
    <View>
      <View style={[style.menuHead]}>
        {/* <ImageBackground
          style={style.img}
        // source={require('../../assets/images/bg_menu.png')}
        > */}
        <View
          style={[
            {
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 35,
              width: '100%',
              color: "#000"
            },
          ]}>
          {loginStatus === 1 ? (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('profile');
              }}
              style={style.avaBound}>
              <Image
                source={require('../../assets/images/avatar.png')}
                style={[style.avata]}
              />
            </TouchableOpacity>
          ) : null}
          <Text style={{ color: '#000', padding: 10 }}>
            {/* {userdata?.ho_ten} */}
            Xin chào, User
          </Text>
        </View>
        {/* </ImageBackground> */}
      </View>
      <ScrollView>
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff"
          }}>
          {loginStatus === 1 ? (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                margin: 0,
                // borderBottomWidth: 1,
                // borderColor: '#000',
                paddingBottom: 10,
                marginTop: 0,
                color: "#000"
              }}
              onPress={() => { }}></TouchableOpacity>
          ) : null}
          {loginStatus === 1 ? (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                margin: 10,
                borderBottomWidth: 1,
                borderColor: '#000',
                paddingBottom: 10,
                marginTop: 0
              }}
            //   onPress={() => {
            //     if (loginStatus === 1) {
            //       navigation.navigate("ChangePassword");
            //     }
            //   }}
            >
              <View style={{ width: 30 }}>
                <Ionicons
                  name="person-circle-outline"
                  size={20}
                  color="#000"
                  style={style.menuicon}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: Dimensions.get('screen').width - 140,
                }}>
                <Text style={{ color: '#000' }}>
                  Tài khoản
                </Text>
              </View>
            </TouchableOpacity>
          ) : null}
          {loginStatus === 1 ? (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                margin: 10,
                borderBottomWidth: 1,
                borderColor: '#000',
                paddingBottom: 10,
                marginTop: 0
              }}
              onPress={() => {
                navigation.navigate('ListViewParkingNavigation');
                navigation.closeDrawer();
              }}
            >
              <View style={{ width: 30 }}>
                <Ionicons
                  name="location-outline"
                  size={20}
                  color="#000"
                  style={style.menuicon}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: Dimensions.get('screen').width - 140,
                }}
              >
                <Text style={{ color: '#000', }}>
                  Danh sách bãi đậu xe
                  </Text>
              </View>
            </TouchableOpacity>
          ) : null}
          {loginStatus === 1 ? (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                margin: 10,
                borderBottomWidth: 1,
                borderColor: '#000',
                paddingBottom: 10,
                marginTop: 0
              }}
            //   onPress={() => {
            //     if (loginStatus === 1) {
            //       navigation.navigate("ChangePassword");
            //     }
            //   }}
            >
              <View style={{ width: 30 }}>
                <Ionicons
                  name="location-outline"
                  size={20}
                  color="#000"
                  style={style.menuicon}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  width: Dimensions.get('screen').width - 140,
                }}>
                <Text style={{ color: '#000', }}>
                  View 2
                </Text>
              </View>
            </TouchableOpacity>
          ) : null}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              margin: 10,
              borderBottomWidth: 1,
              borderColor: '#000',
              paddingBottom: 10,
              marginTop: 0
            }}
          //   onPress={() => {
          //     if (loginStatus === 1) {
          //       navigation.navigate("ChangePassword");
          //     }
          //   }}
          >
            <View style={{ width: 30 }}>
              <Ionicons
                name="location-outline"
                size={20}
                color="#000"
                style={style.menuicon}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: Dimensions.get('screen').width - 140,
              }}>
              <Text style={{ color: '#000', }}>
                View 3
                </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              margin: 10,
              borderBottomWidth: 1,
              borderColor: '#000',
              paddingBottom: 10,
              marginTop: 0
            }}
          //   onPress={() => {
          //     if (loginStatus === 1) {
          //       navigation.navigate("ChangePassword");
          //     }
          //   }}
          >
            <View style={{ width: 30 }}>
              <Ionicons
                name="location-outline"
                size={20}
                color="#000"
                style={style.menuicon}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: Dimensions.get('screen').width - 140,
              }}>
              <Text style={{ color: '#000', }}>
                View 4
                </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              margin: 10,
              borderBottomWidth: 1,
              borderColor: '#000',
              paddingBottom: 10,
              marginTop: 0
            }}
          //   onPress={() => {
          //     if (loginStatus === 1) {
          //       navigation.navigate("ChangePassword");
          //     }
          //   }}
          >
            <View style={{ width: 30 }}>
              <Ionicons
                name="location-outline"
                size={20}
                color="#000"
                style={style.menuicon}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: Dimensions.get('screen').width - 140,
              }}>
              <Text style={{ color: '#000', }}>
                View 5
                </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              margin: 10,
              borderBottomWidth: 1,
              borderColor: '#000',
              paddingBottom: 10,
              marginTop: 0
            }}
            onPress={() => {
              handleSignOut();
              // signOut();
            }}
          >
            <View style={{ width: 30 }}>
              <Ionicons
                name="log-out-outline"
                size={20}
                color="#000"
                style={style.menuicon}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: Dimensions.get('screen').width - 140,
              }}>
              <Text style={{ color: '#000', }}>
                {' '}
                {loginStatus === 1 ? 'Đăng xuất' : 'Đăng nhập'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{ flexDirection: 'row', backgroundColor: "#fff" }} onPress={() => { }}>
        <Text style={{ color: '#000', fontSize: 15, marginLeft: 15, padding: 20, paddingBottom: 30 }}>
          {'Phiên bản'} {'1.0'}{' '}{'\u00A9'} {'Parking'}
        </Text>
      </View>
    </View>
  );
}
export default Menu;
