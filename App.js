import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SecondScreen from "./screens/SecondScreen";
import FirstScreen from "./screens/FirstScreen";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
import Gradient from "./components/Gradient";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Gradient>
      <View style={styles.container}>
        <SecondScreen />
        {/* <FirstScreen /> */}
        <StatusBar style="auto" />
      </View>
    </Gradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
