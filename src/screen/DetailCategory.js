import * as React from 'react';
import {Text, View, StyleSheet, ImageBackground, Image} from 'react-native';
import Container from '../components/Container';
import {input, button} from '../assets/styles/styleComponent';
import ListDetail from '../components/ListDetail';
// import {image} from '../assets/images/backgroud-image.png'

const image = {uri: 'https://reactjs.org/logo-og.png'};

const DetailCategory = ({navigation}) => {
   return (
      <Container>
         <ListDetail
            path={require('../assets/images/list-car1.png')}
            title="Vespa Matic"
            description="Max for 2 person"
            detail="2.1 km for your location"
            status="Avaliable"
            price="Rp. 140.000"
            rate="4.5"
            navigate={() => navigation.navigate('Reservation')}
         />
         <ListDetail
            path={require('../assets/images/list-car1.png')}
            title="Vespa Matic"
            description="Max for 2 person"
            detail="2.1 km for your location"
            status="Avaliable"
            price="Rp. 140.000"
            rate="4.5"
         />
         <ListDetail
            path={require('../assets/images/list-car1.png')}
            title="Vespa Matic"
            description="Max for 2 person"
            detail="2.1 km for your location"
            status="Avaliable"
            price="Rp. 140.000"
            rate="4.5"
         />
      </Container>
   );
};

const addStyles = StyleSheet.create({
   input: {
      marginTop: 18,
      fontSize: 14,
      fontWeight: '700',
      backgroundColor: 'rgba(60,60,60, 0.5)',
      ...input,
   },
   imageBackgroundSearch: {
      height: 280,
   },
   icon: {
      position: 'absolute',
      color: 'white',
      fontWeight: '700',
      fontSize: 20,
      right: 20,
      marginTop: 20,
   },
   layoutSearch: {
      position: 'relative',
      flexDirection: 'row',
      marginTop: 10,
      alignItems: 'center',
   },

   imageList: {
      marginHorizontal: 10,
      height: 168,
      width: 265,
      borderRadius: 10,
   },
});

export {addStyles};

export default DetailCategory;
