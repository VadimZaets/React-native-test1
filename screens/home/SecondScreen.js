import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import Header from "../../components/UI/Header";
import Background from "../../components/UI/Background";
import RiddlesButton from "../../components/UI/RiddlesButton";

import globalStyles from "../../styles";

const SecondScreen = ({ route }) => {
  const [riddle, setRiddle] = useState("");

  useEffect(() => {
    if (route.params && route.params.selectedRiddle) {
      setRiddle(route.params.selectedRiddle);
    }
  }, [route.params]);

  const handlePress = (value) => {
    setRiddle(value);
  };

  return (
    <Background>
      <ScrollView>
        <View style={styles.container}>
          <Header />
          <View style={styles.riddles_btnContainer}>
            <RiddlesButton
              riddle={riddle}
              handlePress={handlePress}
              label="Weekly"
            />
            <RiddlesButton
              riddle={riddle}
              handlePress={handlePress}
              label="3 days"
            />
            <RiddlesButton
              riddle={riddle}
              handlePress={handlePress}
              label="1 days"
            />
            <RiddlesButton
              riddle={riddle}
              handlePress={handlePress}
              label="Special"
            />
          </View>
          <View style={styles.riddles_container}>
            <Text style={[globalStyles.textExtraBold, styles.riddles_title]}>
              {riddle} Riddles
            </Text>
            <Text style={[globalStyles.textRegular, styles.riddles_text]}>
              I can add to several hundred. But can’t subtract multiply or
              divide. Whatever I add to, it’s always in front of you but never
              behind. And the number I add to You can’t really hide!
            </Text>
            <Text style={[globalStyles.textBold, styles.riddles_secondText]}>
              Who am I?
            </Text>
            <View style={styles.input_container}>
              <LinearGradient
                colors={["white", "white", "#E7E9F8"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0, 0.4, 1]}
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
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0, 0.2]}
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
    </Background>
  );
};

export default SecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 46,
    paddingHorizontal: 40,
  },
  riddles_btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
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
