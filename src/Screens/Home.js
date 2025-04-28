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
  ScrollView,
} from "react-native";
import React, { useState, useRef, useEffect, useContext } from "react";
import Cards from "../components/HomeCards";
import { FlashList } from "@shopify/flash-list";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { GlobalContext } from "../Context/index";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Icon from "../../assets/icon.png";
import { s, vs, ms, mvs } from "react-native-size-matters";
import HomeOptions from "../components/HomeOptions";

const Home = ({ navigation }) => {
  const handleNavigation = (Location) => {
    console.log(Location);
    navigation.navigate(Location);
  };

  const { Name, refreash, setRefreash, Branch, ProBranchs, setProBranchs } =
    useContext(GlobalContext);

  const [DATA, setData] = useState([
    {
      icon: <Ionicons name="arrow-back-circle-sharp" size={50} color="white" />,
      text1: "Sales",
      text2: "5000 Sales made",
    },
    {
      icon: <Ionicons name="arrow-back-circle-sharp" size={50} color="white"  />,
      text1: "Products",
      text2: "100000 Total Products",
    },
    {
      icon: <Ionicons name="arrow-back-circle-sharp" size={50} color="white"  />,
      text1: "Customers",
      text2: "View Customers Details",
    },
    {
      icon: <Ionicons name="arrow-back-circle-sharp" size={50} color="white"  />,
      text1: "Invocies",
      text2: "Check All Reports",
    },
    {
      icon: <Ionicons name="arrow-back-circle-sharp" size={50} color="white"  />,
      text1: "Branchs",
      text2: "Add Or Remove Branchs",
    },
    {
      icon: <Ionicons name="arrow-back-circle-sharp" size={50} color="white"  />,
      text1: "Users",
      text2: "Amber Light",
    },
  ]);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          // backgroundColor: '#f9c2ff',
          padding: 0,
          flex: 1,
          alignItems: "center",
          borderRadius: 5,
          width: "100%",
          justifyContent:"space-between"
        }}
        onPress={() => handleNavigation(item.text1)}
      >
        { <HomeOptions
            icon={item.icon}
            text1={item.text1}
            text2={item.text2}
            MarginBotton={0}
          />}

        {/* <HomeOptions /> */}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>

      <View style={styles.Main}>
        <View style={styles.BannerMain}>
          <TouchableOpacity style={styles.Back}>
            <Ionicons name="arrow-back-circle-sharp" size={30} color="white" />
          </TouchableOpacity>

          <View style={styles.bannerCon1}>
            <Text style={{ fontSize: 32, fontWeight: 800,color:"#6DB6ED" }}>EZE & Sons</Text>

            <Text style={{ fontSize: 32, fontWeight: 800,color:"#6DB6ED" }}>Store</Text>
          </View>

          <Image
            source={Icon}
            style={{
              width: ms(130, 0.3),
              height: mvs(135),
              marginRight: s(10),
            }}
            resizeMode="contain"
          />
        </View>

        <View style={styles.BannerInfo}>
          <View
            style={{
              width: "40%",
              height: "50%",
              backgroundColor: "#4CA1E0",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontWeight: 800, color: "white", fontSize: 60 }}>
              420
            </Text>
            <Text style={{ fontWeight: 800, color: "#0E2D63", fontSize: 18 }}>
              Top sales
            </Text>
          </View>
          <View
            style={{
              width: "40%",
              height: "50%",
              backgroundColor: "#4CA1E0",
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
             <Text style={{ fontWeight: 800, color: "white", fontSize: 60 }}>
              250
            </Text>
            <Text style={{ fontWeight: 800, color: "#0E2D63", fontSize: 16 }}>
              Top Revenue
            </Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.flash}>
        <FlashList
          data={DATA}
          renderItem={renderItem}
          estimatedItemSize={200}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginTop: 4,
          }}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6DB6ED",
    width: "100%",
  },
  container2: {
    flex: 1,
    // backgroundColor: "black",
    // width: "100%",
  },

  flash: {
    width: "100%",
    backgroundColor: "#6DB6ED",
    height: "100%",
    gap: 1,
  },
  Main: {
    backgroundColor: "#0E2D63",
    width: "100%",
    height: hp(40),
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: "center",
    flexDirection: "column",
    marginBottom:vs(17)
  },
  BannerMain: {
    width: "100%",
    marginBottom: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop:vs(17)
  },
  BannerInfo: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    height: hp(25),
    // backgroundColor:"red",
    alignItems: "top",
  },
  Back: {
    width: "10%",
    height: "20%",
  },
  bannerCon: {
    width: "60%",
    height: hp(30),
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  bannerCon1: {
    width: "60%",
    flex: 1,
  },
  bannerCon2: {
    width: "50%",
    height: vs(150),
    backgroundColor: "red",
  },
});

export default Home;
