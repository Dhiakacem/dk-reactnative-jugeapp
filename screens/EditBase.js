import { StyleSheet, View, Dimensions, ScrollView, Image } from "react-native";
import React from "react";
import {  NativeBaseProvider } from "native-base";

const EditBase = () => {
    const { width, height } = Dimensions.get("window");
    const logo = require("../assets/logo.png");

  return (
<View styles={styles.container}>
      <ScrollView>
        <View style={styles.Middle}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={logo}
            width={width - 300}
            height={height - 800}
          />
        </View>
        </ScrollView>
    </View>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <EditBase />
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
      },
    
      Middle: {
        alignItems: "center",
        justifyContent: "center",
      },
      logo: {
        marginTop: 120,
        marginBottom:120,
      },
});
