import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Logo from '../asset/892723.png'
import { useNavigation } from '@react-navigation/native'

const App = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.logo} />
            <Text
                style={{
                    color: 'white',
                    fontSize: 30,
                    marginBottom: 20,
                }}>
                Movie Review
            </Text>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="white"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="white"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Homepage')}
                >
                    <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.text}>Don't have an account?
                    <Text
                        style={{ fontWeight: 'bold' }}
                        onPress={() => navigation.navigate('RegisterScreen')}
                    > Sign Up</Text>
                </Text>
            </View>
        </View>
    )
}
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