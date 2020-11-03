import React, {useState} from 'react';
import {View, Image, Text, TextInput, ScrollView} from 'react-native';
import {emailVerif, glass, house, wrapper} from '../../core/themes';
import {strings} from '../../core/constants';
import {styles} from './styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const LoginFigma = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.firstContainer}>
        <View>
          <Image source={house} style={styles.logo} />
          <Image source={glass} style={styles.glass} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.findText}>{strings.find}</Text>
          <Text style={styles.homeText}>{strings.home}</Text>
        </View>
      </View>
      <View style={styles.secondContainer}>
        <Image source={wrapper} style={styles.wrapper} />
        <Text style={styles.welcomeText}>{strings.welcome}</Text>
        <Text style={styles.titleInfo}>{strings.loginForEnjoy}</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.emailText}>{strings.email}</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={setEmail}
              value={email}
              autoCapitalize={strings.none}
              autoCorrect={false}
              placeholder={strings.email}
            />
            <Image style={styles.emailVerif} source={emailVerif} />
          </View>
          <Text style={styles.passwordText}>{strings.password}</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              onChangeText={setPassword}
              value={password}
              autoCapitalize={strings.none}
              autoCorrect={false}
              placeholder={strings.password}
              secureTextEntry={hidePassword}
            />
          </View>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>{strings.LOGIN}</Text>
          </TouchableOpacity>
          <View style={styles.bottomContainer}>
            <Text style={styles.fotgotPassword}>{strings.forgotPassword}</Text>
            <Text style={styles.createNewAccount}>{strings.createNewAccount}</Text>
            </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default LoginFigma;
