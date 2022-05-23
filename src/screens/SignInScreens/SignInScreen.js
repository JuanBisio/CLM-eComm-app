import React, {useState} from 'react'
import { StyleSheet, Text, View, TextInput, Image, useWindowDimensions, ScrollView } from 'react-native';
import { useForm, Controller } from "react-hook-form";
// Imagenes and Inpust 
import Logo from '../../../assets/image/02.png';
import CustomInput from '../../components/CustomInputs/CustomInput';
import CustomButton from '../../components/CustomButtons/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButtons/SocialSignInButton';
import { useNavigation } from '@react-navigation/native';


const SignInScreen = () => {
    const {height} = useWindowDimensions();
    const navigation = useNavigation();
    
    const {
      control, 
      handleSubmit, 
      formState:{errors},
    } = useForm();

    const onSignInPressed = (data) => {
      console.log(data);
      navigation.navigate('Home')

    }
    const onForgotPassword = () => {
      navigation.navigate('ForgotPassword')
    } 
    const onSignUpPress = () => {
      navigation.navigate('SignUp')
    }
    

    return (
        <ScrollView>
          <View style={styles.root}>
                <Image 
                  source={Logo}
                  style={[styles.logo, {height: height * 0.3}]}
                  resizeMode= "contain"
                />
              <CustomInput
                name="username"
                placeholder="Username" 
                control={control}
                rules={{
                  required: 'Username is required',
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
                    value: 3, 
                    message: 'Password should be minimum 3 characters long',
                  }
                }}
              />

              
              <CustomButton  text="Sign In" onPress={handleSubmit(onSignInPressed)} />
              
              <CustomButton 
                text="Forgot password?"
                onPress={onForgotPassword}
                type="TERTIARY"
              />

              <SocialSignInButton />

              <CustomButton 
                text="Don't have an account? Create one"
                onPress={onSignUpPress}
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
     width: '70%',
     maxWidth: 300,
     maxHeight:200,

   },
});

export default SignInScreen

  
  

