import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SolucoesScreen() {
  return (
    <LinearGradient
  colors={['#7B52DB', '#999999']}
  start={{ x: 0.94, y: 0 }}
  end={{ x: 0, y: 0.34 }}
  style={styles.pageContainer}
>
      <Text style={styles.pageHeading}>Soluções</Text>
      
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80' }}
        style={styles.solucoesBanner}
      >
        <View style={styles.solucoesOverlay}>
          <Text style={styles.solucoesBannerTitle}>Transformando operações industriais com tecnologia</Text>
          <Text style={styles.solucoesBannerDesc}>Desenvolvemos soluções integradas para manutenção, montagem, gestão e eficiência energética.</Text>
        </View>
      </ImageBackground>

      <View style={styles.solucoesListContainer}>
        {[
          { title: 'MANUTENÇÃO PREDITIVA COM IA', desc: 'Monitoramento contínuo de vibração, temperatura e ruído para prever falhas.', tag: 'Antecipação de paradas', icon: 'cpu' },
          { title: 'LINHAS DE MONTAGEM COLABORATIVAS', desc: 'Integração de Cobots e AGVs para otimização do fluxo de produção.', tag: 'Flexibilidade e segurança', icon: 'git-network' },
          { title: 'GESTÃO DE FÁBRICA EM TEMPO REAL', desc: 'Plataformas SCADA/Soft e MES para visualização completa e controle de processos.', tag: 'Visibilidade total', icon: 'desktop' },
          { title: 'EFICIÊNCIA ENERGÉTICA E SUSTENTABILIDADE', desc: 'Soluções para monitoramento e controle do consumo energético.', tag: 'Redução de custos e impacto', icon: 'flash' }
        ].map((item, idx) => (
          <View key={idx} style={styles.solucaoRowCard}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
              <MaterialCommunityIcons name={item.icon} size={24} color="#000" />
              <Text style={styles.solucaoRowTitle}>{item.title}</Text>
            </View>
            <Text style={styles.solucaoRowDesc}>{item.desc}</Text>
            <Text style={styles.solucaoTag}>{item.tag}</Text>
          </View>
        ))}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  pageContainer: { flex: 1, paddingVertical: 40, paddingHorizontal: 20, alignItems: 'center', width: '100%' },
  pageHeading: { fontSize: 28, fontWeight: 'bold', color: '#000', marginBottom: 30 },
  solucoesBanner: { width: '100%', maxWidth: 1000, height: 220, borderRadius: 16, overflow: 'hidden', marginBottom: 30 },
  solucoesOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', padding: 24, justifyContent: 'center' },
  solucoesBannerTitle: { color: '#fff', fontSize: 22, fontWeight: 'bold', marginBottom: 8 },
  solucoesBannerDesc: { color: '#cbd5e1', fontSize: 13 },
  solucoesListContainer: { width: '100%', maxWidth: 1000, gap: 16 },
  solucaoRowCard: { backgroundColor: 'rgba(255,255,255,0.92)', borderRadius: 12, padding: 20 },
  solucaoRowTitle: { fontSize: 15, fontWeight: 'bold', color: '#0f172a' },
  solucaoRowDesc: { fontSize: 12, color: '#475569', marginVertical: 6 },
  solucaoTag: { fontSize: 11, fontWeight: 'bold', color: '#6366f1' },
});