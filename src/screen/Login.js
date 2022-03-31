import * as React from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
import {styles} from '../assets/styles/styles';
import Container from '../components/Container';
import Input from '../components/Input';
import CButton from '../components/Button';
import stylePrimary from '../assets/styles/stylePrimary';
import {input, button} from '../assets/styles/styleComponent';
import image from '../assets/images/backgroud-image.png';

const Login = () => {
   return (
      <View style={styles.background}>
         <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}>
            <Container>
               <Text style={addStyles.textTitle}>LET’S EXPLORE THE WORLD</Text>
               <View style={addStyles.layoutForm}>
                  <Input classInput={addStyles.input} placeholder="Username" />
                  <Input classInput={addStyles.input} placeholder="Password" />
                  <Text style={addStyles.text}>Forgot Password?</Text>
                  <CButton
                     classButton={addStyles.buttonLogin}
                     textButton={addStyles.textLogin}>
                     Login
                  </CButton>
                  <View style={addStyles.layoutLinkSignup}>
                     <Text style={addStyles.text}>Don’t have account?</Text>
                     <Text style={[addStyles.textLink]}>Sign up now</Text>
                  </View>
               </View>
            </Container>
         </ImageBackground>
      </View>
   );
};

const addStyles = StyleSheet.create({
   textTitle: {
      color: stylePrimary.baseFontColor,
      fontSize: stylePrimary.largeFontSize,
      lineHeight: 42,
      fontWeight: '900',
      textAlign: 'left',
      marginTop: 50,
      marginBottom: 100,
   },
   input: {
      marginTop: 18,
      backgroundColor: 'rgba(180, 180, 180, 0.5)',
      fontSize: stylePrimary.baseFontSize,
      ...input,
   },
   layoutLinkSignup: {
      marginTop: 40,
      textAlign: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
   },
   text: {
      color: stylePrimary.baseFontColor,
      fontSize: 14,
      marginTop: 10,
      marginBottom: 30,
   },
   textLink: {
      fontWeight: '700',
      color: stylePrimary.baseFontColor,
      fontSize: 14,
      marginTop: 10,
      marginBottom: 30,
      marginLeft: 5,
   },
   layoutForm: {
      marginTop: 50,
   },
   buttonLogin: {
      backgroundColor: stylePrimary.secondaryColor,
      justifyContent: 'center',
      alignItems: 'center',
      ...button,
   },
   textLogin: {
      color: stylePrimary.mainColor,
      fontWeight: '900',
      fontSize: 18,
   },
});

export {addStyles};

export default Login;
