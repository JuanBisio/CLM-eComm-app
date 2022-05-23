import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useForm } from "react-hook-form";

//Inpust 
import CustomInput from '../../components/CustomInputs/CustomInput';
import CustomButton from '../../components/CustomButtons/CustomButton';
import { useNavigation } from '@react-navigation/native';

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

const ConfirmEmailScreen = () => {
  const {control, handleSubmit, watch} = useForm();
  const navigation = useNavigation();


    const onConfirmPressed = (data) => {
      console.warn(data)
      navigation.navigate('Home')
    }
    const onSignInPress = () => {
      navigation.navigate('SignIn')
    }
    const onResendPress = () => {
      console.warn('Aun no esta listo')
    }


    return (
        <ScrollView>
          <View style={styles.root}>
              <Text style={styles.title}>Confirm your email</Text>
              <CustomInput
                name="email"
                placeholder="Email" 
                control={control}
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value:EMAIL_REGEX, 
                    message: 'Email is invalid'
                  },
                }}
              />

              <CustomButton 
                text="Confirm" 
                onPress={handleSubmit(onConfirmPressed)} 
              />
              <CustomButton 
                text="Resend code"
                onPress={onResendPress}
                type="SECONDARY"
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

export default ConfirmEmailScreen
