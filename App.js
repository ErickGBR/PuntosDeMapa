import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import { Map, Modal, Panel} from './components';


export default function App() {
  const handlersLongPress =({nativeEvent})=>{
    console.log(nativeEvent);
  }

  return (
    <View style={styles.container}>
        <Map longPress={handlersLongPress} />
        <Modal/>
        <Panel/>
      </View>
  );
}

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
