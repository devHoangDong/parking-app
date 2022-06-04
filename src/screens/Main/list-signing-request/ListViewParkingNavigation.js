import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ListViewParking from './ListViewParking';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ListViewParkingNavigation = ({ navigation }) => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="ListViewParking">
        <Stack.Screen
          name="ListViewParking"
          component={ListViewParking}
          options={{
            title: 'Parking',
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ListViewParkingNavigation;
