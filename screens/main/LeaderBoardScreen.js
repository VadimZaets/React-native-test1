import { StyleSheet, Text, View } from "react-native";

import globalStyles from "../../styles";

const LeaderBoardScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={[globalStyles.textExtraBold, styles.text]}>Leaderboard</Text>
    </View>
  );
};

export default LeaderBoardScreen;

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
