import { StyleSheet, Text, View } from "react-native";

import globalStyles from "../../styles";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={[globalStyles.textExtraBold, styles.text]}>Settings</Text>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
  },
});
