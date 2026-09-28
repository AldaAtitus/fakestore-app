import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Botao({ rotulo, aoPressionar }) {
  return (
    <TouchableOpacity style={estilos.botao} onPress={aoPressionar}>
      <Text style={estilos.texto}>{rotulo}</Text>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  botao: { paddingHorizontal: 8, paddingVertical: 4 },
  texto: { color: '#2f6fed', fontSize: 15, fontWeight: '600' },
});