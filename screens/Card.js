import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Center,
  Input,
  NativeBaseProvider,
  Stack,
  Switch,
  Modal,
  FormControl,
  Button,
  Checkbox,
} from "native-base";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Card = () => {
  const logo = require("../assets/logo.png");
  const navigation = useNavigation();
  const { width, height } = Dimensions.get("window");
  const [isSelected, setSelection] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <View styles={styles.container}>
      <ScrollView>
      <View style={styles.head}>
        <Text
          style={styles.backButton}
          onPress={() => navigation.navigate("CardItem")}
        >
          <AntDesign name="left" size={25} color="gray" />
        </Text>
      </View>
        <View style={styles.Middle}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={logo}
            width={width - 320}
            height={height - 810}
          />
          <Text style={styles.LoginText}>الدائرة الجنائية</Text>
        </View>
        <View style={styles.buttonStyleX}>
          <View style={styles.emailInput}>
            <Text style={styles.textInput}>عدد القضّية</Text>
            <Input
              variant="outline"
              placeholder="عدد القضّية"
              width={width - 80}
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
            />
          </View>

          

          <View style={styles.emailInput}>
            <Text style={styles.textInput}>تاريخ الحكم</Text>
            <Input
              variant="outline"
              placeholder="تاريخ الحكم"
              width={width - 80}
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
            />
          </View>

          <View style={styles.emailInput}>
            <Text style={styles.textInput}>أعضاء الهيئة</Text>
            <Stack space={4}>
              <Input
                variant="outline"
                width={width - 80}
                placeholder="رئيس الدائرة "
                _light={{
                  placeholderTextColor: "blueGray.400",
                }}
                _dark={{
                  placeholderTextColor: "blueGray.50",
                }}
              />
              <Input
                variant="outline"
                width={width - 80}
                placeholder="العضو الأول "
                _light={{
                  placeholderTextColor: "blueGray.400",
                }}
                _dark={{
                  placeholderTextColor: "blueGray.50",
                }}
              />
              <Input
                variant="outline"
                width={width - 80}
                placeholder="العضو الثاني"
                _light={{
                  placeholderTextColor: "blueGray.400",
                }}
                _dark={{
                  placeholderTextColor: "blueGray.50",
                }}
              />
              <Input
                variant="outline"
                width={width - 80}
                placeholder="النيابة العمومية"
                _light={{
                  placeholderTextColor: "blueGray.400",
                }}
                _dark={{
                  placeholderTextColor: "blueGray.50",
                }}
              />
              <Input
                variant="outline"
                width={width - 80}
                placeholder="كاتب الجلسة"
                _light={{
                  placeholderTextColor: "blueGray.400",
                }}
                _dark={{
                  placeholderTextColor: "blueGray.50",
                }}
              />
              <View style={styles.checkboxContainer}>
                <Checkbox
                  size="sm"
                  value={isSelected}
                  onValueChange={setSelection}
                  onPress={() => setShowModal(true)}
                  colorScheme="yellow"
                />
                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                  <Modal.Content maxWidth="400px">
                    <Modal.Header flexDirection={"row-reverse"}>
                      {" "}
                      القائم بالحق الشخصي اذ وجد
                    </Modal.Header>
                    <Modal.Body>
                      <FormControl style={{ flexDirection: "row-reverse" }}>
                        <FormControl.Label> عدد المتّهمين </FormControl.Label>
                        <Input width={70} keyboardType="numeric" />
                      </FormControl>
                      <FormControl
                        style={{ flexDirection: "row-reverse" }}
                        mt={3}
                      >
                        <FormControl.Label>عدد المتّضررين</FormControl.Label>
                        <Input width={70} keyboardType="numeric" />
                      </FormControl>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button.Group space={2} alignSelf={"flex-start"}>
                        <Button
                          variant="outline"
                          colorScheme="darkText"
                          onPress={() => {
                            setShowModal(false);
                          }}
                        >
                          إلغاء
                        </Button>
                        <Button
                          color="black"
                          backgroundColor="#E4AD54"
                          onPress={() => {
                            setShowModal(false);
                          }}
                        >
                          تأكيد
                        </Button>
                      </Button.Group>
                    </Modal.Footer>
                  </Modal.Content>
                </Modal>

                <Text style={styles.lawyer}> القائم بالحق الشخصي اذ وجد</Text>
              </View>
            </Stack>
            <View style={{ marginTop: 60, margin: 4 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("AccuseScreen")}
              >
                <Center
                  w="20"
                  h="8"
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
                  التالي
                </Center>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <Card />
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
  LoginText: {
    marginTop: 15,
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  logo: {
    marginTop: 30,
  },
  emailInput: {
    marginTop: 10,
    alignSelf: "center",
    justifyContent: "center",
  },
  forms: {
    marginTop: 10,
    alignSelf: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
  },
  lese: {
    margin: 4,
    alignSelf: "center",
    justifyContent: "center",
    color: "#E4AD54",
  },
  buttonStyle: {
    marginTop: 5,
    marginRight: 18,
    marginLeft: 18,
  },
  buttonStyleX: {
    marginTop: 10,
  },
  textInput: {
    margin: 4,
    alignSelf: "flex-end",
    justifyContent: "center",
    color: "#E4AD54",
  },
  lawyer: {
    margin: 4,
    color: "#E4AD54",
  },

  checkbox: {
    alignSelf: "center",
  },
  checkboxContainer: {
    marginTop: 5,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  head: {
    marginTop: 70,
    flexDirection: "row",
  },
  backButton: {
    marginLeft: 20,
  },
});
