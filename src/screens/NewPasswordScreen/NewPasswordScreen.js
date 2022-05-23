import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useForm } from "react-hook-form";

//Inpust 
import CustomInput from '../../components/CustomInputs/CustomInput';
import CustomButton from '../../components/CustomButtons/CustomButton';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {
    const navigation = useNavigation();
    const {control, handleSubmit, watch} = useForm();
    
    const onSubmitPressed = (data) => {
      console.warn(data)
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
                name = "code"
                control={control}
                placeholder="Code" 
                rules={{required: 'Code is required'}}
              />
              <CustomInput
                name = "password"
                placeholder="Enter your new password"
                control={control}
                secureTextEntry
                rules={{
                  required: 'Password is required',
                  minLength: {
                    value: 7, 
                    message: 'Password should be at least 7 characters long',
                  }
                }}
              />

              <CustomButton 
                text="Submit" 
                onPress={handleSubmit(onSubmitPressed)} 
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
