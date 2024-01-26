import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Shadow } from "react-native-shadow-2";

import globalStyles from "../../styles";

const RiddlesButton = ({ riddle, handlePress, label }) => {
  return (
    <>
      {riddle === label ? (
        <Shadow
          distance={4}
          startColor={"rgba(136, 209, 82, 0.40)"}
          offset={[0, 0]}
        >
          <TouchableOpacity
            style={[styles.riddles_btn, styles.riddles_btnActive]}
            onPress={() => handlePress(label)}
          >
            <Text
              style={[
                globalStyles.textMedium,
                styles.riddles_btnText,
                styles.riddles_btnTextActive,
              ]}
            >
              {label}
            </Text>
          </TouchableOpacity>
        </Shadow>
      ) : (
        <TouchableOpacity
          style={styles.riddles_btn}
          onPress={() => handlePress(label)}
        >
          <Text style={[globalStyles.textMedium, styles.riddles_btnText]}>
            {label}
          </Text>
        </TouchableOpacity>
      )}
    </>
  );
};
export default RiddlesButton;

const styles = StyleSheet.create({
  riddles_btn: {
    alignItems: "center",
    justifyContent: "center",
    width: 72,
    height: 42,
    borderRadius: 16,
    backgroundColor: "#F8F9FD",
    overflow: "hidden",
    opacity: 0.66,
  },
  riddles_btnActive: {
    borderWidth: 1,
    borderColor: "#7ECC45",
    opacity: 1,
  },
  riddles_btnText: {
    fontSize: 12,
    color: "#3D444F",
    opacity: 0.4,
  },
  riddles_btnTextActive: {
    color: "#7ECC45",
    opacity: 1,
  },
});
