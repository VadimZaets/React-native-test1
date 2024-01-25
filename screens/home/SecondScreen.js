import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import globalStyles from "../../styles";
import { LinearGradient } from "expo-linear-gradient";

const SecondScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.riddles_btnContainer}>
          <TouchableOpacity style={styles.riddles_btn}>
            <Text style={[globalStyles.textMedium, styles.riddles_btnText]}>
              Weekly
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.riddles_btn}>
            <Text style={[globalStyles.textMedium, styles.riddles_btnText]}>
              3 days
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.riddles_btn}>
            <Text style={[globalStyles.textMedium, styles.riddles_btnText]}>
              1 day
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.riddles_btn}>
            <Text style={[globalStyles.textMedium, styles.riddles_btnText]}>
              Special
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.riddles_container}>
          <Text style={[globalStyles.textExtraBold, styles.riddles_title]}>
            Weekly Riddles
          </Text>
          <Text style={[globalStyles.textRegular, styles.riddles_text]}>
            I can add to several hundred. But can’t subtract multiply or divide.
            Whatever I add to, it’s always in front of you but never behind. And
            the number I add to You can’t really hide!
          </Text>
          <Text style={[globalStyles.textBold, styles.riddles_secondText]}>
            Who am I?
          </Text>
          <View style={styles.input_container}>
            <LinearGradient
              colors={["white", "#E7E9F8"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              locations={[0, 1]}
              style={styles.gradient}
            >
              <TextInput
                style={[globalStyles.textRegular, styles.input]}
                placeholder="Your answer"
                placeholderTextColor="#A4A9BF"
              />
            </LinearGradient>
          </View>

          <TouchableOpacity style={styles.submit_btn}>
            <LinearGradient
              colors={["#8FD45B", "#78C83D"]}
              start={{ x: 0.5, y: 0.5 }}
              end={{ x: 1, y: 1 }}
              locations={[0, 0.5]}
              style={styles.submit_gradient}
            >
              <Text style={[globalStyles.textBold, styles.submit_text]}>
                Submit
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.attempt_btn}>
            <Text style={[globalStyles.textMedium, styles.attempt_text]}>
              5 attempts remaining
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  riddles_btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  riddles_btn: {
    alignItems: "center",
    justifyContent: "center",
    width: 72,
    height: 42,
    borderRadius: 16,
    backgroundColor: "#F8F9FD",
    overflow: "hidden",
    opacity: 0.66,
    shadowColor: "#171A36",
    elevation: 20,
  },
  riddles_btnText: {
    fontSize: 12,
    color: "#3D444F",
    opacity: 0.4,
  },
  riddles_container: {
    paddingTop: 40,
  },
  riddles_title: {
    fontSize: 24,
    lineHeight: 30,
    color: "#3D444F",
  },
  riddles_text: {
    fontSize: 16,
    lineHeight: 28,
    marginTop: 17,
  },
  riddles_secondText: {
    fontSize: 16,
    lineHeight: 28,
    marginTop: 30,
    color: "#3D444F",
  },
  input_container: {
    marginTop: 24,
    alignItems: "center",
  },
  gradient: {
    width: 310,
    height: 72,
    borderRadius: 26,
  },
  input: {
    width: 310,
    height: 72,
    padding: 20,
    fontSize: 16,
    borderRadius: 26,
    borderWidth: 2,
    borderColor: "#FFF",
    backgroundColor: "transparent",
  },
  submit_gradient: {
    width: 310,
    height: 72,
    alignItems: "center",
    justifyContent: "center",
  },
  submit_btn: {
    width: 310,
    height: 72,
    alignSelf: "center",
    marginTop: 24,
    borderRadius: 26,
    shadowColor: "#88D152",
    elevation: 20,
    overflow: "hidden",
  },
  submit_text: {
    color: "#FFF",
    fontSize: 14,
  },
  attempt_btn: {
    alignSelf: "center",
    marginTop: 20,
  },
  attempt_text: {
    fontSize: 12,
    color: "#5F6F89",
    lineHeight: 18,
    opacity: 0.66,
  },
});
