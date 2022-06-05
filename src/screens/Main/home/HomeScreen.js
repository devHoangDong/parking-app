import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import userApi from '../../../api/userApi';
import ListViewParking from '../list-view-parking/ListViewParking';
import ListParking from './ListParking';
import ListViewParkingCurrent from './ListViewParkingCurrent';
import ParkingDetail from './ParkingDetail';

const Stack = createNativeStackNavigator();
const HomeScreen = ({ navigation }) => {

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="ListParking"
          component={ListParking}
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
        <Stack.Screen
          name="ListViewParkingCurrent"
          component={ListViewParkingCurrent}
          options={{
            title: 'Danh sách vị trí',
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
