import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>AUTOTECH</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    width: "100%",
    backgroundColor: "#0c1322",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 1,
  },
  footerText: {
    color: "#ffffff",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 2,
  },
});
