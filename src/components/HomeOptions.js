import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
  Platform,
  NativeModules,
  AppState,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { s, vs, ms, mvs } from "react-native-size-matters";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const HomeOptions = (props) => {
  return (
    <View style={styles.main}>
      {props.icon ? (
          props.icon
        ) : (
          <Feather
            name="command"
            size={props.iconSize ? props.iconSize : 34}
            color={props.iconcolor ? props.iconcolor : "white"}
          />
        )}
      <View
        style={{
          width: "100%",
          height: "100%",
          alignItems: "center",
          flexDirection: "column",
          justifyContent:"center",
          paddingRight:vs(20)
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: 900,
            fontSize: 16,
            flexShrink: 1
          }}
        >
          {props.text1}
        </Text>

        <Text
          style={{
            color: "#6DB6ED",
            fontWeight: 500,
            fontSize: 12,
            flexShrink: 1
          }}
        >
          {props.text2}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#0E2D63",
    borderRadius: 10,
    height:hp(10),
    width:"90%",
    flexDirection: "row",
    margin:20,
    borderTopLeftRadius: 80, 
    borderBottomLeftRadius: 80,
    alignItems:"center",
    paddingHorizontal:vs(10)
  },
});

export default HomeOptions;
