import React from 'react';
import { StyleSheet, Text, View , Image, } from 'react-native';
import image1 from './images/img1.svg';
import { Emitter } from 'react-native-particles';
import './App.css';
import startIcon from './images/start.png';
import SlidePart from './SlidePart';
import Overlay from './Reciever/Overlay'
// import Box from '@material-ui/core/Box'
import { Header, PricingCard, Input,Card, Button, Icon, ButtonGroup, Slider } from 'react-native-elements';

export default function App() {
  const buttons = ['Start', 'Stop']
  return (
    <View style={styles.container}>
    
      <Header
        containerStyle={{
          backgroundColor: 'purple',
          outline: 'purple',
          justifyContent: 'space-around',
          width: '100vw'
        }}
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'VOICE DATA ENCRYPTION', style: { color: '#fff', fontSize: '20px' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      {/* <div className='full-pack'>
      </div> */}
      <Text >
        <div className='above-full-pack'>
          
          <div className='pack'>
            {/* <h2>RECORDER</h2> */}
            <Image
                style={{width: 180, height: 180, alignItems: 'center', marginTop: '20%', marginBottom: '10%'}}
                source={require('./images/microphone.svg')} 
            />
            <br/>
            <Image
                style={{width: 50, height: 50, alignItems: 'center', marginBottom: '30%'}}
                source={require('./images/pulse.svg')} 
            />
          </div>
          <br/><br/>
          <div>
            <SlidePart/>
          </div>
          <div className='startandstop'>
            <Button
              buttonStyle={{margin: '5%', padding: '10%', width: '30vw', backgroundColor:'white', 
              outline:'2px solid green', boxShadow: '0 0 10px #B1C1C0' }}
              titleStyle={{color: 'black'}}
              title="  START"
              icon={
                <Image
                style={{width: 20, height: 20, alignItems: 'center', marginRight: '2%'}}
                source={require('./images/power.svg')} />
              }

            />
            <Button
              buttonStyle={{margin: '5%', padding: '10%',  width: '30vw', backgroundColor:'white', 
              outline:'2px solid red', boxShadow: '0 0 10px #B1C1C0' }}
              titleStyle={{color: 'black'}}
              icon={
                <Image
                style={{width: 20, height: 20, alignItems: 'center', marginRight: '2%'}}
                source={require('./images/delete.svg')} />
              }
              
              title="  STOP"
            />
            
          </div>
          {/* <br/>
          <Button
              buttonStyle={{margin: '5%', padding: '10%',  width: '30vw', backgroundColor:'white', 
              outline:'2px solid green', boxShadow: '0 0 10px #B1C1C0' }}
              titleStyle={{color: 'black'}}
              icon={
                <Image
                style={{width: 20, height: 20, alignItems: 'center', marginRight: '2%'}}
                source={require('./images/mail.svg')} />
              }
              
              title="  SAVE"
          /> */}
          <Overlay />
        </div>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'black',
  },

  text:{
    color: 'black',
    // marginTop: '13%',
    alignItems: 'center'
  },

  card:{
    alignItems: 'center',
  },
  icon:{
    // padding: '5%'
  },
  
  

});
