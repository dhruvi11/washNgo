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
import { responsiveScreenHeight, responsiveScreenWidth } from "../utils/Size";

const SplashScreen = ({ navigation }) => {
  // UseEffect ======================================================================================
  useEffect(async () => {
    setTimeout(async () => {
     navigation.navigate("LetsStartScreen");
    }, 3000);
  });

  // Render ======================================================================================
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.container}> */}
        <Image
          source={images.splashIcon}
          resizeMode="cover"
          style={styles.imageicon}
        />
      {/* </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: Color.white,
    justifyContent: "center",
    alignItems: "center",
  },
  imageicon: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default SplashScreen;
