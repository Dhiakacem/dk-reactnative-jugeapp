import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View } from "react-native";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import { Document, Packer, Paragraph, HeadingLevel, TextRun } from "docx";
import { Image, Input, NativeBaseProvider } from "native-base";
import { useState } from "react";
import { ScrollView, Text, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
function WordScreen() {
  const logo = require("../assets/logo.png");
  const { width, height } = Dimensions.get("window");
  const back = require("../assets/bg.png");
  const navigation = useNavigation();
  let [name, setName] = useState("");
  const generateWordDocument = () => {
    let doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              text: `${name}`,
              heading: HeadingLevel.TITLE,
            }),
            new Paragraph({
              text: "،بإسم الشعب التونسي",
              margin: 20,
           
            }),
            new Paragraph({
              text:  "الجمهورية التونسية" ,
              style : {
                marginEnd : 0
              }
            }),
            new Paragraph({
              text: "المحكمة الإبتدائية بسوسة "
            
            }),
            new Paragraph({
              text: "الدائرة الجنائية"
            }),
            new Paragraph({
              text: "القضية عــــــدد"
            }),  new Paragraph({
              text: "تاريخ الحكم: 11/12/2022"

            }),
            new Paragraph({
              text: "helloo",
              heading: HeadingLevel.HEADING_1,
            }),
            new Paragraph({ text: "Of course you do!" }),
            new Paragraph({
              children: [
                new TextRun({ text: "test", bold: true, color: "#ff0000" }),
              ],
              bullet: { level: 0 },
            }),
            new Paragraph({ text: "Bullet", bullet: { level: 0 } }),
            new Paragraph({ text: "Point", bullet: { level: 1 } }),
            new Paragraph({ text: "List!", bullet: { level: 0 } }),
          ],
        },
      ],
    });

    Packer.toBase64String(doc).then((base64) => {
      const filename = FileSystem.documentDirectory + "MyWordDocument.docx";
      FileSystem.writeAsStringAsync(filename, base64, {
        encoding: FileSystem.EncodingType.Base64,
      }).then(() => {
        console.log(`Saved file: ${filename}`);
        Sharing.shareAsync(filename);
      });
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.head}>
          <Text
            style={styles.backButton}
            onPress={() => navigation.navigate("LeseScreen")}
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
            marginBottom={100}
            alt=""
          />
          <Button
            style={styles.text}
            title="استخراج قرار ختم الابحاث"
            color="#E4AD54"
            marginTop={200}
            onPress={generateWordDocument}
          />
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </View>
  );
}
export default () => {
  return (
    <NativeBaseProvider>
      <WordScreen />
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
  Input1: {
    marginTop: 10,
    justifyContent: "center",
    marginBottom: 8,
    marginEnd: 10,
  },
  textInput: {
    margin: 20,
    alignSelf: "flex-end",
    justifyContent: "center",
    color: "#D6AE4F",
    marginBottom: 8,
  },
  head: {
    marginTop: 70,
    flexDirection: "row",
  },
  backButton: {
    marginLeft: 20,
  },
  text: {
    color: "#D6AE4F",
    fontSize: 24,
    fontWeight: "bold",
    margin: 20,
  },
});
