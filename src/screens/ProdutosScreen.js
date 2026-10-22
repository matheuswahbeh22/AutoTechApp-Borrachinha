import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ProdutosScreen({ onNavigate }) {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  const productsList = [
    {
      category: 'SENSORES IOT',
      title: 'Invisor VFD-Pro',
      description: 'Monitoramento preditivo de ativos industriais em tempo real.',
      priceInfo: 'Sob Consulta',
    },
    {
      category: 'SEGURANÇA',
      title: 'Barreira OptoSafe',
      description: 'Monitoramento preditivo de ativos industriais em tempo real.',
      priceInfo: 'Sob Consulta',
    },
    {
      category: 'CONTROLADORES',
      title: 'CLP NX-500',
      description: 'Monitoramento preditivo de ativos industriais em tempo real.',
      priceInfo: 'Sob Consulta',
    },
    {
      category: 'SENSORES IOT',
      title: 'SCADA v5.0',
      description: 'Monitoramento preditivo de ativos industriais em tempo real.',
      priceInfo: 'Sob Consulta',
    },
    {
      category: 'SENSORES IOT',
      title: 'CR-10 Cobot',
      description: 'Monitoramento preditivo de ativos industriais em tempo real.',
      priceInfo: 'Sob Consulta',
    },
  ];

  return (
    <LinearGradient
      colors={['#7B52DB', '#999999']}
      start={{ x: 0.94, y: 0 }}
      end={{ x: 0, y: 0.34 }}
      style={styles.container}
    >
      <View style={styles.contentWrapper}>
        {/* Título da Seção */}
        <Text style={styles.pageTitle}>Produtos/Serviços</Text>

        {/* Barra de Pesquisa e Filtros */}
        <View style={styles.searchRow}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar por nome, código ou tecnologia..."
            placeholderTextColor="#94a3b8"
          />
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Filtros</Text>
          </TouchableOpacity>
        </View>

        {/* Grelha de Produtos */}
        <View style={[styles.gridContainer, isMobile && styles.gridContainerMobile]}>
          {productsList.map((item, index) => (
            <View
              key={index}
              style={[styles.productCard, isMobile ? styles.cardFull : styles.cardThird]}
            >
              {/* Espaço para Imagem / Placeholder */}
              <View style={styles.cardImagePlaceholder}>
                <Text style={styles.placeholderIcon}>📈</Text>
              </View>

              <View style={styles.cardBody}>
                <Text style={styles.cardCategory}>{item.category}</Text>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>

                <View style={styles.cardFooter}>
                  <Text style={styles.priceText}>{item.priceInfo}</Text>
                  <TouchableOpacity
                    style={styles.detailsButton}
                    onPress={() => onNavigate('ORCAMENTO')}
                  >
                    <Text style={styles.detailsButtonText}>Ver Detalhes →</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
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
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 24,
  },
  searchRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 32,
    maxWidth: 800,
    alignSelf: 'center',
    width: '100%',
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 44,
    fontSize: 13,
    color: '#0f172a',
  },
  filterButton: {
    backgroundColor: '#000000',
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
  },
  filterButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '800',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'center',
  },
  gridContainerMobile: {
    flexDirection: 'column',
  },
  productCard: {
    backgroundColor: '#ffffff',
    borderRadius: 14,
    overflow: 'hidden',
    width: '31%',
    minWidth: 280,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  cardThird: {
    flexGrow: 0,
    flexShrink: 0,
  },
  cardFull: {
    width: '100%',
  },
  cardImagePlaceholder: {
    width: '100%',
    height: 130,
    backgroundColor: '#e2e8f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderIcon: {
    fontSize: 28,
  },
  cardBody: {
    padding: 16,
  },
  cardCategory: {
    fontSize: 9,
    fontWeight: '800',
    color: '#64748b',
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: '#0f172a',
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 11,
    color: '#475569',
    lineHeight: 16,
    marginBottom: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    paddingTop: 12,
  },
  priceText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#0f172a',
  },
  detailsButton: {
    backgroundColor: '#000000',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
  },
  detailsButtonText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: '800',
  },
});