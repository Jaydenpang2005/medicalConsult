
import Ionicons from '@expo/vector-icons/Ionicons';
import ConsultDoctorBlock from '@/components/consultDoctorBlock';
import OnlineConsult from '@/components/OnlineConsult';
import { StyleSheet, Image, Platform, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import React from 'react';
import FakePage from '@/components/fakePage';


export default function UserScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
        {currentPage}
      </ScrollView> */}
      <FakePage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: '#fff',
      },
      scrollView: {
        marginHorizontal: 10,
      },
      text: {
        fontSize: 42,
      },
});

