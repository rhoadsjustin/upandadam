import React from 'react';
import { View,
    Text,
    Image,
    Button
  } from 'react-native';
  import { TextInput } from 'react-native-gesture-handler';
import { styles } from './Login.js';

export const SignUp = ({ navigation }) => {
    const [value, onChangeText] = React.useState('Its the app');
return (
<View>
 <View style={styles.sectionContainer}>
          <Text style={[styles.sectionTitle, { alignSelf: 'center' }]}>Sign Up</Text>
          <Text style={styles.sectionDescription}>
            Name
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
            Age
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
            Company
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
        <View style={[{backgroundColor: "#00ADD0", marginHorizontal: 80, borderRadius: 20 }, styles.sectionContainer]}>
          <Button
            onPress={ () => navigation.navigate('Home') }
            title="Create Account"
            color="white"
          />
        </View>
    </View>
)
    };