import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import TouchableComponent from "./TouchableComponent";

const RoundBtn = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <TouchableComponent
        onTap={props.onTap}
        disabled={props.disabled}
        rippleColor={props.rippleColor}
        ripple={false}
      >
        <View style={{ ...styles.innerCont, ...props.innerContStyle }}>
          {props.children}
        </View>
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 55,
    height: 55,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 5,
    borderWidth: 2.5,
    // borderColor: "rgba(0,0,0,0.2)"
    borderColor: "white",
    marginHorizontal: 15,
  },
  innerCont: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RoundBtn;
