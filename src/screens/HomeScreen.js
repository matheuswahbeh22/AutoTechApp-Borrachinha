import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  useWindowDimensions,
} from 'react-native';

export default function HomeScreen({ onNavigate }) {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const features = [
    {
      icon: '📡',
      title: 'SENSORES INTELIGENTES IOT',
      description:
        'Monitoramento em tempo real do chão de fábrica, garantindo manutenções preditivas e máxima eficiência operacional.',
    },
    {
      icon: '🤖',
      title: 'ROBÔS COLABORATIVOS',
      description:
        'Soluções integradas de automação segura que trabalham lado a lado com a equipe humana para otimizar a linha de montagem.',
    },
    {
      icon: '🖥️',
      title: 'SISTEMAS DE SUPERVISÃO SCADA',
      description:
        'Plataformas avançadas de controle e aquisição de dados para gestão completa de processos industriais complexos.',
    },
  ];

  return (
    <View style={styles.container}>
      {/* Hero Section / Banner */}
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
        }}
        style={styles.heroBackground}
        resizeMode="cover"
      >
        <View style={styles.heroOverlay}>
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>
              Conectando o chão{'\n'}de Fábrica ao Futuro
            </Text>
            <Text style={styles.heroSubtitle}>
              SOLUÇÕES INTEGRADAS DE AUTOMAÇÃO, IOT E INTELIGÊNCIA ARTIFICIAL
            </Text>

            {/* Apenas o texto (sem o botão preto em volta) */}
            <TouchableOpacity onPress={() => onNavigate('ORCAMENTO')}>
              <Text style={styles.demonstracaoText}>Solicitar Demonstração</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>

      {/* Seção Central */}
      <View style={styles.middleSection}>
        <Text style={styles.middleText}>
          A AutoTech lidera a transformação digital na indústria, aumentando a
          eficiência e segurança com tecnologias avançadas.
        </Text>

        {/* Cards Responsivos */}
        <View style={[styles.cardsGrid, isMobile && styles.cardsGridMobile]}>
          {features.map((item, index) => (
            <View
              key={index}
              style={[styles.card, isMobile ? styles.cardFull : styles.cardThird]}
            >
              <View style={styles.iconCircle}>
                <Text style={styles.iconText}>{item.icon}</Text>
              </View>

              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>

              <TouchableOpacity
                style={styles.cardLink}
                onPress={() => onNavigate('PRODUTOS')}
              >
                <Text style={styles.cardLinkText}>VER PRODUTO {'>'}</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#a392cb',
  },
  heroBackground: {
    width: '100%',
    height: 360,
  },
  heroOverlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.6)',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  heroContent: {
    maxWidth: 1100,
    width: '100%',
    alignSelf: 'center',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#ffffff',
    marginBottom: 8,
    lineHeight: 38,
  },
  heroSubtitle: {
    fontSize: 11,
    fontWeight: '700',
    color: '#e2e8f0',
    letterSpacing: 0.8,
    marginBottom: 16,
    maxWidth: 500,
  },
  demonstracaoText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '800',
    textDecorationLine: 'underline',
  },
  middleSection: {
    width: '100%',
    maxWidth: 1100,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
  middleText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
    maxWidth: 680,
    alignSelf: 'center',
    marginBottom: 30,
    lineHeight: 22,
  },
  cardsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  cardsGridMobile: {
    flexDirection: 'column',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 20,
    justifyContent: 'space-between',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 5,
  },
  cardThird: {
    flex: 1,
  },
  cardFull: {
    width: '100%',
    marginBottom: 16,
  },
  iconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#f1f5f9',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  iconText: {
    fontSize: 18,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: '900',
    color: '#0f172a',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  cardDescription: {
    fontSize: 11,
    color: '#475569',
    lineHeight: 17,
    marginBottom: 16,
  },
  cardLink: {
    alignSelf: 'flex-end',
  },
  cardLinkText: {
    fontSize: 10,
    fontWeight: '900',
    color: '#2563eb',
  },
});