import { View, Text, Image, Dimensions, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { NativeBaseProvider  } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { ImageBackground } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function CardItem() {
  const logo = require("../assets/logo.png");
  const image1 = require("../assets/image_1.jpg");
  const image2 = require("../assets/image_2.jpg");
  const image3 = require("../assets/image_3.jpg");
  const image4 = require("../assets/image_4.jpg");
  const image5 = require("../assets/image_5.jpg");
  const { width, height } = Dimensions.get("window");
  const navigation = useNavigation();


  return (
    <View styles={styles.container}>
      <ScrollView>
      <View style={styles.head}>
        <Text
          style={styles.backButton}
          onPress={() => navigation.navigate("Choice")}
        >
          <AntDesign name="left" size={25} color="gray" />
        </Text>
      </View>
        <View style={styles.Middle}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={logo}
            width={width - 300}
            height={height - 800}
          />
          <Text style={styles.question}>قم باختيار التخصص</Text>
        </View>

        <View styles={styles.CardImage}>
          <TouchableOpacity onPress={() => navigation.navigate("Card")}>
            <ImageBackground
              styles={styles.image}
              source={image1}
              resizeMode="cover"
              margin={20}
              borderRadius={20}
            >
              <Text style={styles.text}>الدائرة الجنائية </Text>
            </ImageBackground>
          </TouchableOpacity>
          <ImageBackground
            styles={styles.image}
            source={image2}
            resizeMode="cover"
            margin={20}
            borderRadius={20}
          >
            <Text style={styles.text}>حكم جناحي</Text>
          </ImageBackground>
          <ImageBackground
            styles={styles.image}
            source={image3}
            resizeMode="cover"
            margin={20}
            borderRadius={20}
          >
            <Text style={styles.text}>قاضي الأطفال</Text>
          </ImageBackground>
          <ImageBackground
            styles={styles.image}
            source={image4}
            resizeMode="cover"
            margin={20}
            borderRadius={20}
          >
            <Text style={styles.text}> قاضي الناحية</Text>
          </ImageBackground>
          <ImageBackground
            styles={styles.image}
            source={image5}
            resizeMode="cover"
            margin={20}
            borderRadius={20}
          >
            <Text style={styles.text}>قاضي الشيكات </Text>
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <CardItem />
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
    marginTop: 30,
    
  },
  question: {
    marginTop: 15,
    fontSize: 26,
    marginBottom: 20,
    fontWeight: "SemiBold",
  },

  image: {
    marginTop: 40,
    marginRight: 18,
    marginLeft: 18,
    justifyContent: "center",
    marginBottom: 10,
  },
  text: {
    color: "white",
    fontSize: 34,
    lineHeight: 110,
    textAlign: "center",
  },
  CardImage: {
    marginTop: 20,
    justifyContent: "center",
  },
  head: {
    marginTop: 70,
    flexDirection: "row",
  },
  backButton: {
    marginLeft: 20,
  },
});
