import { View, Text, TextInput, StyleSheet} from 'react-native'
import React from 'react';
import {Controller} from 'react-hook-form';

const CustomInput = ({ 
  control, 
  name, 
  rules = {}, 
  placeholder, 
  secureTextEntry 
}) => {
  return (
    <Controller 
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>  
          <View 
            style={[styles.container, { borderColor: error ? 'red' : '#e8e8e8' }]}>
              <TextInput  
                value={value} 
                onChangeText={onChange} 
                onBlur={onBlur}
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
              />
          </View>
          {error && (
            <Text style={{color: 'red', alignSelf:'stretch'}}>{error.message || 'Error'}</Text>
          )}
        </> 
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    width:'100%',
    height:40,

    borderColor:'#e8e8e8',
    borderWidth:1,
    borderRadius:5,

    paddingHorizontal:20,
    marginVertical: 7,

  },
  input: {
    flex:1
  },
})

export default CustomInput