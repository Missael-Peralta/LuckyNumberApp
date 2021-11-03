import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TextInputBase, TouchableOpacity, View, ToastAndroid, NativeModules } from 'react-native';
import CustomButton from './src/components/CustomButton';

const App = () => {
  const [NumberAge, AgeNumber] = useState(0); const [UserName, NameUser] = useState('');
 
  const Activity = () =>{

    if (NumberAge < 10) {
      var product = NumberAge * 7
      var upshot = 0

      while (product > 0) {
        upshot += Math.trunc(product % 10)
          product = product / 10
      }

      ToastAndroid.show("Hey " + {UserName} + "your lucky number today is:" + {upshot} , ToastAndroid.SHORT) 
    }
  }
  return (
 <View style ={styles.Container}> 

<Image style={styles.ImageLucky} source={require('./src/imgs/lucky.png')} />

 <Text style={styles.Text} >Enter your name: </Text>
 <TextInput style= {styles.Inputs} placeholder='e.g. Missael Peralta'onChangeText={Name => NameUser(Name)}>
 </TextInput>

 <Text style={styles.Text}>Enter your Age: </Text>
 <TextInput style= {styles.Inputs} placeholder='e.g. 7'onChangeText={Numbers => AgeNumber(parseInt(Numbers))}>
 </TextInput>

 <View style= {styles.ControlsContainer}>
   <View style={styles.ButtonConteiner}>

     <CustomButton
     text="Go!..."
     />

      </View>

   </View>

 </View>
  )
}

const styles = StyleSheet.create({
  Container:{
    alignItems: 'center',
    backgroundColor: '#fff',
    display:'flex',
    height: '100%',
    justifyContent:'center',
  },

  ImageLucky:{    
    margin: 50,
    width: 350,
    height:200,
    borderRadius: 20,

  },

  Inputs:{
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#777',
    padding: 10, 
    margin: 30,
    width: 320,
  },
  
  
  Text:{
    fontSize: 25, 
     fontWeight: '700',
     letterSpacing: 2,
   },

   ControlsContainer:{
     alignItems: 'center',
     margin: 20,
     width:'100%',
   },

   ButtonConteiner:{
     alignItems: 'center',
     display:'flex',
     flexDirection:'column',
     justifyContent: "space-around",
     margin:20,
     width:'100%',
   },

});

 export default App;


