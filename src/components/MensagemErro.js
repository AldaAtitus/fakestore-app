import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function MensagemErro({ mensagem, aoTentarNovamente }) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.mensagem}>{mensagem}</Text>
      {aoTentarNovamente ? (
        <TouchableOpacity style={estilos.botao} onPress={aoTentarNovamente}>
          <Text style={estilos.textoBotao}>Tentar novamente</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  mensagem: { color: '#c0392b', marginBottom: 12, textAlign: 'center' },
  botao: { backgroundColor: '#2f6fed', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 8 },
  textoBotao: { color: '#fff', fontWeight: 'bold' },
});