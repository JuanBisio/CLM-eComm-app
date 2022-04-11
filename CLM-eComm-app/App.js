import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, Dimensions,TouchableOpacity} from 'react-native';
import * as React from "react";
import { LinearGradient } from 'expo-linear-gradient';

const {width, height} = Dimensions.get('window')



const App = () => {
  return (
      <View style={styles.mainContainer}>
        <View style={styles.containerSVG}>
          <Image style={styles.Image}source={require('./assets/image/splash2.png')}></Image>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subTitle}>Sign On to your account</Text>
          <TextInput 
            placeholder='lamerced@gmail.com'
            style={styles.textInput}>
          </TextInput>

          <TextInput 
            placeholder='password' 
            style={styles.textInput}>
          </TextInput>

            {/* Button  */}
            <TouchableOpacity style={styles.TouchableOpacity}>
                  <LinearGradient
                      // Button Linear Gradient
                      colors={['#292929', '#292929', '#292929']}
                      style={styles.button}
                  >
                      <Text style={styles.text}>Sign in</Text>
                  </LinearGradient>
            </TouchableOpacity>

          <StatusBar style="auto" />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor:'#f1f1f1',
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
  },
  containerSVG:{
    width:width,
    justifyContent:'center',
    alignItems:'center',
  },
  title: {
    fontSize: 80,
    color: '#34434D',
    fontWeight: 'bold'
  },
  subTitle:{
    fontSize: 25,
    color: '#292929',
  },
  textInput:{
    borderWidth:1,
    padding:10,
    paddingStart:30,
    width:'70%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#ffffff',
    borderColor:'#ffff'
  },
  Image:{
    width:350,
    // height:300
  },
  text:{
    fontSize:15,
    color:'#fff',
    margin:10,
    textAlign:'center',
    alignItems:'center',
  },
  TouchableOpacity:{
    width:'50%',
    height: 30,
  },
  button:{
    backgroundColor:'#292929',
    borderRadius:10,
    marginTop:10,
  }
  
});

export default App
