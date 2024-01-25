import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Svg, { Path } from "react-native-svg";

import SettingsScreen from "./SettingsScreen";
import LeaderBoardScreen from "./LeaderBoardScreen";
import HomeScreen from "./HomeScreen";

const Tabs = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: true,

        tabBarStyle: {
          width: "100%",
          height: 100,
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
              <TouchableOpacity style={styles.focusedBtnWrap}>
                <Svg
                  width={20}
                  height={20}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={styles.svg}
                >
                  <Path
                    d="M1 7.58824L8 1L15 7.58824L15 17H1L1 7.58824Z"
                    stroke="#3D444F"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </Svg>
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
              <TouchableOpacity style={styles.focusedBtnWrap}>
                <Svg
                  width={20}
                  height={20}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={styles.svg}
                >
                  <Path
                    d="M2.28571 4.42857L4 14.7143H16L17.7143 4.42857M2.28571 4.42857L7 8.28571L10 3.57143M2.28571 4.42857C2.99579 4.42857 3.57143 3.85294 3.57143 3.14286C3.57143 2.43278 2.99579 1.85714 2.28571 1.85714C1.57563 1.85714 1 2.43278 1 3.14286C1 3.85294 1.57563 4.42857 2.28571 4.42857ZM17.7143 4.42857L13 8.28571L10 3.57143M17.7143 4.42857C18.4244 4.42857 19 3.85294 19 3.14286C19 2.43278 18.4244 1.85714 17.7143 1.85714C17.0042 1.85714 16.4286 2.43278 16.4286 3.14286C16.4286 3.85294 17.0042 4.42857 17.7143 4.42857ZM10 3.57143C10.7101 3.57143 11.2857 2.99579 11.2857 2.28571C11.2857 1.57563 10.7101 1 10 1C9.28992 1 8.71429 1.57563 8.71429 2.28571C8.71429 2.99579 9.28992 3.57143 10 3.57143Z"
                    stroke="#5F6F89"
                    stroke-width={1.5}
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </Svg>
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
              <TouchableOpacity style={styles.focusedBtnWrap}>
                <Svg
                  width={20}
                  height={20}
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={styles.svg}
                >
                  <Path
                    d="M2.28571 4.42857L4 14.7143H16L17.7143 4.42857M2.28571 4.42857L7 8.28571L10 3.57143M2.28571 4.42857C2.99579 4.42857 3.57143 3.85294 3.57143 3.14286C3.57143 2.43278 2.99579 1.85714 2.28571 1.85714C1.57563 1.85714 1 2.43278 1 3.14286C1 3.85294 1.57563 4.42857 2.28571 4.42857ZM17.7143 4.42857L13 8.28571L10 3.57143M17.7143 4.42857C18.4244 4.42857 19 3.85294 19 3.14286C19 2.43278 18.4244 1.85714 17.7143 1.85714C17.0042 1.85714 16.4286 2.43278 16.4286 3.14286C16.4286 3.85294 17.0042 4.42857 17.7143 4.42857ZM10 3.57143C10.7101 3.57143 11.2857 2.99579 11.2857 2.28571C11.2857 1.57563 10.7101 1 10 1C9.28992 1 8.71429 1.57563 8.71429 2.28571C8.71429 2.99579 9.28992 3.57143 10 3.57143Z"
                    stroke="#5F6F89"
                    stroke-width={1.5}
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </Svg>
              </TouchableOpacity>
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  focusedBtnWrap: {},
  svg: {
    alignSelf: "center",
    opacity: 0.6,
  },
});

export default MainScreen;
