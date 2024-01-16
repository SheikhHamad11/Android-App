import {View, Text, Button, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default function Home({navigation}) {
  return (
    <View style={styles.flexContainer}>
      <View style={[styles.gallery, styles.flexCenter]}>
        <Text style={styles.h1}>Home<Icon name="home" size={30} color="black" /></Text>
      </View>
      <View style={{marginTop: 10}}>
        <Button
          color={'red'}
          style={styles.button}
          onPress={() => {
            navigation.navigate('About', {name: 'hamad', age: '30'});
          }}
          title="Go to About"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  h1: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'black',
  },

  gallery: {
    width: 200,
    height: 200,
    backgroundColor: 'gray',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
  },
});
