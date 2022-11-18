import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={[styles.sunday, styles.textBlock]}>Sunday</Text>
      <Text style={[styles.monday, styles.textBlock]}>Monday</Text>
      <Text style={[styles.tuesday, styles.textBlock]}>Tuesday</Text>
      <Text style={[styles.wednesday, styles.textBlock]}>Wednesday</Text>
      <Text style={[styles.thursday, styles.textBlock]}>Thursday</Text>
      <Text style={[styles.friday, styles.textBlock]}>Friday</Text>
      <Text style={[styles.saturday, styles.textBlock]}>Saturday</Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'right',
    justifyContent: 'space-between',
  },
  textBlock: {
    width: '100%',
    color: 'black',
    fontSize: 22,
    padding: 10,
  },
  monday: {
    backgroundColor: '#90D7F7',
  },
  tuesday: {
    backgroundColor: '#E1BEE7',
  },
  thursday: {
    backgroundColor: '#feccea',
  },
  wednesday: {
    backgroundColor: '#F9CCD0',
  },
  friday: {
    backgroundColor: '#fb0098',
  },
  saturday: {
    backgroundColor: '#ffff99',
  },
  sunday: {
    backgroundColor: '#b3ff66',
  },
});
