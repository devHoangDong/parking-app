import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import {
  createStackNavigator
} from '@react-navigation/stack';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from '../screens/Main/home/HomeScreen';
import ListViewParkingNavigation from '../screens/Main/list-view-parking/ListViewParkingNavigation';

const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainNavigator = (props) => {
  return (
    <Tab.Navigator
      initialRouteName="Home1"
      activeColor="#fff"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: '#95CD41' },
        tabBarInactiveTintColor: '#6f7394',
        tabBarActiveTintColor: '#000',
        tabBarLabelStyle: {
          fontSize: 14,
          margin: 0,
          padding: 0,
        },
      }}
    >
      <Tab.Screen
        name="HomeStackScreen"
        // children={props => (
        //   <HomeStackScreen {...props} />
        // )}
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Trang chủ",
          tabBarColor: '#FFDB53',
          tabBarIcon: ({ color }) => <Icon name="home" color={color} size={20} />,
        }}
      />
      <Tab.Screen
        name="ListViewParkingNavigation"
        component={ListViewParkingNavigation}
        options={{
          tabBarLabel: 'Danh sách bãi đậu xe',
          tabBarColor: "#FFDB53",
          tabBarIcon: ({ color }) => (
            <Icon name="map-marker-alt" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ListViewParkingNavigation}
        options={{
          tabBarLabel: 'Tài khoản',
          tabBarColor: '#232642',
          tabBarIcon: ({ color }) => <Icon name="clock" color={color} size={20} />,
        }}
      />
    </Tab.Navigator>
  )
};
export default MainNavigator;

const HomeStackScreen = (props) => {
  const navigation = useNavigation();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#FFDB53',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Trang chủ',
          headerLeft: () => (
            <Icon.Button
              name="bars"
              size={25}
              style={{
                marginLeft: 15
              }}
              backgroundColor="transparent"
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
              backgroundColor="transparent"
            // onPress={() => navigation.openDrawer()}
            ></Icon.Button>
          ),
        }}
      />
    </HomeStack.Navigator>
  )
};
