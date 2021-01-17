import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Headers from '../Header';
import OrderCard from '../OrderCard';
export default function Orders() {

    return (
      <>
      <Headers/>
        <ScrollView style={styles.container}>
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
        <OrderCard/>
        </ScrollView>
      </>
    );
    
  }
const styles = StyleSheet.create({ 

  container:{
    paddingRight: '5%',
    paddingLeft: '5%',
  }
  

});
