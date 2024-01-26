import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import SecondScreen from "../home/SecondScreen";
import FirstScreen from "../home/FirstScreen";

const HomeStack = createStackNavigator();

const HomeScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="FirstScreen"
        component={FirstScreen}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="SecondScreen"
        component={SecondScreen}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
});
