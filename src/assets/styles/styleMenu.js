import { StyleSheet } from 'react-native';
const menuStyles = StyleSheet.create({
  img: {
    flex: 1,
    backgroundColor: "#95CD41"
  },
  avata: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: '#fff',
  },
  avaBound: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: '#fff',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHead: {
    color: '#fff',
    fontWeight: 'bold',
  },
  menuHead: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    //borderBottomWidth: 1,
    //borderColor: "#1477bd",
    shadowColor: '#000000',
    backgroundColor: '#95CD41',
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  menuicon: {
    width: 20,
    height: 20,
  },
});

export default menuStyles;
