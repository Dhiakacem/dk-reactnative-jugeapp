import {
  Alert,
  Dimensions,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Button,
  Center,
  Image,
  NativeBaseProvider,
  ScrollView,
} from "native-base";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

const DATA = [
  {
    id: 1,
    text: "الاعتداء بالعنف الشديد علي موظف من النظام العدلي",
  },
  { id: 2, text: " مشاركة في ضجيج من شأنها تعكير راحة السكان" },
  { id: 3, text: "الاعتداء بالعنف الناجم عنه موت دون قصد القتل  " },
  { id: 4, text: "مباشرة مهنة بائع متجول أو موزع بدون سابق أعلام" },
  { id: 5, text: "الادلاء باسم أو مقر غير صحيح عند دعوته لذلك بوجه قانوني" },
];

const CrimeScreen = () => {
  const { width, height } = Dimensions.get("window");
  const logo = require("../assets/logo.png");
  const navigation = useNavigation();
  const [data, setData] = useState(DATA);
  const [isRender, setisRender] = useState(false);
  const [isModelVisible, setisModelVisible] = useState(false);
  const [inputText, setinputText] = useState();
  const [editItem, seteditItem] = useState();

  const onPressItem = (item) => {
    setisModelVisible(true);
    setinputText(item.text);
    seteditItem(item.id);
  };

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() => onPressItem(item)}>
        <Text style={styles.text}>{item.text}</Text>
      </TouchableOpacity>
    );
  };

  const handleEditItme = () => {
    const newData = data.map((item) => {
      if (item.id == editItem) {
        item.text = inputText;
        return item;
      }
      return item;
    });
    setData(newData);
    setisRender(!isRender);
  };
  const onPressSaveEdit = () => {
    handleEditItme(editItem);
    setisModelVisible(false);
  };

  return (
    <View styles={styles.container}>
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
          width={100}
          height={100}
          alt=""
        />

        <Text style={styles.LoginText}>الجرائم</Text>
      </View>
      <View style={{ marginTop: 20, marginLeft: 30 }}>
        <TouchableOpacity onPress={() => navigation.navigate("")}>
          <Center
            w="20"
            h="12"
            rounded="md"
            shadow={3}
            Center
            bg="#E4AD54"
            _text={{
              textAlign: "center",
              color: "white",
              fontSize: "12",
              fontFamily: "mono",
              fontWeight: "bold",
            }}
          >
            اضافة جريمة
          </Center>
        </TouchableOpacity>
      </View>
      <SafeAreaView>
        <FlatList
          data={data}
          style={styles.lefts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          extraData={isRender}
        />

        <Modal
          animationType="fade"
          visible={isModelVisible}
          onRequestClose={() => setisModelVisible(false)}
        >
          <View style={styles.Middle}>
            <Image
              style={styles.logo1}
              resizeMode="contain"
              source={logo}
              width={600}
              height={100}
              alt=""
            />
            <Text style={styles.LoginText}>تغيير الجريمة</Text>
          </View>

          <View style={styles.modalView}>
            <Text style={styles.text}>تغيير نص الجريمة </Text>
            <TextInput
              style={styles.TextInput}
              onChangeText={(text) => setinputText(text)}
              defaultValue={inputText}
              editable={true}
              multiline={false}
              maxLength={350}
            />
            <TouchableOpacity
              onPress={() => onPressSaveEdit()}
              style={styles.touchableSave}
            >
              <Text style={styles.texts}>تأكيد</Text>
            </TouchableOpacity>
          </View>
          
        </Modal>
      </SafeAreaView>
    </View>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <CrimeScreen />
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  bars: { alignItems: "flex-end", margin: 16, marginTop: 20 },
  lefts: {
    alignSelf: "flex-end",
  },
  Middle: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginTop: 40,
  },
  logo1: {
    marginTop: 100,
  },
  LoginText: {
    marginTop: 15,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    marginVertical: 30,
    fontSize: 20,
    marginLeft: 10,
    borderColor: "#E4AD54",
  },
  texts: {
    marginVertical: 30,
    fontSize: 20,
    marginLeft: 10,
    borderColor: "#E4AD54",
    color: "#E4AD54",
  },

  TextInput: {
    width: "90%",
    height: 70,
    borderColor: "#E4AD54",
    borderWidth: 2,
    fontSize: 25,
  },
  modalView: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  touchableSave: {
    borderColor: "#E4AD54",
    paddingHorizontal: 100,
    alignItems: "center",
    color: "#E4AD54",
    marginTop: 20,
  },
  head: {
    marginTop: 70,
    flexDirection: "row",
  },
  backButton: {
    marginLeft: 20,
  },
});
