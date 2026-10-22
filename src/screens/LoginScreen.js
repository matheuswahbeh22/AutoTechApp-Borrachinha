import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <LinearGradient
  colors={['#7B52DB', '#999999']}
  start={{ x: 0.94, y: 0 }}
  end={{ x: 0, y: 0.34 }}
  style={styles.pageContainer}
>
      <View style={styles.loginCardContainer}>
        <View style={{ flexDirection: 'row', gap: 10, marginBottom: 20 }}>
          <TouchableOpacity style={styles.loginTabActive}>
            <Text style={styles.loginTabTextActive}>ENTRAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginTabInactive}>
            <Text style={styles.loginTabTextInactive}>Criar Conta Corporativa</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.loginMainTitle}>Acesse sua conta para gerenciar pedidos e suporte técnico</Text>

        <Text style={styles.labelInput}>E-MAIL CORPORATIVO</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Ex: engenharia@suaempresa.com.br"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#94a3b8"
        />

        <Text style={styles.labelInput}>SENHA</Text>
        <TextInput
          style={styles.inputField}
          placeholder="**********"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
          placeholderTextColor="#94a3b8"
        />

        <TouchableOpacity style={{ alignSelf: 'flex-end', marginVertical: 10 }}>
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#0f172a' }}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => onNavigate('CLIENTE')}
        >
          <Text style={styles.submitBtnText}>ENTRAR NA PLATAFORMA &rarr;</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  pageContainer: { flex: 1, paddingVertical: 40, paddingHorizontal: 20, alignItems: 'center', width: '100%' },
  loginCardContainer: { width: '100%', maxWidth: 450, backgroundColor: '#fff', borderRadius: 20, padding: 30 },
  loginTabActive: { backgroundColor: '#0f172a', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 8 },
  loginTabTextActive: { color: '#fff', fontSize: 11, fontWeight: 'bold' },
  loginTabInactive: { backgroundColor: '#f1f5f9', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 8, justifyContent: 'center' },
  loginTabTextInactive: { color: '#64748b', fontSize: 11, fontWeight: 'bold' },
  loginMainTitle: { fontSize: 16, fontWeight: 'bold', color: '#0f172a', marginBottom: 20, lineHeight: 22 },
  labelInput: { fontSize: 11, fontWeight: 'bold', color: '#334155', marginBottom: 6, marginTop: 12 },
  inputField: { backgroundColor: '#f8fafc', borderWidth: 1, borderColor: '#cbd5e1', borderRadius: 8, paddingHorizontal: 12, height: 44, color: '#0f172a', fontSize: 12 },
  submitBtn: { backgroundColor: '#000', paddingVertical: 14, borderRadius: 10, alignItems: 'center', marginTop: 24 },
  submitBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
});