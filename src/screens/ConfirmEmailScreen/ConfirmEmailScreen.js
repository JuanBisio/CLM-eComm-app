import React, {useState} from 'react'
import { StyleSheet, Text, Alert, View, ScrollView } from 'react-native';
import { useForm } from "react-hook-form";
import {Auth} from 'aws-amplify';

//Inpust 
import CustomInput from '../../components/CustomInputs/CustomInput';
import CustomButton from '../../components/CustomButtons/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

const ConfirmEmailScreen = () => {
  const route = useRoute();
  const {control, handleSubmit,watch} = useForm({
    defaultValues: {username: route?.params?.username}
  });

  const username = watch('username');

  const navigation = useNavigation();

  const onConfirmPressed = async data => {
    try{
      await Auth.confirmSignUp(data.username, data.code);
      navigation.navigate('SignIn')
    }catch(e){
      Alert.alert('Oopss', e.message);
    }
  }

  const onSignInPress = () => {
    navigation.navigate('SignIn')
  }

  const onResendPress = async () => {
    try{
      await Auth.resendSignUp(username);
      Alert.alert('Success', 'Code was resent to your email');
    }catch(e){
      Alert.alert('Oopss', e.message);
    }  
  }


    return (
        <ScrollView>
          <View style={styles.root}>
              <Text style={styles.title}>Confirm your email</Text>
              <CustomInput
                name="username"
                placeholder="Username" 
                control={control}
                rules={{
                  required: 'Username is required',
                }}
              />
              <CustomInput
                name="code"
                placeholder="Code" 
                control={control}
                rules={{
                  required: 'Code is required',
                  
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
