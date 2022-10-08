import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Platform, ActivityIndicator, Button, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export class Pickerc extends Component {
 
 constructor(props)
 {
 
   super(props);
 
   this.state = { 
 
   isLoading: true,
 
   PickerValueHolder : ''
 
  }
 }
 
 componentDidMount() {
   
      return fetch('https://apiss.zio.mx/apicitas_api/slots.php')
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            isLoading: false,
            dataSource: responseJson
          }, function() {
            // In this block you can do something with new state.
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
 
    GetPickerSelectedItemValue=()=>{
 
      Alert.alert(this.state.PickerValueHolder);
 
    }
 
 render() {
 
   if (this.state.isLoading) {
     return (
       <View style={{flex: 1, paddingTop: 20}}>
         <ActivityIndicator />
       </View>
     );
   }
 
   return (
 
    <View style={styles.MainContainer}>
 
          <Picker
            selectedValue={this.state.PickerValueHolder}
 
            onValueChange={(itemValue, itemIndex) => this.setState({PickerValueHolder: itemValue})} >
 
            { this.state.dataSource.map((item, key)=>(
            <Picker.Item label={item.slot} value={item.slot} key={item} />)
            )}
    
          </Picker>
          <StatusBar style="auto" />
    </View>
           
   );
 }
}
 
const styles = StyleSheet.create({
 
MainContainer :{
 
justifyContent: 'center',
}
 
});

export default Pickerc;