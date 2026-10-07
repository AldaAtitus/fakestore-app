import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { formatarPreco } from '../utils/formatoPreco';

export default function CartaoProduto({ produto, aoPressionar }) {
  return (
    <TouchableOpacity style={estilos.cartao} onPress={aoPressionar} activeOpacity={0.8}>
      <Image source={{ uri: produto.thumbnail }} style={estilos.imagem} />
      <View style={estilos.informacoes}>
        <Text style={estilos.nome} numberOfLines={2}>
          {produto.title}
        </Text>
        <Text style={estilos.preco}>{formatarPreco(produto.price)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  cartao: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
    elevation: 2,
    alignItems: 'center',
  },
  imagem: { width: 70, height: 70, resizeMode: 'contain', marginRight: 12 },
  informacoes: { flex: 1 },
  nome: { fontSize: 14, color: '#333', marginBottom: 6 },
  preco: { fontSize: 16, fontWeight: 'bold', color: '#2f6fed' },
});