import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <TouchableOpacity style={styles.textContainer}>
        <Text style={styles.text}>Story Hub</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: '#39B39C',
    borderWidth:10,
    borderColor:'teal'
  },

  text: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
  },
});