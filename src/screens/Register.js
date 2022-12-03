import { View, Text, StyleSheet, Image , TextInput, TouchableOpacity } from "react-native";
import React from "react";
import logo from "../asset/892723.png"

const App =() => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}/>

      <TextInput style={[styles.input,styles.undefined]}  placeholder="Name" placeholderTextColor="#C62100"/>
      <TextInput style={[styles.input,styles.undefined]} placeholder="Username" placeholderTextColor="#C62100"/>
      <TextInput style={[styles.input,styles.undefined]} placeholder="Email" placeholderTextColor="#C62100"/>
      <TextInput style={[styles.input,styles.undefined]} placeholder="Password" placeholderTextColor="#C62100"/>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Sign Up</Text>
      </TouchableOpacity>
      <Text style={styles.text}> dont have an account? 
      <Text style={{fontWeight:"bold"}}>  Sign Up</Text>
      </Text>
    </View>
)}

const styles = StyleSheet.create({
container : {
  flex : 1,
  backgroundColor : "#661403",
  justifyContent : "center",
  alignItems  : "center"
},

logo : {
  width : 150,
  height: 150
},
titleText:{
  color : "#fff",
  fontSize : 20
},

input :{
  width: 300,
  height:50,
  borderRadius: 5,
  marginTop : 10,
  marginBottom: 20 ,
  color : "black",
},
button :{
  width: 120,
  height : 50,
  borderRadius: 50,
  backgroundColor: "#5E1E12",
  justifyContent: "center",
  alignItems : "center",
  marginTop: 50,

},
textButton:{
  color: "#C62100",
  fontWeight: "bold",
  fontSize: 19,

},
text:{
  color: "#C62100",
  marginTop: 30,
  textAlign: "center",
  fontSize: 17,
  fontWeight: "bold",
},
undefined:{
    borderBottomColor: "#C62100",
    borderBottomWidth: 1,
}



})
export default App