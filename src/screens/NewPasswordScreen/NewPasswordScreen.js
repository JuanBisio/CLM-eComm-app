import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';

//Inpust 
import CustomInput from '../../components/CustomInputs/CustomInput';
import CustomButton from '../../components/CustomButtons/CustomButton';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassowrd] = useState('');
    const navigation = useNavigation();

    
    const onSubmitPressed = () => {
      navigation.navigate('Home');
    }
    const onSignInPress = () => {
      navigation.navigate('SignIn');
    }


    return (
        <ScrollView>
          <View style={styles.root}>
              <Text style={styles.title}>Reset your password</Text>
              <CustomInput
                placeholder="Code" 
                value={code} 
                setValue={setCode} 
              />
              <CustomInput
                placeholder="Enter your new password" 
                value={newPassword} 
                setValue={setNewPassowrd} 
              />

              <CustomButton 
                text="Submit" 
                onPress={onSubmitPressed} 
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

export default NewPasswordScreen
