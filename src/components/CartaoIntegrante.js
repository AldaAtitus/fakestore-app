import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CartaoIntegrante({ nome, ra }) {
  return (
    <View style={estilos.cartao}>
      <View style={estilos.avatar}>
        <Text style={estilos.textoAvatar}>{nome.charAt(0).toUpperCase()}</Text>
      </View>
      <View style={estilos.informacoes}>
        <Text style={estilos.nome}>{nome}</Text>
        <Text style={estilos.ra}>RA: {ra}</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  cartao: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 10, padding: 16, marginBottom: 12, elevation: 2 },
  avatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#2f6fed', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  textoAvatar: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
  informacoes: { flex: 1 },
  nome: { fontSize: 16, fontWeight: 'bold', color: '#222' },
  ra: { fontSize: 14, color: '#555', marginTop: 4 },
});