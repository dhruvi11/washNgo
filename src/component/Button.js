import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
// Custom ======================================================================================
import Color from '../utils/Color';
import images from '../utils/Images';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../utils/Size';

const Button = (props) => {
  // Render ======================================================================================
  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress();
      }}
      style={styles.startbtn}>
      <Text style={[styles.startText]}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  startText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: responsiveScreenFontSize(2.2),
    color: Color.black,
    fontWeight: 'bold',
  },
  startbtn: {
    backgroundColor: Color.btnBlue,
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: responsiveScreenWidth(7),
    height: responsiveScreenWidth(13),
    marginBottom: responsiveScreenWidth(5),
    marginTop: responsiveScreenWidth(10),
  },
});

export default Button;
