import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  Center,
  NativeBaseProvider,
  VStack,
} from "native-base";
import { Image } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";



const Drawer = createDrawerNavigator();

const Choice = () => {
  const { width, height } = Dimensions.get("window");
  const logo = require("../assets/logo.png");
  const navigation = useNavigation();

  return (
    <View styles={styles.container}>
      <ScrollView>
        <View style={styles.Middle}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={logo}
            width={100}
            height={100}
          />
        </View>
        <View styles={styles.Card}>
          <VStack marginTop={60} space={10} alignItems="center">
            <TouchableOpacity onPress={() => navigation.navigate("CardItem")}>
              <Center
                w="72"
                h="16"
                rounded="md"
                shadow={3}
                Center
                bg="#E4AD54"
                _text={{
                  textAlign: "center",
                  color: "white",
                  fontSize: "18",
                  fontFamily: "mono",
                  fontWeight: "bold",
                }}
              >
                البدء في إجراءات قرار ختم التحقيق
              </Center>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("CrimeScreen")}>
              <Center
                w="72"
                h="16"
                rounded="md"
                shadow={3}
                Center
                bg="#E4AD54"
                _text={{
                  textAlign: "center",
                  color: "white",
                  fontSize: "18",
                  fontFamily: "mono",
                  fontWeight: "bold",
                }}
              >
                تعديل الجرائم
              </Center>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("CrimeScreen")}>
              <Center
                w="72"
                h="16"
                rounded="md"
                shadow={3}
                Center
                bg="#E4AD54"
                _text={{
                  textAlign: "center",
                  color: "white",
                  fontSize: "18",
                  fontFamily: "mono",
                  fontWeight: "bold",
                }}
              >
                تعديل الفصول القانونية
              </Center>
            </TouchableOpacity>
          </VStack>
        </View>
      </ScrollView>
    </View>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Choice />
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  bars: { alignItems: "flex-end", margin: 16, marginTop: 20 },

  Middle: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginTop: 100,
    marginBottom: 70,
  },
  Card: {
    marginTop: 160,
    justifyContent: "center",
  },
  barss: {
    alignItems: "flex-end",
    marginTop: 50,
    marginRight: 20,
  },
});
