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

const LetsStartScreen = ({navigation}) => {
  // UseEffect ======================================================================================
  useEffect(async () => {
    // setTimeout(async () => {
    //   let isLogin = await AsyncStorage.getItem("isLogin");
    //   isLogin === "true"
    //     ? navigation.navigate("DrawerNavigator")
    //     : navigation.navigate("MemberLoginScreen");
    // }, 3000);
  });

  // Render ======================================================================================
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image
          source={images.splashIcon}
          resizeMode="cover"
          style={styles.imageicon}
        />
        <Text style={styles.descText}>
          {'Sparkle & Shine  Transform \nYour Drive with Every Wash!'}
        </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignInScreen');
          }}
          style={styles.startbtn}>
          <Text style={[styles.startText]}>Let’s Start</Text>
        </TouchableOpacity>

        <Text style={styles.signText}>
          {'Already have an account?'}
          <Text
            style={styles.signText1}
            onPress={() => {
              navigation.navigate('SignInScreen');
            }}>
            {' Sign in'}
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Color.white,
  },
  imageicon: {
    height: '60%',
    width: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  descText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: responsiveScreenFontSize(2),
    color: Color.gray,
    fontWeight: '700',
  },
  signText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: responsiveScreenFontSize(1.4),
    color: Color.black,
    fontWeight: '500',
  },
  signText1: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: responsiveScreenFontSize(1.4),
    color: Color.black,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  startText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: responsiveScreenFontSize(1.6),
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

export default LetsStartScreen;
