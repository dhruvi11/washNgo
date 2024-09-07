import React, { useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from "react-native";
// Custom ======================================================================================
import Color from "../utils/Color";
import images from "../utils/Images";
import {responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "../utils/Size";
import Button from '../component/Button';

const WelcomeScreen = ({ navigation }) => {
  // UseEffect ======================================================================================
  useEffect(async () => {
  
  });

  // Render ======================================================================================
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
      <Image
          source={images.logoIcon}
          resizeMode="contain"
          style={styles.imageicon}
        />
        <Text style={styles.signText}>Welcome Ramesh</Text>

        <Button text={'Log Out'} onPress={()=>{
          navigation.navigate("SignInScreen")
        }}/>
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
  signText: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: responsiveScreenFontSize(3.5),
    color: Color.black,
    fontWeight: '500',
    marginBottom: responsiveScreenWidth(25),
    marginTop: responsiveScreenWidth(10),
  },
});

export default WelcomeScreen;
