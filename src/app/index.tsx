import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

import Footer from "../components/Footer";
import Header from "../components/Header";

import AreaClienteScreen from "../screens/AreaClienteScreen";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import OrcamentoScreen from "../screens/OrcamentoScreen";
import ProdutosScreen from "../screens/ProdutosScreen";
import SobreScreen from "../screens/SobreScreen";
import SolucoesScreen from "../screens/SolucoesScreen";

export type ScreenName =
  | "HOME"
  | "SOLUCOES"
  | "PRODUTOS"
  | "SOBRE"
  | "ORCAMENTO"
  | "LOGIN"
  | "CLIENTE";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>("HOME");

  const renderScreen = () => {
    switch (currentScreen) {
      case "HOME":
        return (
          <HomeScreen
            onNavigate={(screen: ScreenName) => setCurrentScreen(screen)}
          />
        );
      case "SOLUCOES":
        return (
          <SolucoesScreen
            onNavigate={(screen: ScreenName) => setCurrentScreen(screen)}
          />
        );
      case "PRODUTOS":
        return (
          <ProdutosScreen
            onNavigate={(screen: ScreenName) => setCurrentScreen(screen)}
          />
        );
      case "SOBRE":
        return (
          <SobreScreen
            onNavigate={(screen: ScreenName) => setCurrentScreen(screen)}
          />
        );
      case "ORCAMENTO":
        return (
          <OrcamentoScreen
            onNavigate={(screen: ScreenName) => setCurrentScreen(screen)}
          />
        );
      case "LOGIN":
        return (
          <LoginScreen
            onNavigate={(screen: ScreenName) => setCurrentScreen(screen)}
          />
        );
      case "CLIENTE":
        return (
          <AreaClienteScreen
            onNavigate={(screen: ScreenName) => setCurrentScreen(screen)}
          />
        );
      default:
        return (
          <HomeScreen
            onNavigate={(screen: ScreenName) => setCurrentScreen(screen)}
          />
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <Header
          activeScreen={currentScreen}
          onNavigate={(screen: ScreenName) => setCurrentScreen(screen)}
        />

        
        <LinearGradient
          colors={["#7B52DB", "#999999"]}
          start={{ x: 0.94, y: 0 }}
          end={{ x: 0, y: 0.34 }}
          style={styles.body}
        >
          {renderScreen()}
        </LinearGradient>

        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c1322",
    width: "100%",
  },
  scrollView: {
    flex: 1,
    width: "100%",
  },
  scrollContent: {
    flexGrow: 1,
    width: "100%",
  },
  body: {
    width: "100%",
    flex: 1,
  },
});
