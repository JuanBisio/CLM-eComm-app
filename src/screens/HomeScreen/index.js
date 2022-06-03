import { View, Text } from 'react-native'
import React from 'react'
import { Auth } from 'aws-amplify'

const HomeScreen = () => {

  signOut = () => {
    Auth.signOut()
  }

  return (
    <View style={{flex: 1}}>
      <Text style={{fontSize:24, alignSelf:'center'}}>Home, sweet home</Text>
      <Text 
        onPress={signOut}
        style={{color:'red', textAlign:'center'}}
      >
          Sign Out
      </Text>
    </View>
  )
}

export default HomeScreen