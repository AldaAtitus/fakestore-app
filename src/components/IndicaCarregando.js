import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default function IndicaCarregando({ mensagem = 'Carregando...', cor = '#2f6fed' }) {
  return (
    <View style={estilos.container}>
      <ActivityIndicator size="large" color={cor} />
      <Text style={estilos.mensagem}>{mensagem}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  mensagem: { marginTop: 12, color: '#555' },
});