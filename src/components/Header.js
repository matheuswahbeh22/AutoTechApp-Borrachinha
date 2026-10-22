import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Header({ activeScreen, onNavigate }) {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME', key: 'HOME' },
    { label: 'SOLUÇÕES', key: 'SOLUCOES' },
    { label: 'PRODUTOS', key: 'PRODUTOS' },
    { label: 'SOBRE', key: 'SOBRE' },
    { label: 'ORÇAMENTO', key: 'ORCAMENTO' },
    { label: 'ÁREA DO CLIENTE', key: 'CLIENTE' },
  ];

  return (
    <LinearGradient
      colors={['#7B52DB', '#999999']}
      start={{ x: 0.94, y: 0 }}
      end={{ x: 0, y: 0.34 }}
      style={styles.headerContainer}
    >
      <View style={styles.topRow}>
        <TouchableOpacity style={styles.logoContainer} onPress={() => onNavigate('HOME')}>
          <Text style={styles.logoTextBold}>Auto</Text>
          <Text style={styles.logoTextBlue}>Tech</Text>
        </TouchableOpacity>

        {!isMobile && (
          <View style={styles.desktopNav}>
            {navItems.map((item) => (
              <TouchableOpacity
                key={item.key}
                onPress={() => onNavigate(item.key)}
                style={styles.navButton}
              >
                <Text
                  style={[
                    styles.navText,
                    activeScreen === item.key && styles.navTextActive,
                  ]}
                >
                  {item.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => {
            if (isMobile) {
              setMenuOpen(!menuOpen);
            } else {
              onNavigate('LOGIN');
            }
          }}
        >
          <Text style={styles.actionButtonText}>
            {isMobile ? (menuOpen ? 'FECHAR' : 'MENU') : 'LOGIN'}
          </Text>
        </TouchableOpacity>
      </View>

      {isMobile && menuOpen && (
        <View style={styles.mobileMenu}>
          {navItems.map((item) => (
            <TouchableOpacity
              key={item.key}
              onPress={() => {
                setMenuOpen(false);
                onNavigate(item.key);
              }}
              style={styles.mobileNavLink}
            >
              <Text
                style={[
                  styles.mobileNavText,
                  activeScreen === item.key && styles.mobileNavTextActive,
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            onPress={() => {
              setMenuOpen(false);
              onNavigate('LOGIN');
            }}
            style={styles.mobileNavLink}
          >
            <Text style={[styles.mobileNavText, { color: '#2563eb' }]}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 14,
    zIndex: 1000,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 1200,
    alignSelf: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoTextBold: {
    fontSize: 22,
    fontWeight: '900',
    color: '#000000',
  },
  logoTextBlue: {
    fontSize: 22,
    fontWeight: '900',
    color: '#2563eb',
  },
  desktopNav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  navButton: {
    paddingVertical: 4,
  },
  navText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#1e293b',
    letterSpacing: 0.5,
  },
  navTextActive: {
    color: '#000000',
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
  },
  actionButton: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
    elevation: 2,
  },
  actionButtonText: {
    fontSize: 11,
    fontWeight: '900',
    color: '#0f172a',
  },
  mobileMenu: {
    marginTop: 12,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    elevation: 3,
  },
  mobileNavLink: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  mobileNavText: {
    fontSize: 11,
    fontWeight: '800',
    color: '#1e293b',
  },
  mobileNavTextActive: {
    color: '#2563eb',
  },
});