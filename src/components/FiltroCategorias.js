import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default function FiltroCategorias({ categorias, selecionada, aoSelecionar }) {
  return (
    <View style={estilos.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={estilos.conteudo}
      >
        {categorias.map((cat) => {
          const ativa = selecionada === cat.valor;
          return (
            <TouchableOpacity
              key={cat.valor || 'todas'}
              style={[estilos.chip, ativa && estilos.chipAtivo]}
              onPress={() => aoSelecionar(cat.valor)}
            >
              <Text style={[estilos.textoChip, ativa && estilos.textoChipAtivo]}>
                {cat.rotulo}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#e0e0e0' },
  conteudo: { paddingHorizontal: 12, paddingVertical: 10, gap: 8 },
  chip: { paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20, backgroundColor: '#eee', marginRight: 8 },
  chipAtivo: { backgroundColor: '#2f6fed' },
  textoChip: { color: '#333', fontSize: 13 },
  textoChipAtivo: { color: '#fff', fontWeight: 'bold' },
});