import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';

export default class App extends React.Component {
  render(){
    return (
      <AppContainer />
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Write: {screen: WriteStoryScreen},
  Read: {screen: ReadStoryScreen}
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        if (routeName === 'Read') {
          return (
            <Image style={{width:40,height:40}} source={require('./assets/read.png')}/>
          )
        } else if (routeName === 'Write') {
          return (
            <Image style={{width:40,height:40}} source={require('./assets/write.png')}/>
          )
        }
      },
      tabBarOptions: {
        activeTintColor:'black',
        activeBackgroundColor:'#ccc',
        style: {
            backgroundColor: '#f7f7f7',
            height: 70
        },
      }
    }),
  }
)
const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  
});