import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButtons/CustomButton'


const SocialSignInButton = () => {
    const onSignInFacebook = () => {
        console.warn('Facebook')
      }
      const onSignInGoogle = () => {
        console.warn('Google')
      }
      const onSignInApple = () => {
        console.warn('onSignInApple')
      }
  return (
    <>
        <CustomButton  
            text="Sign In with Facebook" 
            onPress={onSignInFacebook} 
            bgColor="#E7EAF4"
            fgColor="#4765A9"
        />
        <CustomButton  
            text="Sign In with Google" 
            onPress={onSignInGoogle} 
            bgColor="#F5E5E5"
            fgColor="#DD4D44"
        />
        <CustomButton  
            text="Sign In with Apple" 
            onPress={onSignInApple} 
            bgColor="#e3e3e3"
            fgColor="#363636"
        />
    </>
  )
}

export default SocialSignInButton