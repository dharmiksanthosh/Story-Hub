import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';

export default class ReadStoryScreen extends React.Component {
    render(){
        return(
            <View>
              <Header/>
              <View style={{justifyContent:'center'}}>
                  <Text style={{textAlign:'center'}}>Read Story</Text>
              </View>
            </View>
        );
    }
}