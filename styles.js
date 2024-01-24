import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textRegular: {
    fontFamily: "Poppins_400Regular",
  },
  textMedium: {
    fontFamily: "Poppins_500Medium",
  },
  textSemiBold: {
    fontFamily: "Poppins_600SemiBold",
  },
  textBold: {
    fontFamily: "Poppins_700Bold",
  },
  textExtraBold: {
    fontFamily: "Poppins_800ExtraBold",
  },
});

export default globalStyles;
