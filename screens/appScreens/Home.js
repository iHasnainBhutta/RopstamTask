import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import axios from "axios";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBarHeight } from "../../utilities/headerMethods";
import RoundBtn from "../../components/RoundBtn";
import Post from "../../components/Post";

const { height, width } = Dimensions.get("window");

const Home = (props) => {
  const [post, setPost] = useState("");

  useEffect(() => {
    axios({
      method: "get",
      url: " https://jsonplaceholder.typicode.com/Posts",
    })
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  const renderPlans = (itemData) => {
    return (
      <View
        style={{
          height: height / 3.3,
          width: width,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 5,
        }}
      >
        <Post title={itemData.item.title} desc={itemData.item.body} />
      </View>
    );
  };

  const renderEmptyView = () => {
    return (
      <View style={styles.screen}>
        <Text>No Post Available or Wait for Axios HTTP Request</Text>
      </View>
    );
  };

  const clearAsyncStorage = async () => {
    AsyncStorage.clear();
    props.navigation.replace("Login");
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: StatusBarHeight + 30,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <View style={{ marginLeft: 15 }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>All Posts</Text>
        </View>
        <RoundBtn
          onTap={clearAsyncStorage}
          style={{
            borderRadius: 50,
            elevation: 5,
            backgroundColor: "white",
            height: height / 20,
            width: width / 9,
          }}
        >
          <AntDesign name="logout" size={24} color="black" />
        </RoundBtn>
      </View>

      <View style={{ marginTop: "10%", height: height / 1.2 }}>
        <FlatList
          showsVerticalScrollIndicator={true}
          data={post}
          keyExtractor={(_, i) => String(i)}
          renderItem={renderPlans}
          ListEmptyComponent={renderEmptyView}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default Home;
