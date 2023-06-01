import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import { Input, NativeBaseProvider, Button, Icon } from "native-base";
import React, { useState } from "react";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Eye } from "../assets/Eye.png";
import { EyeActive } from "../assets/EyeActive.png";

function Login() {
  // Backend connection :
  const [User, setUser] = useState({
    email: "",
    password: "",
  });
  const onchangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...User, [name]: value });
  };
  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/login", { ...User });
      localStorage.setItem("firsrtLogin", true);
      window.location.href = "/Choice";
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  ///
  const navigation = useNavigation();
  const logo = require("../assets/i.jpg");
  const { width, height } = Dimensions.get("window");

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
  const handleSubmit = () => {
    const checkPassowrd = checkPasswordValidity(password);
    if (!checkPassowrd) {
      navigation.replace("Choice");
    } else {
      alert(checkPassowrd);
    }
  };
  const handleLogin = () => {
    const checkPassowrd = checkPasswordValidity(password);
    if (!checkPassowrd) {
      user_login({
        email: email.toLocaleLowerCase(),
        password: password,
      })
        .then((result) => {
          if (result.status == 200) {
            AsyncStorage.setItem("AccessToken", result.data.token);
            navigation.replace("Choice");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      alert(checkPassowrd);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.Middle}>
          <Image style={styles.logo} resizeMode="contain" source={logo} alt="logo" />
          <Text style={styles.LoginText}>تسجيل الدخول</Text>
        </View>
        <View style={styles.text2}>
          <Text styles={styles.textgray}> يرجى تعبئة المعلومات التالية</Text>
        </View>

        {/* Email input */}
        <View style={styles.buttonStyle}>
          <View style={styles.emailInput}>
            <Input
              InputRightElement={
                <Icon
                  as={<FontAwesome5 name="user-secret" />}
                  size="sm"
                  m={2}
                  _light={{
                    color: "black",
                  }}
                />
              }
              variant="outline"
              width={width - 80}
              placeholder="البريد الالكتروني"
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
            <Text style={styles.textFailed}> بريد إلكتروني خاطئ</Text>
          ) : (
            <Text style={styles.textFailed}> </Text>
          )}

          {/* pässword input */}
          <View style={styles.buttonStyleX}>
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
                  />
                }
                variant="outline"
                width={width - 80}
                placeholder="كلمةالمرور"
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

          {/* button input */}
          <View style={styles.buttonStyleX}>
            {email == "" || password == "" || checkValidEmail == true ? (
              <TouchableOpacity
                disabled
                style={styles.buttonDisable}
                onPress={handleSubmit}
              >
                <Text style={styles.text}>الدخول</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity>
                <Button onPress={handleSubmit} style={styles.buttonDesign}>
                  الدخول
                </Button>
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.text2}>
            {/** sign up redirection l sign up  */}
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text style={styles.signupText}> التّسجيل </Text>
            </TouchableOpacity>
            <Text styles={styles.textgray}> ليس لديك حساب ؟</Text>
          </View>
          <View style={styles.line}>
            <View style={{ flex: 1, backgroundColor: "black", height: 1 }} />
            <View>
              <Text
                styles={{ width: 50, textAlign: "center", fontWeight: "bold" }}
              ></Text>
            </View>
          </View>
        </View>

        <View style={styles.lineStyle}>
          <View style={{ flex: 1, backgroundColor: "black", height: 1 }} />
          <View>
            <Text
              styles={{ width: 50, textAlign: "center", fontWeight: "bold" }}
            >
              تسجيل الدخول عبر{" "}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              textAlign: "center",
              backgroundColor: "black",
              height: 1,
            }}
          />

          <View style={styles.boxstyle} />
          <TouchableOpacity
            onPress={() => navigation.navigate("")}
            style={{ borderRadius: 4, backgroundColor: "#E1E1E1", padding: 5 }}
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
      <Login />
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
  buttonDisable: {
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    borderRadius: 5,
  },
  LoginText: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold",
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
    textAlign: "right",
  },
  buttonStyle: {
    marginTop: 30,
    marginRight: 18,
    marginLeft: 18,
  },
  buttonStyleX: {
    marginTop: 12,
    marginRight: 15,
    marginLeft: 15,
  },
  buttonDesign: {
    backgroundColor: "#E4AD54",
  },
  lineStyle: {
    flexDirection: "column",
    marginTop: 10,
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
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40,
    paddingTop: 5,
    alignItems: "center",
  },
  textFailed: {
    alignItems: "flex-end",
    textAlign: "right",
    color: "red",
    marginRight: 20,
  },
  icon: {
    width: 30,
    height: 24,
  },
  wrapperIcon: {
    position: "absolute",
    right: 0,
    padding: 10,
  },
  text: {
    color: "white",
    fontWeight: "700",
  },
});
