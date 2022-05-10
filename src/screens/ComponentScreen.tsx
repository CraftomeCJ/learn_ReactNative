import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

const ComponentScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the component screen!!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 20
  }
});

export default ComponentScreen;
