import React, { useRef, useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");

const Post = (props) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: "100%",
          width: "90%",
          // alignItems: "center",
        }}
      >
        <View
          style={{ marginTop: "3%", alignItems: "flex-start", width: "100%" }}
        >
          <Text style={{ ...styles.title, ...props.titleStyle }}>
            {props.title}
          </Text>
        </View>
        <View style={{ marginTop: "3%" }}>
          <Text style={{ ...styles.description, ...props.descStyle }}>
            {props.desc}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 50,
    height: height / 4,
    borderRadius: 30,
    backgroundColor: "white",
    elevation: 5,
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "black",
  },
  title2: {
    fontSize: 24,
    color: "white",
  },
});

export default Post;
