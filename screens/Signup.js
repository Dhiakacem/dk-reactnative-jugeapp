import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import {
  Input,
  NativeBaseProvider,
  Button,
  Icon,
  Box,
  AspectRatio,
  Image,
} from "native-base";
import React, { useState } from "react";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Line } from "react-native-svg";
import { Eye } from "../assets/Eye.png";
import { EyeActive } from "../assets/EyeActive.png";

const { width, height } = Dimensions.get("window");
function Signup() {
  console.log(width, height);
  const navigation = useNavigation();
  const logo = require("../assets/i.jpg");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [seePassword, setSeePassword] = useState(true);
  const [checkValidEmail, setCheckValidEmail] = useState(false);

  const handleCheckEmail = (text) => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  };
  const checkPasswordValidity = (value) => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      return "يجب ألا تحتوي كلمة المرور على مسافات";
    }

    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    if (!isContainsUppercase.test(value)) {
      return "يجب أن تحتوي كلمة المرور على حرف كبير واحد على الأقل.";
    }

    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    if (!isContainsLowercase.test(value)) {
      return "يجب أن تحتوي كلمة المرور على حرف صغير واحد على الأقل.";
    }

    const isContainsNumber = /^(?=.*[0-9]).*$/;
    if (!isContainsNumber.test(value)) {
      return "يجب أن تحتوي كلمة المرور على رقم واحد على الأقل.";
    }

    const isValidLength = /^.{8,16}$/;
    if (!isValidLength.test(value)) {
      return "يجب أن تتكون كلمة المرور من 8 إلى 16 حرفًا.";
    }
    return null;
  };

  const handleLogin = () => {
    const checkPassowrd = checkPasswordValidity(password);
    if (!checkPassowrd) {
      navigation.replace("Login");
    } else {
      alert(checkPassowrd);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.Middle}>
          <Image style={styles.logo} resizeMode="cover" source={logo} alt="logo" />
          <Text style={styles.LoginText}>حساب جديد</Text>
        </View>
        <View style={styles.text2}>
          <Text styles={styles.textgray}> مرحبا بك</Text>
        </View>
        <View style={styles.buttonStyleX}>
          <View style={styles.emailInput}>
            <Input
              InputRightElement={
                <Icon
                  as={<FontAwesome5 name="user" />}
                  size="sm"
                  m={2}
                  _light={{
                    color: "black",
                  }}
                  _dark={{
                    color: "gray.300",
                  }}
                />
              }
              variant="outline"
              width={width - 80}
              placeholder="الاسم"
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
            />

            <View style={styles.emailInput}>
              <Input
                InputRightElement={
                  <Icon
                    as={<FontAwesome5 name="user" />}
                    size="sm"
                    m={2}
                    _light={{
                      color: "black",
                    }}
                    _dark={{
                      color: "gray.300",
                    }}
                  />
                }
                variant="outline"
                width={width - 80}
                placeholder="اللقب"
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
                InputRightElement={
                  <Icon
                    as={<FontAwesome5 name="envelope" />}
                    size="sm"
                    m={2}
                    _light={{
                      color: "black",
                    }}
                  />
                }
                variant="outline"
                placeholder="البريد الالكتروني"
                width={width - 80}
                _light={{
                  placeholderTextColor: "blueGray.400",
                }}
                _dark={{
                  placeholderTextColor: "blueGray.50",
                }}
                value={email}
                onChangeText={(text) => handleCheckEmail(text)}
              />
            </View>
            {checkValidEmail ? (
              <Text style={styles.textFailed}>يرجى التثبت من البريد الالكتروني </Text>
            ) : (
              <Text style={styles.textFailed}> </Text>
            )}

            {/* pässword input */}

            <View style={styles.emailInput}>
              <Input
                InputRightElement={
                  <Icon
                    as={<FontAwesome5 name="eye" />}
                    size="sm"
                    m={2}
                    _light={{
                      color: "black",
                    }}
                    _dark={{
                      color: "gray.300",
                    }}
                  />
                }
                variant="outline"
                placeholder="كلمة المرور"
                width={width - 80}
                _light={{
                  placeholderTextColor: "blueGray.400",
                }}
                _dark={{
                  placeholderTextColor: "blueGray.50",
                }}
                value={password}
                secureTextEntry={seePassword}
                onChangeText={(text) => setPassword(text)}
              />
              <TouchableOpacity
              style={styles.wrapperIcon}
              onPress={() => setSeePassword(!seePassword)}
            >
              <Image
                source={seePassword ? Eye : EyeActive}
                style={styles.icon}
              />
            </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.buttonStyle}>
        {email == "" || password == "" || checkValidEmail == true ? (
             <TouchableOpacity
             disabled
             style={styles.buttonDisable}
             onPress={handleLogin}
           >
             <Text style={styles.text}>التَسجيل</Text>
           </TouchableOpacity>
         ) : (
           <TouchableOpacity>
             <Button onPress={handleLogin} style={styles.buttonDesign}>
               التَسجيل
             </Button>
           </TouchableOpacity>
         )}
        </View>
        <View style={styles.text2}>
          {/** sign up redirection login  */}
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.signupText}> الدخول </Text>
          </TouchableOpacity>
          <Text styles={styles.textgray}> هل لديك حساب مسبقا ؟ </Text>
        </View>
        <View style={styles.line}>
          <View style={{ flex: 1, backgroundColor: "black", height: 1 }} />
          <View>
            <Text
              styles={{ width: 50, textAlign: "center", fontWeight: "bold" }}
            ></Text>
          </View>
        </View>

        {/* lINE */}
        <View style={styles.lineStyle}>
          <View style={{ flex: 1, backgroundColor: "black", height: 1 }} />
          <View>
            <Text
              styles={{ width: 50, textAlign: "center", fontWeight: "bold" }}
            >
              تسجيل الدخول عبر{" "}
            </Text>
          </View>

          <View style={styles.boxstyle} />
          <TouchableOpacity
            onPress={() => navigation.navigate("")}
            style={{ borderRadius: 4, backgroundColor: "#ECECEC", padding: 5 }}
          >
            <Ionicons
              name="logo-google"
              style={{ color: "black", fontSize: 24 }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
export default () => {
  return (
    <NativeBaseProvider>
      <Signup />
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginTop: 50,
    height: 250,
  },

  container: {
    Flex: 1,
  },
  LoginText: {
    marginTop: 15,
    fontSize: 30,
    fontWeight: "bold",
  },
  buttonDesign: {
    backgroundColor: "#E4AD54",
  },
  buttonDisable: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    borderRadius: 5,
  },
  textgray: {
    textDecorationColor: "#A8A6A7",
    color: "#E4AD54",
    fontWeight: "bold",
  },
  Middle: {
    alignItems: "center",
    justifyContent: "center",
  },
  text2: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 10,
  },
  signupText: {
    fontWeight: "bold",
    color: "#E4AD54",
    textDecorationColor: "#E4AD54",
    textDecorationLine: "underline",
  },
  emailInput: {
    marginTop: 10,
    alignSelf: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    marginTop: 30,
    marginRight: 18,
    marginLeft: 18,
  },
  buttonStyleX: {
    marginTop: 10,
  },
  buttonDesign: {
    backgroundColor: "#E4AD54",
  },
  lineStyle: {
    flexDirection: "column",
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
    alignItems: "center",
  },
  boxstyle: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "space-around",
  },
  line: {
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 5,
    alignItems: "center",
  },
  wrapperIcon: {
    position: 'absolute',
    right: 0,
    padding: 10,
  },
  icon: {
    width: 30,
    height: 24,
  },
  wrapperIcon: {
    position: 'absolute',
    right: 0,
    padding: 10,
  },
  text: {
    color: "white",
    fontWeight: "700",
  },
  textFailed: {
    alignItems: "flex-end",
    textAlign: "right",
    color: "red",
    marginRight: 20,
  },
});
