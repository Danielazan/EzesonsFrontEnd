import { StatusBar } from "expo-status-bar";
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
import { NavigationContainer } from "@react-navigation/native";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GlobalState from "./src/Context/index";

import Reg from "./src/Screens/Reg"
import Login from "./src/Screens/Login"
import Home from "./src/Screens/Home"
import Product from "./src/Screens/Product"
import AddProducts from "./src/Screens/AddProducts"
import Branch from "./src/Screens/Branch"
import AddBranch from "./src/Screens/AddBranches"
import Invoice from "./src/Screens/InvoicePage"



const Stack = createNativeStackNavigator();

const toastConfig = {

  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: "pink" }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: "400",
      }}
    />
  ),

  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),
  
};
export default function App() {
  const getName = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("MyDetailed");
      if (jsonValue !== null) {
        const value = JSON.parse(jsonValue); // Parse the JSON string back to an object
        console.log(value.Name); // Access the Name property
        return value.Name; // Return the Name if needed
      } else {
        console.log("No data found");
        return null; // Return null if no data is found
      }
    } catch (e) {
      // error reading value
      console.error("Error retrieving data", e);
    }
  };

  const Name = getName();
  
  return (
    <GlobalState>
      <NavigationContainer>
        <Stack.Navigator>
          { (
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
          )}

          {Name && (
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
          )}

          <Stack.Screen
            name="SignUp"
            component={Reg}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Products"
            component={Product}
            options={{
              headerShown: false,
              unmountOnBlur: true,
            }}
          />

          <Stack.Screen
            name="AddProducts"
            component={AddProducts}
            options={{
              headerShown: false,
            }}
          />

          {/* <Stack.Screen
            name="Sales"
            component={Sales}
            options={{
              headerShown: false,
            }}
          /> */}

          <Stack.Screen
            name="AddBranchs"
            component={AddBranch}
            options={{
              headerShown: false,
            }}
          />
          {
            <Stack.Screen
              name="Branchs"
              component={Branch}
              options={{
                headerShown: false,
              }}
            />
          }

          <Stack.Screen
            name="Invocies"
            component={Invoice}
            options={{
              headerShown: false,
            }}
          />

          {/* <Stack.Screen
            name="DHome"
            component={DHome}
            options={{
              headerShown: false,
            }}
          /> */}
        </Stack.Navigator>
        <Toast config={toastConfig} />
      </NavigationContainer>
    </GlobalState>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
