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
    ImageBackground,
  } from "react-native";
  import React,{useState,useContext} from "react";
  import CustomInput from "../components/CustomInput";
  import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import icon from "../../assets/icon.png";
  import CustomButton from "../components/CustomButton";
  import store from "../../assets/Backimg.png";
  import Branch from "../components/Branch";
  import { GlobalContext } from "../Context/index";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import axios from 'axios';
  import { s, vs, ms, mvs } from 'react-native-size-matters';
  import {URL} from "../Url"
  
  const Register = ({navigation}) => {
  
    const {
      Name,
          setName,
          BranchOffice, 
          setBranchOffice,
          Passowrd,
          setPassowrd,
          ComfirmPass,
          setComfirmPass,
    } = useContext(GlobalContext);
  
    const SignUp = async () => {
  
        try {
          const value = {
            Name:Name,
            Passowrd:Passowrd,
            BranchOffice:BranchOffice
          };
  
          if (Passowrd === ComfirmPass){
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem("MyDetailed", jsonValue);
  
  
            axios.post(`${URL}/api/user`, {
              username:Name,
              password:Passowrd,
              Branch:BranchOffice
            })
            .then(response => {
              console.log(response.data);
            })
            .catch(error => {
              console.error(error);
            });
          }
          else{
            alert("password did not match: Confirm Again")
          }
  
          setName("")
          setPassowrd("")
          setComfirmPass("")
          setBranchOffice("")
  
          
        } catch (e) {
          console.log("We have an error",e)
        }
    
      navigation.navigate("Login");
    };

    const handleLogin = () => {
      navigation.navigate("Login");
    };
  
    return (
      <ImageBackground source={store} style={styles.container}>
        <View style={styles.overlay} />
        <ScrollView style={styles.scrollView}>
          <View
            style={{
              width: "100%",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Welcome Banner */}
            <View
              style={{
                width: "100%",
                // backgroundColor: "white",
                height: hp(22),
                alignItems: "center",
                justifyContent: "center",
                marginTop: hp(7),
              }}
            >
              <Image source={icon} />
  
              <Text style={{ fontSize: wp(5), fontWeight: 800, color: "white" }}>
                Welcome Back
              </Text>
              <Text
                style={{
                  fontSize: wp(3),
                  fontWeight: 400,
                  marginBottom: hp(2),
                  color: "#FCC205",
                  fontWeight:400
                }}
              >
                Please Enter your Login details below
              </Text>
            </View>
  
            {/* Form Page */}
            <View style={styles.formPage}>
              <CustomInput
                value={Name}
                setvalue={setName}
                Radius={10}
                placeholderColor="black"
                placeholder="Enter Your Name"
                width="50%"
                height={hp(8)}
                Hpadding="2%"
                // bordercolor="white"
                Bwidth={2}
                borderButtom="black"
                //  TextBackground="black"
                TextHeight={hp(5)}
                fontsize={wp(3)}
                alignText="center"
              />
  
              <CustomInput
                value={Passowrd}
                setvalue={setPassowrd}
                Radius={10}
                placeholder="Enter Your password"
                placeholderColor="black"
                width="50%"
                height={hp(8)}
                secureTextEntry={true}
                Hpadding="2%"
                bordercolor="white"
                Bwidth={2}
                borderButtom="black"
                //  TextBackground="black"
                TextHeight={hp(5)}
                fontsize={wp(3)}
                alignText="center"
              />
  
              <CustomInput
                value={ComfirmPass}
                setvalue={setComfirmPass}
                Radius={10}
                placeholder="Comfirm Your password"
                placeholderColor="black"
                width="50%"
                height={hp(8)}
                secureTextEntry={true}
                Hpadding="2%"
                bordercolor="white"
                Bwidth={2}
                borderButtom="black"
                //  TextBackground="black"
                TextHeight={hp(5)}
                fontsize={wp(3)}
                alignText="center"
              />
  
              <Branch />
            </View>
  
            {/* Login Button */}
  
            <View
              style={{
                width: "80%",
                height: hp(10),
                // backgroundColor: "red",
                marginTop: hp(0),
                alignItems:"center",
                justifyContent:"center",
                flex:1
              }}
            >
              <CustomButton
                    width={wp(45)}
                    text="Register"
                    textcolor="white"
                    borderR={10}
                    items="center"
                    padding="2%"
                    marginT="4%"
                    onPress={() => SignUp()}
                    height={hp(7)}
                    fontsize={24}
                    weight={800}
                    bordercolor="#ffa800"
                    borderwieght={2}
                    border_top_left_radius={20}
                    border_bottom_right_radius={20}
                  />
            </View>
            {/* Redrict to login */}
  
            <View
              style={{
                flex: 1,
                width: "100%",
                height: hp(4),
                backgroundColor: "black",
                marginVertical: hp(6),
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  width: "80%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 10,
                }}
              >
                <Text style={{ fontSize: wp(3), color: "red", fontWeight: 400 }}>
                  Already have an account
                </Text>
  
                <TouchableOpacity onPress={() => handleLogin()}>
                  <Text
                    style={{ fontSize: wp(3), color: "green", fontWeight: 800 }}
                  >
                    Login?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      blurRadius: 5,
      width: "100%",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity here
    },
    main: {
      backgroundColor: "#2b2f2b",
      borderRadius: 10,
      paddingLeft: 10,
      paddingVertical: 10,
    },
    scrollView: {
      flex: 1,
      width: "100%",
      // backgroundColor: "red",
    },
    formPage: {
      flex: 1,
      backgroundColor: "#FFFFFF90",
      width: s(270),
      height: mvs(303,0.6),
      marginTop: vs(46),
      alignItems: "center",
      justifyContent: "center",
      borderTopLeftRadius: 80, 
      borderBottomRightRadius: 80, // Radius for bottom right corner
    },
  });
  export default Register;
  