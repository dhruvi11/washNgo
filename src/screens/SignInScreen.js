import React, {useEffect,useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
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
import Button from '../component/Button';
import TextInputComp from '../component/TextInput';
import { postApiCall } from '../api/api';

const SignInScreen = ({navigation}) => {

  const [phoneNumber, setphoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Validation Call ======================================================================================

  const checkValidation = () => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const phoneNumberRegex = /^[+]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;


    if (!phoneNumberRegex.test(phoneNumber)) {
      Toast.show('Please enter valid phone number', Toast.SHORT);
    }
    if (!passwordRegex.test(password)) {
      Toast.show('Please enter valid password', Toast.SHORT);
    }
  
    if (
      passwordRegex.test(password) &&
      phoneNumberRegex.test(phoneNumber) 
    ) {
      callRegisterApi();
    }
  };

  // Api Call ======================================================================================

  const callRegisterApi = async () => {
    console.log('>>>>>>>>>>>>>>>>>>>');
    const formData = new FormData();
    // Append form fields phone,password,name
    formData.append('phone', phoneNumber);
    formData.append('password', password);
    console.log('>>>>>>>>>>>>>>>>>>>', formData);
    let response = postApiCall('login', formData);
    console.log('Data>>>>>>>>>>>>>>>>>>>', response);
    navigation.navigate("WelcomeScreen")
  };

  // Render ======================================================================================
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image
          source={images.logoIcon}
          resizeMode="contain"
          style={styles.imageicon}
        />
        <Text style={styles.signText}>Sign In</Text>
        <Text style={styles.descText}>
          {'Hi ! Welcome back, you\n have been missed '}
        </Text>

        <TextInputComp
            placeholder={'Enter Phone Number Here'}
            firstImage={'phone'}
            text={'Phone Number'}
            value={phoneNumber}
            onChangeText={phoneNumber => {
              setphoneNumber(phoneNumber);
            }}
            keyboardType={'phone-pad'}
          />

          <TextInputComp
            placeholder={'Enter Password Here'}
            firstImage={'lock'}
            secondImage={'eye'}
            text={'Password'}
            value={password}
            onChangeText={password => {
              setPassword(password);
            }}
            secureTextEntry={!showPassword}
          />

        <Text style={styles.forgotText}>{'Forgot Password?'}</Text>

        <Button text={'Sign In'} onPress={()=>{
          checkValidation()
        }} />

        <View style={styles.orView}>
          <View style={styles.leftLine} />
          <Text style={styles.signText2}>or</Text>
          <View style={styles.rightLine} />
        </View>

        <View style={[styles.orView, {margin: responsiveScreenWidth(5)}]}>
          <View style={styles.roundView}>
            <Icon
              // name={"apple"}
              name={'google'}
              size={20}
              color={Color.black}
              style={{
                alignSelf:"center"
              }}
            />
          </View>
          <View
            style={[styles.roundView, {marginStart: responsiveScreenWidth(5)}]}>
            <Icon
              name={'apple'}
              // name={"google"}
              size={20}
              color={Color.black}
              style={{
                   alignSelf:"center"
              }}
            />
          </View>
        </View>

        <Text style={styles.signText2}>
          {'Don’t have an account?'}
          <Text
            style={styles.signText1}
            onPress={() => {
              navigation.navigate('SignUpScreen');
            }}>
            {' Sign Up'}
          </Text>
        </Text>

        <Text style={styles.signText3}>
          {
            'By login or sign up, you agree to our terms of use and\n privacy policy'
          }
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  imageicon: {
    height: responsiveScreenWidth(50),
    width: responsiveScreenWidth(80),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  descText: {
    alignSelf: 'flex-start',
    textAlign: 'left',
    fontSize: responsiveScreenFontSize(1.6),
    color: Color.gray,
    fontWeight: '700',
    marginStart: responsiveScreenWidth(5),
  },
  forgotText: {
    alignSelf: 'flex-end',
    textAlign: 'right',
    fontSize: responsiveScreenFontSize(1.6),
    color: Color.gray,
    fontWeight: '700',
    marginEnd: responsiveScreenWidth(5),
    marginTop: responsiveScreenWidth(5),
    textDecorationLine: 'underline',
  },
  signText: {
    alignSelf: 'flex-start',
    textAlign: 'left',
    fontSize: responsiveScreenFontSize(2.5),
    color: Color.black,
    fontWeight: '500',
    marginStart: responsiveScreenWidth(5),
    marginTop: responsiveScreenWidth(5),
  },
  signText1: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: responsiveScreenFontSize(1.4),
    color: Color.black,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  signText2: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: responsiveScreenFontSize(1.4),
    color: Color.black,
    fontWeight: '500',
  },
  signText3: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: responsiveScreenFontSize(1.4),
    color: Color.gray,
    fontWeight: '500',
    position: 'absolute',
    bottom: 20,
  },
  orView: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  leftLine: {
    backgroundColor: Color.btnBlue,
    width: '30%',
    height: responsiveScreenWidth(0.5),
    marginTop: responsiveScreenWidth(1),
    marginEnd: responsiveScreenWidth(2),
  },
  rightLine: {
    backgroundColor: Color.btnBlue,
    width: '30%',
    height: responsiveScreenWidth(0.5),
    marginTop: responsiveScreenWidth(1),
    marginStart: responsiveScreenWidth(2),
  },
  roundView: {
    height: responsiveScreenWidth(10),
    width: responsiveScreenWidth(10),
    borderRadius: responsiveScreenWidth(10) / 2,
    borderColor: Color.btnBlue,
    borderWidth: 1,
    justifyContent:"center",
    alignItems:"center"
  },
});

export default SignInScreen;
