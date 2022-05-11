import {
  Text,
  StyleSheet,
  View
} from 'react-native';
import React from 'react';

const HomeScreen: React.FC = () => {

  return (
    <View>
      <Text style={styles.text}>
      This is my HomeScreen and I will build a Carousel SplashScreen here!!
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'red'
  },
});

export default HomeScreen;
