import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Button,
  Center,
  Checkbox,
  FormControl,
  Input,
  Modal,
  NativeBaseProvider,
  Radio,
  Stack,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";

const AccuseScreen = () => {
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
            onPress={() => navigation.navigate("Card")}
          >
            <AntDesign name="left" size={25} color="gray" />
          </Text>
        </View>
        <View style={styles.Middle}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={logo}
            width={600}
            height={100}
          />
          <Text style={styles.LoginText}>المتهم</Text>
          <View style={styles.Input1}>
            <Input
              variant="outline"
              placeholder="التَهمة"
              width={width - 120}
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
            />
          </View>
        </View>
        <View style={styles.Inputforms} width={width - 10}>
          <View style={styles.emailInput}>
            <Input
              variant="outline"
              placeholder="اسم المتهم"
              width={width / 3}
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
            />
          </View>
          <View style={styles.emailInput}>
            <Input
              variant="outline"
              placeholder="  اسم الاب"
              width={width / 3}
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
            />
          </View>
          <View style={styles.emailInput}>
            <Input
              variant="outline"
              placeholder="  اسم الجد "
              width={width / 3}
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
            />
          </View>
        </View>
        <View style={styles.Inputforms} width={width - 10}>
          <View style={styles.emailInput}>
            <Input
              variant="outline"
              placeholder="اللًقب"
              width={width / 3}
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
            />
          </View>
          <View style={styles.emailInput}>
            <Input
              variant="outline"
              placeholder="  الجنسية "
              width={width / 3}
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
            />
          </View>
          <View style={styles.emailInput}>
            <Input
              variant="outline"
              placeholder="تاريخ الولادة"
              width={width / 3}
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
            />
          </View>
        </View>
        <View style={styles.Inputforms} width={width - 10}>
          <View style={styles.emailInput}>
            <Input
              variant="outline"
              placeholder="اسم الام"
              width={width / 3}
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
            />
          </View>
          <View style={styles.emailInput}>
            <Input
              variant="outline"
              placeholder="   المهنة "
              width={width / 3}
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
            />
          </View>
          <View style={styles.emailInput}>
            <Input
              variant="outline"
              placeholder="العنوان"
              width={width / 3}
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
            />
          </View>
        </View>
        <Text style={styles.textInput}>الحالة المدنيًّة </Text>
        <View style={styles.RadioOptions}>
          <Radio.Group
            name="exampleGroup"
            defaultValue="1"
            accessibilityLabel="pick a size"
          >
            <Stack
              direction={{
                base: "row",
              }}
              alignItems={{
                base: "flex-start",
                md: "center",
              }}
              space={4}
              w="75%"
              maxW="300px"
            >
              <Radio value="1" colorScheme="yellow" size="sm" my={1}>
                ارمل
              </Radio>
              <Radio value="2" colorScheme="yellow" size="sm" my={1}>
                مطلق
              </Radio>
              <Radio value="3" colorScheme="yellow" size="sm" my={1}>
                متزوج
              </Radio>
              <Radio value="4" colorScheme="yellow" size="sm" my={1}>
                اعزب
              </Radio>
            </Stack>
          </Radio.Group>
        </View>
        <Text style={styles.textInput}> حالته </Text>
        <View style={styles.RadioOptionsC}>
          <Radio.Group
            name="exampleGroup"
            defaultValue="1"
            accessibilityLabel="pick a size"
          >
            <Stack style={styles.stack} space={3}>
              <Radio value="1" colorScheme="yellow" size="sm">
                سراح
              </Radio>
              <Radio value="2" colorScheme="yellow" size="sm">
                ايقاف
              </Radio>
              <Radio value="3" colorScheme="yellow" size="sm">
                ايقاف بأخرى
              </Radio>
            </Stack>
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
                    نائب ان وجد
                  </Modal.Header>
                  <Modal.Body>
                    <FormControl style={{ flexDirection: "row-reverse" }}>
                      <FormControl.Label> المحامي(ة)</FormControl.Label>
                      <Input width={150} />
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

              <Text style={styles.lawyer}> نائب ان وجد</Text>
            </View>
          </Radio.Group>
        </View>
        <View style={{ marginTop: 20, margin: 20 }}>
          <TouchableOpacity onPress={() => navigation.navigate("LeseScreen")}>
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
      </ScrollView>
    </View>
  );
};

export default () => {
  return (
    <NativeBaseProvider>
      <AccuseScreen />
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  logo: {
    marginTop: 30,
  },
  head: {
    marginTop: 70,
    flexDirection: "row",
  },
  backButton: {
    marginLeft: 20,
  },
  Inputforms: {
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
  },

  emailInput: {
    marginTop: 20,
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  lawyer: {
    margin: 4,
    color: "#E4AD54",
  },

  checkbox: {
    alignSelf: "center",
  },
  checkboxContainer: {
    marginTop: 15,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  Input1: {
    marginTop: 10,
    alignSelf: "flex-end",
    justifyContent: "center",
    marginBottom: 8,
    marginEnd: 30,
  },
  textInput: {
    margin: 20,
    alignSelf: "flex-end",
    justifyContent: "center",
    color: "#E4AD54",
    marginBottom: 8,
  },
  stack: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  RadioOptions: {
    marginTop: 4,
    alignSelf: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  RadioOptionsC: {
    marginTop: 4,
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    marginBottom: 5,
    margin: 20,
  },
});
