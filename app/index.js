import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.name}>徐丞睿</Text>
        <View style={styles.line} />
        <Text style={styles.id}>111319022</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    alignItems: 'center',
  },
  name: {
    fontSize: 100,
    fontWeight: '900',
    color: '#000',
    letterSpacing: 10,
    marginBottom: 15,
  },
  line: {
    width: 60,
    height: 2,
    backgroundColor: '#000',
    marginVertical: 20,
  },
  id: {
    fontSize: 50,
    fontWeight: '300',
    color: '#000',
    letterSpacing: 6,
  },
});