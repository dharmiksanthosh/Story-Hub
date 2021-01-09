import * as React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native';
import Header from '../components/Header';

export default class WriteStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      
    };
  }
  render() {
    return (
      <View>
        <Header />
        <View style={{marginTop:20}}>
          <TextInput
            style={styles.input1}
            placeholder={'Story Title'}/>
          <TextInput
            style={styles.input1}
            placeholder={'Author'}/>
          <TextInput
            style={styles.input2}
            placeholder={'Write Your Story'}
            multiline={true}/>
          <TouchableOpacity style={styles.button}>
            <Text style={{fontWeight:'bold',fontSize:18}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
    input1: {
      width:320,
      height:30,
      borderWidth:2,
      alignSelf:'center',
      margin:5
    },
    input2: {
      width:320,
      height:270,
      borderWidth:2,
      alignSelf:'center',
      margin:10
    },
    button:{
      backgroundColor:'#39B39C',
      width:70,
      height:30,
      alignSelf:'center',
      alignItems:'center',
      justifyContent: 'center',
      borderLeftColor:'#ccc',
      borderTopColor:'#ccc',
      borderRightColor:'#444',
      borderBottomColor:'#444',
      borderWidth:3
    }
  }
);
