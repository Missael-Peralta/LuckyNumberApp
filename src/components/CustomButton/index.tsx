import React from 'react'
import { StyleSheet, Text, TouchableOpacity, ToastAndroid, Alert} from 'react-native'



interface Props{
    text: String;
}

const Component = (props: Props) => {
    const {text} = props;
    return (
        <TouchableOpacity style= {styles.Button}
        onPress={(Activity)=>{}}
         > 
        <Text style={styles.ButtonText}>{text}</Text>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    Button:{
        backgroundColor:'#175381',
        padding: 10,
        borderRadius: 20,
        width: 350,
      },
   
      ButtonText:{
        color:'#fff',
        fontSize: 25,
        fontWeight: "bold",
        textAlign: 'center',
      },
});

export default Component;
