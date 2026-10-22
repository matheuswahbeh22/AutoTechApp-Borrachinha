import React from 'react';
import { StyleSheet, View, Text, useWindowDimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SobreScreen() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const etapas = [
    { ano: '2018', texto: 'Fundada' },
    { ano: '2020', texto: 'Lançamento de Cobots' },
    { ano: '2023', texto: 'Expansão Global' },
  ];

  return (
    <LinearGradient
      colors={['#7B52DB', '#999999']}
      start={{ x: 0.94, y: 0 }}
      end={{ x: 0, y: 0.34 }}
      style={styles.container}
    >
      <View style={styles.contentWrapper}>
        <Text style={styles.pageTitle}>Sobre a empresa</Text>
        <Text style={styles.subtitle}>AUTOTECH</Text>

        
        <View style={styles.cardInfo}>
          <Text style={styles.sectionHeader}>Nossa Identidade</Text>
          <View style={[styles.identityRow, isMobile && styles.identityRowMobile]}>
            <View style={styles.identityBox}>
              <Text style={styles.cardTitle}>NOSSA MISSÃO</Text>
              <Text style={styles.cardText}>
                Avançar a modernização industrial com soluções inovadoras e sustentáveis.
              </Text>
            </View>
            <View style={styles.identityBox}>
              <Text style={styles.cardTitle}>NOSSA VISÃO</Text>
              <Text style={styles.cardText}>
                Ser a plataforma líder em automação conectada e inteligente no mercado global.
              </Text>
            </View>
            <View style={styles.identityBox}>
              <Text style={styles.cardTitle}>NOSSOS VALORES</Text>
              <Text style={styles.cardText}>
                Inovação, Ética, Parceria e Sustentabilidade.
              </Text>
            </View>
          </View>
        </View>

        
        <View style={styles.cardInfo}>
          <Text style={styles.sectionHeader}>Nossa Jornada</Text>
          <View style={styles.timelineWrapper}>
           
            <View style={styles.timelineLine} />

            <View style={styles.timelineStepsRow}>
              {etapas.map((item, index) => (
                <View key={index} style={styles.stepContainer}>
                  <View style={styles.dot} />
                  <Text style={styles.yearText}>{item.ano}</Text>
                  <Text style={styles.descText}>{item.texto}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        
        <View style={styles.cardInfo}>
          <Text style={styles.sectionHeader}>Nossa Capacidade Produtiva</Text>
          <View style={[styles.statsRow, isMobile && styles.statsRowMobile]}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>5</Text>
              <Text style={styles.statLabel}>Centros de Distribuição</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>200+</Text>
              <Text style={styles.statLabel}>Engenheiros Especializados</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>50+</Text>
              <Text style={styles.statLabel}>Patentes Registradas</Text>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  contentWrapper: {
    width: '100%',
    maxWidth: 1100,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#0f172a',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 11,
    fontWeight: '800',
    color: '#334155',
    textAlign: 'center',
    letterSpacing: 1,
    marginBottom: 24,
  },
  cardInfo: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 24,
    marginBottom: 24,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: '900',
    color: '#0f172a',
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 0.5,
  },
  identityRow: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'space-between',
  },
  identityRowMobile: {
    flexDirection: 'column',
  },
  identityBox: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  cardTitle: {
    fontSize: 11,
    fontWeight: '900',
    color: '#0f172a',
    marginBottom: 6,
  },
  cardText: {
    fontSize: 11,
    color: '#475569',
    lineHeight: 16,
  },
  
  timelineWrapper: {
    width: '100%',
    position: 'relative',
    paddingVertical: 10,
  },
  timelineLine: {
    position: 'absolute',
    top: 16, 
    left: '15%',
    right: '15%',
    height: 2,
    backgroundColor: '#0f172a',
    zIndex: 1,
  },
  timelineStepsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 2, 
  },
  stepContainer: {
    alignItems: 'center',
    flex: 1,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#0f172a',
    marginBottom: 10,
  },
  yearText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#0f172a',
    marginBottom: 2,
  },
  descText: {
    fontSize: 10,
    color: '#475569',
    textAlign: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  statsRowMobile: {
    flexDirection: 'column',
  },
  statBox: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: '900',
    color: '#0f172a',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 10,
    fontWeight: '700',
    color: '#64748b',
    textAlign: 'center',
  },
});