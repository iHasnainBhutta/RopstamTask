import React, { Component } from "react";
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  Platform,
} from "react-native";

const TouchableComponent = (props) => {
  const { disabled, rippleColor, iosUnderlayColor } = props;
  if (Platform.OS === "ios") {
    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={props.onTap}
        style={{ flex: 1 }}
      >
        {props.children}
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableNativeFeedback
        disabled={disabled}
        background={TouchableNativeFeedback.Ripple(
          rippleColor === undefined ? "rgba(0,0,0,.1)" : rippleColor,
          false
        )}
        onPress={props.onTap}
        style={{ flex: 1 }}
      >
        {props.children}
      </TouchableNativeFeedback>
    );
  }
};

export default TouchableComponent;
