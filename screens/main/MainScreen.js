import React from "react";
import { Platform, StyleSheet, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SettingsScreen from "./SettingsScreen";
import LeaderBoardScreen from "./LeaderBoardScreen";
import HomeScreen from "./HomeScreen";
import HOME_SVG_Active from "../../assets/home-active.svg";
import HOME_SVG from "../../assets/home.svg";
import Leader_SVG_Active from "../../assets/leader-active.svg";
import Leader_SVG from "../../assets/leader.svg";
import Seatings_SVG_Active from "../../assets/settings-active.svg";
import Seatings_SVG from "../../assets/settings.svg";

import globalStyles from "../../styles";

const Tabs = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: true,

        tabBarStyle: {
          width: "100%",
          height: Platform.OS === "ios" ? 100 : 70,
          padding: 10,
          backgroundColor: "transparent",
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontFamily: "Poppins_600SemiBold",

          color: "#5F6F89",
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,

          tabBarIcon: ({ focused, size, color }) => {
            return (
              <TouchableOpacity>
                {focused ? (
                  <HOME_SVG_Active width={14} height={16} />
                ) : (
                  <HOME_SVG width={14} height={16} />
                )}
              </TouchableOpacity>
            );
          },
          tabBarLabel: ({ focused }) => {
            return (
              <TouchableOpacity style={styles.label_container}>
                <Text
                  style={[
                    globalStyles.textSemiBold,
                    focused ? styles.label_focusedText : styles.label_text,
                  ]}
                >
                  Home
                </Text>
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tabs.Screen
        name="Leaderboard"
        component={LeaderBoardScreen}
        options={{
          headerShown: false,

          tabBarIcon: ({ focused, size, color }) => {
            return (
              <TouchableOpacity>
                {focused ? (
                  <Leader_SVG_Active width={18} height={16} />
                ) : (
                  <Leader_SVG width={18} height={16} />
                )}
              </TouchableOpacity>
            );
          },
          tabBarLabel: ({ focused }) => {
            return (
              <TouchableOpacity style={styles.label_container}>
                <Text
                  style={[
                    globalStyles.textSemiBold,
                    focused ? styles.label_focusedText : styles.label_text,
                  ]}
                >
                  Leaderboard
                </Text>
              </TouchableOpacity>
            );
          },
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerShown: false,

          tabBarIcon: ({ focused, size, color }) => {
            return (
              <TouchableOpacity>
                {focused ? (
                  <Seatings_SVG_Active width={16} height={16} />
                ) : (
                  <Seatings_SVG width={16} height={16} />
                )}
              </TouchableOpacity>
            );
          },
          tabBarLabel: ({ focused }) => {
            return (
              <TouchableOpacity style={styles.label_container}>
                <Text
                  style={[
                    globalStyles.textSemiBold,
                    focused ? styles.label_focusedText : styles.label_text,
                  ]}
                >
                  Settings
                </Text>
              </TouchableOpacity>
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  label_container: {
    marginBottom: 10,
  },
  label_text: {
    color: "#5F6F89",
    fontSize: 10,
    lineHeight: 11,
    opacity: 0.4,
  },
  label_focusedText: {
    color: "#3D444F",
    fontSize: 10,
    lineHeight: 11,
  },
  svg: {
    alignSelf: "center",
    opacity: 0.6,
    fill: "red",
  },
});

export default MainScreen;
