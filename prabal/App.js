import { View, Text,StyleSheet,TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { TestScheduler } from 'jest'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.lgntxt}>Login Form</Text>
      <Text style={styles.des}>You can reach us anytime via Prabal@gmail.com</Text>
      <Text style={styles.upper} >Username</Text>
      <TextInput style={styles.inputbox} placeholder={'Enter your Username'}   >
        </TextInput>
      <Text style={styles.lower}>Password</Text>
      <TextInput style={styles.inputbox  }  secureTextEntry={true} placeholder={'Enter Your Password'} >
        
      </TextInput>
      <Text style={styles.term}>I have read to all terms and agreed to all term and conditons.</Text>
      <TouchableOpacity><View style={styles.btn}>
        <Text style={styles.lgn}>LOGIN</Text>
        
      </View>
</TouchableOpacity>
    </View>
  )
}

const styles=StyleSheet.create({
container:{
 
  
  

},
lgntxt:{
  fontWeight:'bold',
  marginBottom:15,
  marginTop:30,
  marginLeft:20,
  fontSize:40,

},
des:{
  fontWeight:'bold',
  marginLeft:20,
  fontSize:16,
},
inputbox:{
  borderColor:'grey',
  borderWidth:2,
  width:350,
  marginLeft:20,
  // marginTop:100,
  
},
upper:{
  marginTop:100,
  marginBottom:2,
  marginLeft:30,
},
lower:{
  marginLeft:30,
  marginTop:30,
},
term:{
marginLeft:30,
marginTop:15,
},
btn:{
  width:250,
  height:50,
  borderColor:'blue',
  borderWidth:2,
  marginLeft:70,
  marginTop:25,
  backgroundColor:'blue',
  borderRadius:10,
  
},
lgn:{
  fontWeight:'bold',
  color:'white',
 textAlign:'center',
 marginTop:10,
 fontSize:20,
 
}



})