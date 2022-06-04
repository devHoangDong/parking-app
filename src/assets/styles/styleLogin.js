import { StyleSheet, Dimensions } from 'react-native';
import { AuthContextProvider } from '../../context/authcontext';
// import Constants from 'expo-constants';

const TEXT = {
  color: '#fff',
  textAlign: 'center',
};
const { width: ScreenWidth } = Dimensions.get("screen");


const styleLogin = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    //paddingTop:'30%',
  },
  logo: {
    marginTop: 100,
    marginLeft: 100,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 18,
    fontFamily: "Roboto",
    color: '#000',
    paddingBottom: 10
  },
  tview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tform: {
    flex: 2,
  },
  thello: {
    ...TEXT,
    //paddingTop:'10%',
    fontWeight: 'bold',
    fontSize: 18,
  },
  tMessTouchID: {
    color: 'red',
    textAlign: 'center',
    //paddingTop:'10%',
    fontWeight: 'bold',
    fontSize: 13,
  },
  tTouch: {
    backgroundColor: '#ccc',
    marginTop: 35,
    marginRight: 200,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  tImagesTouch: {
    backgroundColor: '#ccc',
    height: 50,
    aspectRatio: 48 / 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  inputPin: {
    height: 48,
    marginTop: 10,
    width: ScreenWidth * 0.8,
    //margin:"5%",
    paddingLeft: 22,
    // borderWidth: 1,
    // padding: 1,
    // borderColor: 'gray',
    // textAlign: 'left',
    borderRadius: 30,
    fontSize: 16,
    textShadowColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#f8f8ff',
  },
  inputPass: {
    height: 48,
    // marginTop: 10,
    // marginLeft: 50,
    // marginRight: 50,
    maxWidth: ScreenWidth * 0.8,
    //margin:"5%",
    // paddingLeft: 22,
    // borderWidth: 1,
    // padding: 1,
    // borderColor: 'gray',
    textAlign: 'left',
    borderRadius: 30,
    fontSize: 16,
    textShadowColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#f8f8ff',
  },
  tinyLogo: {
    width: '100%',
    height: null,
    aspectRatio: 667 / 118,
    marginTop: '25%',
    resizeMode: 'contain',
  },
  tbuttonLogin: {
    width: '55%',
    backgroundColor: '#D29D50',
    marginTop: 35,
    marginLeft: 50,
    marginRight: 15,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  tbuttonLoginText: {
    ...TEXT,
  },
  taction: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tactionLogin: {
    ...TEXT,
    marginTop: 3,
    color: "#000"
  },
  tactionLoginText: {
    color: "#95CD41",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 4
  },
  tactionFogotPass: {
    ...TEXT,
  },
  tactionExitAccount: {
    ...TEXT,
    marginTop: 35,
    marginRight: 55,
  },
  ticonUser: {
    position: 'absolute',
    top: 25,
    left: 70,
    zIndex: 1,
  },
  ticonPass: {
    position: 'absolute',
    top: 80,
    left: 70,
    zIndex: 1,
  },
  ticonPassHide: {
    position: 'absolute',
    top: 80,
    left: '75%',
    zIndex: 1,
  },
  tfooter: {
    flex: 1,
  },
  tfooterText: {
    ...TEXT,
    fontSize: 11,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
    marginTop: 10,
    marginLeft: 50,
    marginRight: 50,
  },
});

export default styleLogin;
