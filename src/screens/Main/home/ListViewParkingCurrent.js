import { Text, theme } from "galio-framework";
import React from "react";
import { ActivityIndicator, Dimensions, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { withTheme } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { usePromiseTracker } from "react-promise-tracker";
import argonTheme from '../../../constants/Theme';


const ListViewParkingCurrent = (props) => {
  const { promiseInProgress } = usePromiseTracker();

  if (promiseInProgress) {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  }
  const listViewArr = [
    {
      name: "VỊ TRÍ 1",
      id: 1,
      color: '#95CD41'
    },
    {
      name: "VỊ TRÍ 2",
      id: 2,
      color: 'red'
    },
    {
      name: "VỊ TRÍ 3",
      id: 3,
      color: '#95CD41'
    },
    {
      name: "VỊ TRÍ 4",
      id: 4,
      color: '#95CD41'
    },
    {
      name: "VỊ TRÍ 5",
      id: 5,
      color: '#95CD41'
    },
  ]
  return (
    <TouchableWithoutFeedback
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        flex={0}
      // contentContainerStyle={listSigning.length === 0 && styles.imgContainer}
      >
        {promiseInProgress && <ActivityIndicator />}
        <View style={styles.container}>
          {/* <Text style={styles.text} bold>Ứng dụng giúp bạn tìm kiếm nơi đậu đỗ xe nhanh chóng</Text> */}
          {listViewArr && listViewArr.map((item, index) => (
            <TouchableWithoutFeedback
              // onPress={() => handleApprove(item)}
              key={item.id}
            >
              {/* <View onPress={() => toggleDialog()} key={index} style={styles.card}> */}
              <View key={item.id} style={{ ...styles.card, backgroundColor: item.color }}>
                <View style={styles.cardContent}>
                  <Icon
                    name="map-marker-alt"
                    size={35}
                    color="#000"
                    backgroundColor="#FFDB53"
                    onPress={() => navigation.openDrawer()}
                  ></Icon>
                </View>
                <View style={styles.cardContent}>
                  <Text size={14} muted={true}
                    color={argonTheme.COLORS.HEADER}
                    bold
                    style={styles.cardTitle}
                  >{item.name}</Text>
                </View>
              </View>
              {/* </View> */}
            </TouchableWithoutFeedback>
          ))}
        </View>
      </ScrollView>
    </TouchableWithoutFeedback >
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: "100%",
    marginTop: 30
  },
  text: {
    fontSize: 14,
    // fontFamily: "Open Sans",
    marginTop: 13,
    marginBottom: 36,
    color: "#000"
  },
  imgDetail: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: "100%"
  },
  dialogTitle: {
    textAlign: "center",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  dialogTimer: {
    paddingHorizontal: theme.SIZES.BASE / 2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: theme.SIZES.BASE / 2,
    width: '100%'
  },
  timerDetail: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
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
    width: '50%'
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
  dialogRowCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
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
    paddingHorizontal: theme.SIZES.BASE / 2
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
  date: {
    padding: theme.SIZES.BASE / 2,
    paddingBottom: 0
  },
  card: {
    width: 90,
    height: 90,
    borderRadius: 10,
    backgroundColor: theme.COLORS.WHITE,
    borderWidth: 0,
    display: 'flex',
    marginHorizontal: 10,
    marginBottom: 36,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
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
  backImg: {
    height: 100,
    width: 100,
    marginBottom: theme.SIZES.BASE / 2,
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

export default withTheme(ListViewParkingCurrent);
