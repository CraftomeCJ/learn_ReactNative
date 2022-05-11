import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import React from 'react'

interface Props {
  name: string
}

const ComponentScreen: React.FC = () => {
  const myName: string = 'Christoph Javior Ho'

  return (
    <View style={styles.container}>
      <Text style={styles.textbox1}>
        This is my Component Screen!! </Text>
        <Text style={styles.textbox2}>
        Hello, my name is {myName}!!!</Text>
    </View>
  )
}

export default ComponentScreen

const styles = StyleSheet.create({
  container: {
    color: '#fafafa',
    backgroundColor: '#fcf'
  },
  textbox1: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#red',
    backgroundColor: 'blue',
    alignItems: 'center'
  },
  textbox2: {
    fontSize: 30,
    fontWeight: '300',
    color: '#0f0',
    backgroundColor: 'red',
  }
})
