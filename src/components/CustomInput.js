import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

const CustomInput = props => {
  return (
    <View
      style={[
        styles.container,
        props.width ? { width: props.width } : { width: '100%' },

        props.Radius ? { borderRadius: props.Radius } : {borderRadius:0},

        props.Background ? { backgroundColor: props.Background } : { backgroundColor: "transparent" },

        { paddingHorizontal: props.Hpadding },

        // { borderColor: props.bordercolor },

        {borderWidth:props.Bwidth},
        props.height ? { height: props.height } : { height: "0%" },

        props.marginB ? { marginBottom: props.marginB } : { marginBottom: hp(1) },

        props.borderButtom ? { borderBottomColor: props.borderButtom } : { borderBottomColor: "transparent" },

    
        props.borderTopColor ?{borderTopColor: props.borderTopColor} :{borderTopColor:"transparent"},

        props.borderRightColor ?{borderRightColor: props.borderRightColor,}: {borderRightColor:"transparent"},
        
        props.borderLeftColor ?{borderLeftColor:  props.borderLeftColor} :{borderLeftColor:"transparent"},
       

         props.alignText ? { alignItems: props.alignText } : null,
      ]}
    >
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderColor}
        onChangeText={props.setvalue}
        value={props.value}
        secureTextEntry={props.secureTextEntry}
        style={[
          props.TextBackground
            ? { backgroundColor: props.TextBackground }
            : { backgroundColor: "transparent" },

          props.TextWidth ? { width: props.TextWidth } : null,

          props.TRadius ? { borderRadius: props.TRadius } : {borderRadius:1},
            
          props.TextHeight ? { height: props.TextHeight } : { height: 30 },

          props.fontsize ? { fontSize: props.fontsize } : null,

          props.textcolor ? { color: props.textcolor } : { color: "black" },

          ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    //    alignItems:"center"
    justifyContent: 'center',
    
  }
})

export default CustomInput
