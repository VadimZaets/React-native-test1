import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import LAMP_SVG from "../../assets/lamp.svg";
import BELL_SVG from "../../assets/bell.svg";
import STAR_SVG from "../../assets/star.svg";

import globalStyles from "../../styles";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <LinearGradient
          colors={["#F8B469", "#FF876D"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          locations={[0, 1]}
          style={styles.left_btn}
        >
          <STAR_SVG width={18} height={18} />
          <Text style={[globalStyles.textSemiBold, styles.left_number]}>
            954
          </Text>
        </LinearGradient>
      </TouchableOpacity>
      <View style={styles.right_container}>
        <TouchableOpacity style={styles.right_btn}>
          <BELL_SVG width={15} height={17} />
          <LinearGradient
            colors={["#E75AC8", "#FF708A"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0, 1]}
            style={styles.quantity}
          >
            <Text style={[globalStyles.textSemiBold, styles.number]}>2</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={styles.right_btn}>
          <LAMP_SVG width={15} height={17} />
          <LinearGradient
            colors={["#7DCB44", "#6DBC33"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0, 1]}
            style={styles.quantity}
          >
            <Text style={[globalStyles.textSemiBold, styles.number]}>5</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  left_btn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 71,
    height: 40,
    borderRadius: 14,
    backgroundColor: "red",
  },
  left_number: {
    fontSize: 11,

    color: "#fff",
    marginLeft: 8,
  },

  right_container: {
    display: "flex",
    flexDirection: "row",
  },
  right_btn: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 14,
    marginLeft: 20,
    backgroundColor: "#F8F9FD",
  },
  quantity: {
    position: "absolute",
    top: -5,
    right: -5,
    alignItems: "center",
    justifyContent: "center",
    width: 22,
    height: 22,
    backgroundColor: "#E75AC8",
    borderRadius: 50,
  },
  number: {
    fontSize: 11,
    color: "#fff",
  },
});
