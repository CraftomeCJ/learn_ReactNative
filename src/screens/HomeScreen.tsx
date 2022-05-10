import { StyleSheet,
  Text,
  View,
  Button,
  ScrollView
} from 'react-native'
import React from 'react'

const HomeScreen: React.FC = (navigation) => {

  return (
    <ScrollView>
        <View>

          <Text style={styles.styleHeader}>

            Good day!! This is Udemy's React Native Course Home Screen
          </Text>

          <Button
          title="Go to Component Demo"
          onPress={() => navigation.navigate('Components')}
          />
              </View>
</ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  styleHeader: {
    marginVertical: 20,
    fontSize: 40,
    color: 'yellow',
    backgroundColor: 'lightblue',
  },
  styleTouch: {
    marginVertical: 15,
    fontSize: 16,
    color: 'blue',
    backgroundColor: 'lightyellow',
  },
  styleMain: {
    marginVertical: 10,
    fontSize: 16,
    color: 'orange',
    backgroundColor: 'lightpink'
  }
})
