import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
  Dimensions
} from "react-native";
import { format } from "date-fns";
import vi from 'date-fns/locale/vi'
//galio
import { Block, Text, theme } from "galio-framework";
import { Button } from 'react-native-elements';
import VideoPlayer from "react-native-video-player";
const sample = require('./../../../assets/videos/outpy.mp4')
//argon

const { width } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;
const cardWidth = width - theme.SIZES.BASE * 2;

const ParkingDetail = ({ navigation }) => {
  return (
    <Block flex center style={styles.articles}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.articles}
        flex={1}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
          <VideoPlayer
            video={sample}
            videoWidth={1600}
            videoHeight={900}
            showDuration={false}
            autoplay
            muted
            loop
            hideControlsOnStart
            disableSeek
            pauseOnPress
            fullScreenOnLongPress
          />
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
            }}
          >
            <Button
              title={'Xem vị trí còn trống'}
              buttonStyle={{ backgroundColor: '#95CD41', height: 48, paddingHorizontal: 40, marginTop: 20 }}
              onPress={() =>
                navigation.navigate('ListViewParkingCurrent')}
            // navigation.navigate(
            // 'ListViewParkingNavigation',
            // {},
            // NavigationActions.navigate({
            //   routeName: 'ListViewParking'
            // })
            ></Button>
          </View>
        </View>
        {/* {route.params?.item?.detail()} */}
      </ScrollView>
    </Block>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE,
    paddingHorizontal: theme.SIZES.BASE * 2,
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
  productItem: {
    width: cardWidth - theme.SIZES.BASE * 2,
    marginHorizontal: theme.SIZES.BASE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 7 },
    shadowRadius: 10,
    shadowOpacity: 0.2
  },
  productImage: {
    width: cardWidth - theme.SIZES.BASE,
    height: cardWidth - theme.SIZES.BASE,
    borderRadius: 3
  },
  productPrice: {
    paddingTop: theme.SIZES.BASE,
    paddingBottom: theme.SIZES.BASE / 2
  },
  productDescription: {
    paddingTop: theme.SIZES.BASE
    // paddingBottom: theme.SIZES.BASE * 2,
  },
  date: {
    padding: theme.SIZES.BASE / 2,
    paddingBottom: 0
  }
});

export default ParkingDetail;
