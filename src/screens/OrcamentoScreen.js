import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function OrcamentoScreen() {
  const [nome, setNome] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [qtd, setQtd] = useState('');
  const [produto, setProduto] = useState('');
  const [mensagem, setMensagem] = useState('');

  return (
   <LinearGradient
  colors={['#7B52DB', '#999999']}
  start={{ x: 0.94, y: 0 }}
  end={{ x: 0, y: 0.34 }}
  style={styles.pageContainer}
>
      <Text style={styles.pageHeading}>Solicitação de orçamento</Text>
      
      <View style={styles.formCardBox}>
        <Text style={styles.formMainTitle}>Solicitação de Orçamento</Text>
        <Text style={styles.formSubTitle}>Preencha os campos abaixo e entraremos em contato.</Text>

        <Text style={styles.labelInput}>Nome</Text>
        <TextInput style={styles.inputField} placeholder="Nome" value={nome} onChangeText={setNome} placeholderTextColor="#94a3b8" />

        <Text style={styles.labelInput}>Empresa</Text>
        <TextInput style={styles.inputField} placeholder="Empresa" value={empresa} onChangeText={setEmpresa} placeholderTextColor="#94a3b8" />

        <Text style={styles.labelInput}>E-mail</Text>
        <TextInput style={styles.inputField} placeholder="E-mail" value={email} onChangeText={setEmail} placeholderTextColor="#94a3b8" />

        <View style={{ flexDirection: 'row', gap: 16 }}>
          <View style={{ flex: 1 }}>
            <Text style={styles.labelInput}>Telefone</Text>
            <TextInput style={styles.inputField} placeholder="Telefone" value={telefone} onChangeText={setTelefone} placeholderTextColor="#94a3b8" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.labelInput}>Quantidade</Text>
            <TextInput style={styles.inputField} placeholder="Quantidade" value={qtd} onChangeText={setQtd} placeholderTextColor="#94a3b8" />
          </View>
        </View>

        <Text style={styles.labelInput}>Produto/Serviço</Text>
        <TextInput style={styles.inputField} placeholder="Produto ou Serviço desejado" value={produto} onChangeText={setProduto} placeholderTextColor="#94a3b8" />

        <Text style={styles.labelInput}>Mensagem</Text>
        <TextInput style={[styles.inputField, { height: 100, textAlignVertical: 'top' }]} placeholder="Descreva sua necessidade..." multiline value={mensagem} onChangeText={setMensagem} placeholderTextColor="#94a3b8" />

        <TouchableOpacity style={styles.submitBtn} onPress={() => alert('Solicitação enviada com sucesso!')}>
          <Text style={styles.submitBtnText}>Enviar Solicitação</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  pageContainer: { flex: 1, paddingVertical: 40, paddingHorizontal: 20, alignItems: 'center', width: '100%' },
  pageHeading: { fontSize: 28, fontWeight: 'bold', color: '#000', marginBottom: 30 },
  formCardBox: { width: '100%', maxWidth: 700, backgroundColor: '#fff', borderRadius: 20, padding: 30 },
  formMainTitle: { fontSize: 20, fontWeight: 'bold', color: '#0f172a', marginBottom: 4 },
  formSubTitle: { fontSize: 12, color: '#64748b', marginBottom: 20 },
  labelInput: { fontSize: 11, fontWeight: 'bold', color: '#334155', marginBottom: 6, marginTop: 12 },
  inputField: { backgroundColor: '#f8fafc', borderWidth: 1, borderColor: '#cbd5e1', borderRadius: 8, paddingHorizontal: 12, height: 44, color: '#0f172a', fontSize: 12 },
  submitBtn: { backgroundColor: '#000', paddingVertical: 14, borderRadius: 10, alignItems: 'center', marginTop: 24 },
  submitBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 13 },
});