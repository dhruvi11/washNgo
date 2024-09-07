import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-simple-toast';
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
import {postApiCall} from '../api/api';

const SignUpScreen = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmail] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isAgree, setIsAgree] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Validation Call ======================================================================================

  const checkValidation = () => {
    const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const phoneNumberRegex = /^[+]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;

    console.log('emailAddress', phoneNumber);
    console.log('emailAddress', emailAddress);
    console.log('fullName', fullName);
    console.log('password', password);

    if (!nameRegex.test(fullName)) {
      Toast.show('Please enter valid full name', Toast.SHORT);
    }
    if (!phoneNumberRegex.test(phoneNumber)) {
      Toast.show('Please enter valid phone number', Toast.SHORT);
    }
    if (!passwordRegex.test(password)) {
      Toast.show('Please enter valid password', Toast.SHORT);
    }
    if (!isAgree) {
      Toast.show('Please agree with Term and Condition', Toast.SHORT);
    }
    if (
      passwordRegex.test(password) &&
      nameRegex.test(fullName) &&
      phoneNumberRegex.test(phoneNumber) &&
      isAgree
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
    formData.append('name', fullName);
    console.log('>>>>>>>>>>>>>>>>>>>', formData);
    let response = postApiCall('register', formData);
    console.log('Data>>>>>>>>>>>>>>>>>>>', response);
    navigation.navigate("WelcomeScreen")
  };

  // Render ======================================================================================
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <Image
            source={images.logoIcon}
            resizeMode="contain"
            style={styles.imageicon}
          />
          <Text style={styles.signText}>Sign Up</Text>

          <Text style={styles.descText}>
            {'Fill in the below form and add life to \nyour car!'}
          </Text>

          <TextInputComp
            placeholder={'Enter Full Name Here'}
            firstImage={'user'}
            text={'Full Name'}
            value={fullName}
            onChangeText={name => {
              setFullName(name);
            }}
          />

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

          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              flexDirection: 'row',
              marginTop: responsiveScreenWidth(5),
            }}>
            <TouchableOpacity
              onPress={() => {
                setIsAgree(!isAgree);
              }}
              style={{
                borderColor: Color.gray,
                borderWidth: 1,
                height: responsiveScreenWidth(5),
                width: responsiveScreenWidth(5),
                borderRadius: responsiveScreenWidth(1),
              }}>
              <Icon
                name={'thumbs-up'}
                size={10}
                color={isAgree ? Color.black : Color.white}
                style={{
                  alignSelf: 'center',
                  marginTop: responsiveScreenWidth(0.6),
                }}
              />
            </TouchableOpacity>
            <Text style={styles.forgotText}>
              {'Agree with '}{' '}
              <Text
                style={[
                  styles.forgotText,
                  {color: Color.gray, textDecorationLine: 'underline'},
                ]}>
                {'Terms & Conditions'}
              </Text>
            </Text>
          </View>

          <Button
            text={'Sign In'}
            onPress={() => {
              checkValidation();
            }}
          />

          <Text style={styles.signText2}>
            {'Already have an account?'}
            <Text
              style={styles.signText1}
              onPress={() => {
                navigation.navigate('WelcomeScreen');
              }}>
              {' Sign In'}
            </Text>
          </Text>

          <Text style={styles.signText3}>
            {
              'By login or sign up, you agree to our terms of use and\n privacy policy'
            }
          </Text>
        </View>
      </ScrollView>
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
    alignSelf: 'flex-start',
    textAlign: 'left',
    fontSize: responsiveScreenFontSize(1.5),
    color: Color.black,
    fontWeight: '500',
    marginEnd: responsiveScreenWidth(5),
    marginStart: responsiveScreenWidth(3),
    // textDecorationLine: 'underline',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignUpScreen;
