import Ionicons from '@expo/vector-icons/Ionicons';
import ConsultDoctorBlock from '@/components/consultDoctorBlock';
import { StyleSheet, Image, Platform, SafeAreaView, ScrollView, StatusBar } from 'react-native';



export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <ConsultDoctorBlock />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
      },
      scrollView: {
        marginHorizontal: 10,
      },
      text: {
        fontSize: 42,
      },
});
