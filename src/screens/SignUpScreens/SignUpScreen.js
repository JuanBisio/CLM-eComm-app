import React, {useContext, useState} from 'react'
import { StyleSheet, Text, Alert, View,Image, useWindowDimensions, ScrollView } from 'react-native';
import { useForm } from "react-hook-form";
import {Auth} from 'aws-amplify';

//Inpust
import Logo from '../../../assets/image/02.png';

import CustomInput from '../../components/CustomInputs/CustomInput';
import CustomButton from '../../components/CustomButtons/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';


// import { AuthContext } from '../../context/AuthContext';

const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const SignUpScreen = () => {
    const {height} = useWindowDimensions();
    const {control, handleSubmit, watch} = useForm();
    const pwd = watch('password')
    const navigation = useNavigation();

    const onRegisterPressed = async (data) => {
      const {username, password, email, name} = data;
      try{
        const response = await Auth.signUp({
          username,
          password,
          attributes: { email, name, preferred_username: username}
        }); 

        navigation.navigate('ConfirmEmail', {username})
      }catch(e){
          Alert.alet('oopss', e.message)
        }
      
      
    }
    const onSignInPress = () => {
      navigation.navigate('SignIn')
    }
    const onTermsOfUsePressed = () => {
      console.warn('Aun no esta listo')
    }
    const onPrivacyPressed = () => {
      console.warn('Aun no esta listo')
    }

    return (
        <ScrollView>
          <View style={styles.root}>
              <Image 
                source={Logo}
                style={[styles.logo, {height: height * 0.3}]}
                resizeMode= "contain"
              />
              <Text style={styles.title}>Create an account</Text>
              <CustomInput
                name="name"
                placeholder="Name" 
                control={control}
                rules={{
                  required: 'Name is required',
                  minLength: {
                    value: 3, 
                    message: 'Name should be at least 3 characters long',
                  },
                  maxLength: {
                    value: 20 , 
                    message: 'Name should be max 20 characters long',
                  }
                }}
              />
              <CustomInput
                name="username"
                placeholder="Username" 
                control={control}
                rules={{
                  required: 'Username is required',
                  minLength: {
                    value: 3, 
                    message: 'Username should be at least 3 characters long',
                  },
                  maxLength: {
                    value: 20 , 
                    message: 'Username should be max 20 characters long',
                  }
                }}
              />
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
              <CustomInput
                name="password"
                placeholder="Password" 
                secureTextEntry 
                control={control}
                rules={{
                  required: 'Password is required',
                  minLength: {
                    value: 7, 
                    message: 'Password should be at least 7 characters long',
                  }
                }}
              />
              <CustomInput
                name="password-repeat"
                placeholder="Repeat Password" 
                secureTextEntry 
                control={control}
                rules={{
                  validate: value => 
                    value === pwd || 'Password do not match',

                }}
              />
              <CustomButton 
                text="Register" 
                onPress={handleSubmit(onRegisterPressed)} 
              />
              <Text style={styles.text}>
                By registering, you confirm that you accept our{' '}<Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use </Text>and {' '} 
                <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
              </Text>

              <SocialSignInButton />

              <CustomButton 
                text="Have an account? Sign In"
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
   logo:{
    width: '65%',
    maxWidth: 300,
    maxHeight:200,
  },
   title:{
     fontSize: 22,
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

export default SignUpScreen
