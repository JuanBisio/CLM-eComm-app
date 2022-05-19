import React, {useState} from 'react'
import { StyleSheet, Text, View,Image, useWindowDimensions, ScrollView } from 'react-native';

//Inpust
import Logo from '../../../assets/image/02.png';

import CustomInput from '../../components/CustomInputs/CustomInput';
import CustomButton from '../../components/CustomButtons/CustomButton';
import SocialSignInButton from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const onRegisterPressed = () => {
      navigation.navigate('ConfirmEmail')
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
                placeholder="Username" 
                value={username} 
                setValue={setUsername} 
              />
              <CustomInput
                placeholder="Email" 
                value={email} 
                setValue={setEmail} 
              />
              <CustomInput
                placeholder="Password" 
                value={password} 
                setValue={setPassword}
                secureTextEntry 
              />
              <CustomInput
                placeholder="Repeat Password" 
                value={passwordRepeat} 
                setValue={setPasswordRepeat}
                secureTextEntry 
              />
              <CustomButton 
                text="Register" 
                onPress={onRegisterPressed} 
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
