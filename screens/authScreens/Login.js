import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { MaterialIcons } from "@expo/vector-icons";
import TouchableButton from "../../components/TouchableButton";
import RoundBtn from "../../components/RoundBtn";
import InputPassword from "../../components/InputPassword";
import { useKeyboard } from "../../utilities/Keyboard";
import { getData, setData } from "../../utilities/LocalMethod";
import axios from "axios";

const { height, width } = Dimensions.get("window");

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    (async () => {
      const user = await getData("user");
      if (user) {
        props.navigation.navigate("Home");
      }
    })();
  }, []);

  const login = () => {
    axios({
      method: "post",
      url: "http://buddy.ropstambpo.com/api/login",
      data: {
        email: username,
        password: password,
        device_token: "zasdcvgtghnkiuhgfde345tewasdfghjkm",
      },
    })
      .then((res) => {
        // console.log("response", res.data.data.access_token);
        if (res.data.data.access_token) {
          setData(
            "user",
            {
              access_token: res.data.data.access_token,
              // ...res.data.data.user,
            },
            true
          ).then(() => {});
          props.navigation.navigate("Home");
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const isKeyBoardOpen = useKeyboard();
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[
          "rgba(255,255,255, 0.5)",
          " rgba(44,197,55, 0.2)",
          " rgba(44,197,55, 0.2)",
        ]}
        style={{
          alignItems: "center",
          elevation: 2,
          flex: 1,
          width: width,
          overflow: "hidden",
          justifyContent: "flex-end",
          paddingBottom: height / 5,
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: width - 50,
              alignItems: "center",
            }}
          >
            {!isKeyBoardOpen ? (
              <View>
                <Text
                  style={{ fontSize: 35, color: "black", fontWeight: "700" }}
                >
                  Hello Again!
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontWeight: "500",
                    fontSize: 20,
                    textAlign: "center",
                  }}
                >
                  Chance to get your{"\n"}life better
                </Text>
              </View>
            ) : undefined}

            <View
              style={{
                marginTop: isKeyBoardOpen ? height / 2.7 : 30,
                alignItems: "center",
                width: "100%",
              }}
            >
              <View
                style={{
                  width: width / 1.2,
                  height: height / 15,
                  borderRadius: 12,
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 10,
                  borderColor: "white",
                  backgroundColor: "white",
                  elevation: 3,
                }}
              >
                <View
                  style={{
                    height: "100%",
                    width: "12%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <MaterialIcons
                    name="phone-iphone"
                    size={24}
                    color="rgba(110,119,111,1)"
                  />
                </View>
                <TextInput
                  keyboardType="name-phone-pad"
                  maxLength={25}
                  placeholder="Enter username"
                  placeholderTextColor="rgba(110,119,111,1)"
                  style={{
                    height: 50,
                    width: "100%",
                    backgroundColor: "transparent",
                    position: "absolute",
                    paddingLeft: 40,
                  }}
                  underlineColor="transparent"
                  selectionColor="black"
                  activeOutlineColor="Black"
                  multiline={false}
                  theme={{ colors: { primary: "transparent" } }}
                  value={username}
                  onChangeText={(text) => setUsername(text)}
                />
              </View>

              <View>
                <InputPassword
                  leftIconName="lock"
                  placeholder="Password"
                  styleOuter={{
                    backgroundColor: "white",
                    width: width / 1.2,
                    height: height / 15,
                    borderRadius: 12,
                  }}
                  colors="black"
                  maxLength={25}
                  placeholderTextColor="rgba(110,119,111,1)"
                  selectionColor="black"
                  eyeColor="rgba(110,119,111,1)"
                  iconColor="rgba(110,119,111,1)"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                />
              </View>

              <View
                style={{
                  width: "100%",
                  alignItems: "flex-end",
                  marginTop: "4%",
                  marginRight: "5%",
                }}
              >
                <Text
                  style={{ color: "rgba(110,119,111,1)", fontWeight: "bold" }}
                >
                  Recovery Password
                </Text>
              </View>

              <View style={styles.btnContainer}>
                <TouchableButton
                  style={{
                    width: width / 1.2,
                    marginTop: 0,
                    borderRadius: 15,
                    height: height / 15,
                  }}
                  text={{ fontWeight: "bold" }}
                  linearColors={["#2CC537", "#10941A"]}
                  name="Login"
                  onTap={login}
                ></TouchableButton>
              </View>
            </View>
          </View>
        </View>
        {!isKeyBoardOpen ? (
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                width: "100%",
                alignItems: "center",
                marginTop: "10%",
              }}
            >
              <Text style={{ color: "rgba(110,119,111,1)", fontWeight: "600" }}>
                or continue with
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: "5%" }}>
              <RoundBtn>
                <Image
                  source={require("../../assets/images/googleIcon.png")}
                  resizeMode="cover"
                  style={{
                    height: 25,
                    width: 25,
                  }}
                />
              </RoundBtn>
              <RoundBtn>
                <Image
                  source={require("../../assets/images/AppleLogo.png")}
                  resizeMode="cover"
                  style={{
                    height: "80%",
                    width: "80%",
                  }}
                />
              </RoundBtn>
              <RoundBtn>
                <Image
                  source={require("../../assets/images/facebookLogo.png")}
                  resizeMode="cover"
                  style={{
                    height: "80%",
                    width: "80%",
                  }}
                />
              </RoundBtn>
            </View>
          </View>
        ) : undefined}

        {!isKeyBoardOpen ? (
          <View
            style={{
              position: "absolute",
              alignItems: "center",
              bottom: 20,
              width: width,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{ color: "rgba(110,119,111,1)", fontWeight: "bold" }}
              >
                Not a memeber?
              </Text>
              <TouchableButton
                style={{ width: width / 3.3, height: height / 22 }}
                text={{ fontWeight: "700", color: "green" }}
                linearColors={["transparent", "transparent"]}
                name="Register now"
              ></TouchableButton>
            </View>
          </View>
        ) : undefined}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnContainer: {
    marginTop: "12%",
    alignItems: "center",
  },
});

export default Login;
