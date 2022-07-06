import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
const { height, width } = Dimensions.get("screen");
const InputPassword = (props) => {
  const [isSecureEntry, setSecureEntry] = useState(true);
  return (
    <View style={{ ...styles.inputIconControler, ...props.styleOuter }}>
      <View style={{ ...styles.inputIconContainer, ...props.style }}>
        <FontAwesome
          name={props.leftIconName}
          size={24}
          color={props.iconColor}
        />
      </View>
      <TextInput
        name={props.name}
        autoCapitalize={props.autoCapitalize}
        keyboardType={props.keyboardType}
        textContentType={props.textContentType}
        autoFocus={props.autoFocus}
        value={props.value}
        onChangeText={props.onChangeText}
        color={props.colors}
        maxLength={25}
        style={{ ...styles.inputContainer, ...props.style }}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        secureTextEntry={isSecureEntry}
        underlineColor="transparent"
        selectionColor={props.selectionColor}
        multiline={false}
        theme={{ colors: { primary: "transparent" } }}
      />
      <View style={{ ...styles.inputEyeIconControler, ...props.style }}>
        <TouchableOpacity
          style={{ ...styles.inputEyeIconContainer, ...props.style }}
          onPress={() => {
            setSecureEntry(!isSecureEntry);
          }}
        >
          <MaterialCommunityIcons
            name={isSecureEntry === false ? "eye" : "eye-off"}
            size={24}
            color={props.eyeColor}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    height: 50,
    flex: 1,
    backgroundColor: "transparent",
  },

  inputIconControler: {
    width: width / 1.14,
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 19,
    borderRadius: 25,
    elevation: 3,
  },
  inputIconContainer: {
    height: "100%",
    width: "12%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
  },
  inputEyeIconContainer: {
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputEyeIconControler: {
    width: "12%",
    height: 50,
    right: 10,
  },
});

export default InputPassword;
