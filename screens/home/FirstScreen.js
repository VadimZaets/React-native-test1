import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import globalStyles from "../../styles";
import { LinearGradient } from "expo-linear-gradient";

const FirstScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("SecondScreen")}>
          <LinearGradient
            colors={["#fff", "#f1f3ff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0, 0.5]}
            style={styles.riddle_gradient}
          >
            <View style={styles.riddle_container}>
              <Image
                source={require("../../assets/purple_gradient.png")}
                style={styles.riddle_gradientPurple}
              />
              <Text style={[globalStyles.textExtraBold, styles.riddle_title]}>
                Weekly Riddle
              </Text>
              <Text style={[globalStyles.textMedium, styles.riddle_text]}>
                Riddles you need to solve weekly
              </Text>
            </View>
          </LinearGradient>
          <Image
            source={require("../../assets/question.png")}
            style={styles.riddle_image}
          />
        </TouchableOpacity>

        <View style={styles.years_wrap}>
          <TouchableOpacity onPress={() => navigation.navigate("SecondScreen")}>
            <LinearGradient
              colors={["#fff", "#f1f3ff"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              locations={[0, 0.8]}
              style={styles.riddle_gradient}
            >
              <View style={styles.year_container}>
                <Image
                  source={require("../../assets/orange_gradient.png")}
                  style={styles.year_gradient}
                />

                <Text style={[globalStyles.textExtraBold, styles.year_title]}>
                  3 Days {"\n"}Exp. Riddles
                </Text>
                <Text style={[globalStyles.textMedium, styles.year_text]}>
                  3 days {"\n"}for solving
                </Text>
              </View>
            </LinearGradient>
            <Image
              source={require("../../assets/number-three.png")}
              style={styles.year_number}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("SecondScreen")}>
            <LinearGradient
              colors={["#fff", "#f1f3ff"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              locations={[0, 0.8]}
              style={styles.riddle_gradient}
            >
              <View style={styles.year_container}>
                <Image
                  source={require("../../assets/pink_gradient.png")}
                  style={styles.year_gradientPink}
                />

                <Text style={[globalStyles.textExtraBold, styles.year_title]}>
                  1 Day {"\n"}Exp. Riddles
                </Text>
                <Text style={[globalStyles.textMedium, styles.year_text]}>
                  1 day {"\n"}for solving
                </Text>
              </View>
            </LinearGradient>
            <Image
              source={require("../../assets/number-one.png")}
              style={styles.year_numberOne}
            />
          </TouchableOpacity>
        </View>
        {/*  */}
        <TouchableOpacity
          style={styles.special_touch}
          onPress={() => navigation.navigate("SecondScreen")}
        >
          <LinearGradient
            colors={["#fff", "#f1f3ff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0, 0.5]}
            style={styles.riddle_gradient}
          >
            <View style={styles.riddle_container}>
              <Image
                source={require("../../assets/blue-red-gradient.png")}
                style={styles.riddle_blueRedGradient}
              />
              <Text style={[globalStyles.textExtraBold, styles.special_title]}>
                Special Brand Riddles
              </Text>
              <Text style={[globalStyles.textMedium, styles.special_text]}>
                Riddles related with popular brands {"\n"}such as
              </Text>
              <View style={styles.brand_container}>
                <Image
                  source={require("../../assets/nike.png")}
                  style={styles.brands_image}
                />
                <Image
                  source={require("../../assets/mcdonalds.png")}
                  style={styles.brands_image}
                />
                <Image
                  source={require("../../assets/lego.png")}
                  style={styles.brands_image}
                />
              </View>
            </View>
          </LinearGradient>
          <Image
            source={require("../../assets/branding.png")}
            style={styles.brand_image}
          />
          <Image
            source={require("../../assets/box.png")}
            style={styles.box_image}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 42,
    paddingHorizontal: 40,
  },
  riddle_container: {
    position: "relative",
    width: "100%",
    height: 200,
    justifyContent: "center",
    paddingLeft: 26,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#FFF",
  },
  riddle_gradient: {
    borderRadius: 32,
  },
  riddle_gradientPurple: {
    position: "absolute",
    top: -26,
    right: -24,
  },
  riddle_title: {
    width: 123,
    fontSize: 24,
    lineHeight: 30,
    color: "#3D444F",
  },
  riddle_text: {
    width: 116,
    marginTop: 16,
    fontSize: 12,
    lineHeight: 18,
    color: "#5F6F89",
  },
  riddle_image: {
    width: 193,
    height: 164,
    position: "absolute",
    zIndex: 1,
    top: 12,

    right: -10,
  },
  years_wrap: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 26,
  },

  year_container: {
    position: "relative",
    width: 146,
    height: 168,
    justifyContent: "flex-end",
    borderRadius: 32,
    borderWidth: 2,
    borderColor: "#FFF",
    padding: 20,
  },
  year_gradient: {
    position: "absolute",
    top: -26,
    right: -26,
    zIndex: 1,
  },
  year_gradientPink: {
    position: "absolute",
    width: 146,
    height: 168,
    top: -20,
    right: -20,
    zIndex: 1,
  },
  year_number: {
    width: 90,
    height: 90,
    position: "absolute",
    zIndex: 2,
    top: -20,
    right: -10,
  },
  year_numberOne: {
    width: 82,
    height: 118,
    position: "absolute",
    zIndex: 2,
    top: -20,
    right: -10,
  },
  year_title: {
    width: 88,
    fontSize: 14,
    lineHeight: 20,
    color: "#3D444F",
    zIndex: 2,
  },
  year_text: {
    width: 74,
    textAlign: "left",
    marginTop: 14,
    fontSize: 12,
    lineHeight: 18,
    color: "#5F6F89",
    zIndex: 2,
  },
  special_touch: {
    marginTop: 20,
  },
  brand_image: {
    position: "absolute",
    top: -20,
    right: -50,
    width: 220,
    height: 210,
  },
  brands_image: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  box_image: {
    position: "absolute",
    top: 60,
    right: 100,
    width: 80,
    height: 96,
  },
  riddle_blueRedGradient: {
    position: "absolute",
    right: -50,
  },
  special_title: {
    width: 116,
    fontSize: 16,
    lineHeight: 22,
  },
  special_text: {
    width: 130,
    fontSize: 12,
    lineHeight: 18,
    marginTop: 20,
  },
  brand_container: {
    display: "flex",
    flexDirection: "row",
    marginTop: 18,
  },
});
