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
  TouchableHighlight,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// Custom ======================================================================================
import Color from '../utils/Color';
import images from '../utils/Images';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from '../utils/Size';

const TextInputComp = ({text,firstImage,placeholder,value,onChangeText,secondImage,keyboardType,secureTextEntry = false}) => {
  // Render ======================================================================================
  return (
    <View>
      <Text style={[styles.startText]}>{text}</Text>
      <View style={styles.borderStyle}>
        <Icon
          name={firstImage}
          size={20}
          color={Color.black}
          style={{
            marginStart: responsiveScreenWidth(5),
            marginTop: responsiveScreenWidth(3),
          }}
        />
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={Color.gray}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          style={styles.inputStyle}
          secureTextEntry={secureTextEntry}
        />
        {secondImage != '' ? (
          <Icon
            name={secondImage}
            size={20}
            color={Color.black}
            style={{
              marginStart: responsiveScreenWidth(5),
              marginTop: responsiveScreenWidth(3),
            }}
          />
        ) : (
          null
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  startText: {
    alignSelf: 'flex-start',
    textAlign: 'left',
    fontSize: responsiveScreenFontSize(1.8),
    color: Color.black,
    fontWeight: 'bold',
    marginStart:responsiveScreenWidth(6),
    marginTop:responsiveScreenWidth(2),
    marginBottom:responsiveScreenWidth(2)
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
  borderStyle: {
    width: '90%',
    height: responsiveScreenWidth(12),
    borderColor: Color.gray,
    borderWidth: 1,
    alignSelf: 'center',
    borderRadius: responsiveScreenWidth(2),
    flexDirection: 'row',
  },
  inputStyle: {
    color: Color.black,
    fontSize: responsiveScreenFontSize(1.8),
    marginStart: responsiveScreenWidth(2),
    width: '70%',
  },
});

export default TextInputComp;
