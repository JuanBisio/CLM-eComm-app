import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView, Alert  } from 'react-native';
import { useForm } from "react-hook-form";
import {Auth} from 'aws-amplify';

//Inpust 
import CustomInput from '../../components/CustomInputs/CustomInput';
import CustomButton from '../../components/CustomButtons/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();
    const {control, handleSubmit, watch} = useForm();

    const onSendPressed = async data => {
      try{
        await Auth.forgotPassword(data.username);
        navigation.navigate('NewPassword')
      }catch(e){
        Alert.alert('Oopss', e.message);
      }       
    }

    const onSignInPress = () => {
      navigation.navigate('SignIn')
    }



    return (
        <ScrollView>
          <View style={styles.root}>
              <Text style={styles.title}>Reset your password</Text>
              <CustomInput
                name="username"
                placeholder="Username" 
                control={control}
                rules={{required: 'Username is required'}}
              />

              <CustomButton 
                text="Send" 
                onPress={handleSubmit(onSendPressed)} 
              />
              <CustomButton 
                text="Back to Sign In"
                onPress={onSignInPress}
                type="TERTIARY"
              />

          </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
   root:{
     alignItems: 'center',
     padding: 20, 
   },
   title:{
     fontSize: 24,
     fontWeight: 'bold',
     color: '#051C60',
     margin: 10,
   },
   text:{
    color: 'gray',
    marginVertical: 10,
  },
  link:{
    color: '#FDB075',
  }

});

export default ForgotPasswordScreen
