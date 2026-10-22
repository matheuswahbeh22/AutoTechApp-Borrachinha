import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AreaClienteScreen() {
  return (
   <LinearGradient
  colors={['#7B52DB', '#999999']}
  start={{ x: 0.94, y: 0 }}
  end={{ x: 0, y: 0.34 }}
  style={styles.pageContainer}
>
      <Text style={styles.pageHeading}>Área do cliente</Text>

      <View style={styles.clientHeaderBox}>
        <Text style={styles.clientWelcome}>
          Olá, Carlos |{" "}
          <Text style={{ fontWeight: "bold" }}>
            Indústria Metalúrgica Alfa S/A
          </Text>
        </Text>
        <Text style={styles.clientSubWelcome}>
          Acompanhe o status das suas solicitações técnicas, orçamentos e
          equipamentos adquiridos.
        </Text>
      </View>

      <View style={styles.clientStatsRow}>
        <View style={styles.clientStatCard}>
          <Text style={styles.statLabel}>Solicitações em Andamento</Text>
          <Text style={styles.statVal}>2</Text>
        </View>
        <View style={styles.clientStatCard}>
          <Text style={styles.statLabel}>Orçamentos Aprovados</Text>
          <Text style={styles.statVal}>1</Text>
        </View>
        <View style={styles.clientStatCard}>
          <Text style={styles.statLabel}>Equipamentos Ativos</Text>
          <Text style={styles.statVal}>4</Text>
        </View>
      </View>

      <Text style={styles.sectionSubTitle}>
        Solicitações e orçamentos recentes
      </Text>

      <View style={styles.clientOrderCard}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.orderTitle}>Orçamento #4092</Text>
          <View style={styles.badgeAnalise}>
            <Text style={styles.badgeText}>Em Análise Técnica</Text>
          </View>
        </View>
        <Text style={styles.orderDesc}>
          Robô Colaborativo CR-10 (Cobot) (2 unidades)
        </Text>
        <TouchableOpacity>
          <Text style={styles.orderLink}>Ver Detalhes &rarr;</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.clientOrderCard}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={styles.orderTitle}>Solicitação #3881</Text>
          <View style={styles.badgeEnviado}>
            <Text style={styles.badgeText}>Orçamento Enviado</Text>
          </View>
        </View>
        <Text style={styles.orderDesc}>
          Sensor de Vibração IoT-V900 (10 unidades)
        </Text>
        <TouchableOpacity>
          <Text style={styles.orderLink}>Ver Proposta / Aprovar &rarr;</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.clientOrderCard, { marginTop: 10 }]}>
        <Text style={styles.orderTitle}>
          Dados da Conta e Planta Industrial
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <Text style={styles.orderDesc}>CNPJ: 12.345.678/0001-99</Text>
          <Text style={styles.orderDesc}>Unidade Curitiba - PR</Text>
        </View>
        <Text style={[styles.orderDesc, { marginTop: 5 }]}>
          Responsável Técnico: Eng. Carlos Silva (CREA 45892-D)
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: "center",
    width: "100%",
  },
  pageHeading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 30,
  },
  clientHeaderBox: {
    width: "100%",
    maxWidth: 900,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  clientWelcome: { fontSize: 15, color: "#0f172a", marginBottom: 4 },
  clientSubWelcome: { fontSize: 12, color: "#64748b" },
  clientStatsRow: {
    flexDirection: "row",
    gap: 16,
    width: "100%",
    maxWidth: 900,
    marginBottom: 30,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  clientStatCard: {
    flex: 1,
    minWidth: 260,
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
  },
  statLabel: { fontSize: 11, color: "#64748b", fontWeight: "bold" },
  statVal: { fontSize: 24, fontWeight: "bold", color: "#0f172a", marginTop: 6 },
  sectionSubTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  clientOrderCard: {
    width: "100%",
    maxWidth: 900,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
  },
  orderTitle: { fontSize: 14, fontWeight: "bold", color: "#0f172a" },
  orderDesc: { fontSize: 12, color: "#475569", marginVertical: 6 },
  orderLink: { fontSize: 11, fontWeight: "bold", color: "#2563eb" },
  badgeAnalise: {
    backgroundColor: "#000",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  badgeEnviado: {
    backgroundColor: "#000",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  badgeText: { color: "#fff", fontSize: 10, fontWeight: "bold" },
});
