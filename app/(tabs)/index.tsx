import FakePage from '@/components/fakePage';
import MainBanner from '@/components/mainBanner';
import { 
    Image, 
    StyleSheet, 
    Platform, SafeAreaView,
    ScrollView, 
    StatusBar,
    Text, 
} from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
        <MainBanner />
      </ScrollView> */}
      <FakePage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
         backgroundColor:'white'
      },
      scrollView: {
        marginHorizontal: 10,
      },
      text: {
        fontSize: 42,
      },
});
