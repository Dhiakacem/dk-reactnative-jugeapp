import { Image, NativeBaseProvider, ScrollView  } from "native-base";
import React, { useState } from "react";
import { View, Button, Text , StyleSheet} from "react-native";

const Documents = () => {
    const logo = require("../assets/logo.png");



    return (
        <View styles={styles.container}>
      <ScrollView>
        <View style={styles.Middle}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={logo}
            alt=""
          />
        </View>
        
  <Text>hello</Text>
        <Button title="Pick Document" /> 
        </ScrollView>
      </View>
    );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Documents />
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
