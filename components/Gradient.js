import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

const Gradient = ({ children }) => {
  return (
    <LinearGradient colors={["#F0F2FF", "#E7EBFF"]} style={styles.gradient}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
});

export default Gradient;
