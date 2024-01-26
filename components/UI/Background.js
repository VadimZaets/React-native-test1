import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

const Background = ({ children }) => {
  return (
    <LinearGradient
      colors={["#F0F2FF", "#E7EBFF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      locations={[0, 0.5]}
      style={styles.bg_color}
    >
      {children}
    </LinearGradient>
  );
};

export default Background;

const styles = StyleSheet.create({
  bg_color: {
    flex: 1,
  },
});
