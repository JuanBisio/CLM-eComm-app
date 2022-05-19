import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, useWindowDimensions, ScrollView } from 'react-native';

// Imagenes and Inpust 
import Logo from '../../../assets/image/02.png';
import CustomInput from '../../components/CustomInputs/CustomInput';
import CustomButton from '../../components/CustomButtons/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButtons/SocialSignInButton';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSignInPressed = () => {
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
                placeholder="Username" 
                value={username} 
                setValue={setUsername} 
              />
              <CustomInput
                placeholder="Password" 
                value={password} 
                setValue={setPassword}
                secureTextEntry 
              />
              <CustomButton  text="Sign In" onPress={onSignInPressed} />
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

  
  

