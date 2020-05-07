import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Colors from '../assets/colors';

const image = require('../assets/logoBlue.png');
export default function Login({ navigation }) {
    const [value, onChangeText] = React.useState('Its the app');
    return (
    <SafeAreaView>
    <View>
        <View>
        <Image source={ image } resizeMode="contain" style={{ width: 200, height: 200 }} />
        </View>
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Up and Adam Fitness</Text>
          <Text style={styles.sectionDescription}>
            Let's get fit
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={[styles.sectionTitle, { alignSelf: 'center' }]}>Login</Text>
          <Text style={styles.sectionDescription}>
            Email
          </Text>
        </View>
        <View styles={styles.sectionContainer}>
          <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginHorizontal: 20, borderRadius: 20 }} 
          onChangeText={text => onChangeText(text)}
          value={value}
         />
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionDescription}>
            Password
          </Text>
        </View>
        <View styles={styles.sectionContainer}>
          <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginHorizontal: 20, borderRadius: 20 }} 
          onChangeText={text => onChangeText(text)}
          value={value}
          secureTextEntry />
        </View>
        <View style={[{backgroundColor: "#00ADD0", marginHorizontal: 120, borderRadius: 20 }, styles.sectionContainer]}>
          <Button
            onPress={ () => navigation.navigate('Home') }
            title="Login"
            color="white"
          />
        </View>
      </View>
    </View>
  </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    engine: {
      position: 'absolute',
      right: 0,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.white,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.white,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.white,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
  });