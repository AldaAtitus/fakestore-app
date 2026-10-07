import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Text, Image, StyleSheet, ScrollView } from 'react-native';
import api from '../services/api';
import { formatarPreco } from '../utils/formatoPreco';
import IndicaCarregando from '../components/IndicaCarregando';
import MensagemErro from '../components/MensagemErro';

export default function DetalhesProdutoPage({ route, navigation }) {
  const { id } = route.params;
  const [produto, setProduto] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({ title: 'Detalhes do Produto' });
  }, [navigation]);

  useEffect(() => {
    async function buscarProduto() {
      setCarregando(true);
      setErro('');
      try {
        const { data } = await api.get(`/products/${id}`);
        setProduto(data);
      } catch (err) {
        console.error(err);
        setErro('Não foi possível carregar o produto.');
      } finally {
        setCarregando(false);
      }
    }
    buscarProduto();
  }, [id]);

  if (carregando)
    return <IndicaCarregando mensagem="Carregando detalhes..." />;
  if (erro || !produto)
    return <MensagemErro mensagem={erro || 'Produto não encontrado.'} />;

  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Image source={{ uri: produto.thumbnail }} style={estilos.imagem} />
      <Text style={estilos.titulo}>{produto.title}</Text>
      <Text style={estilos.categoria}>{produto.category}</Text>
      <Text style={estilos.descricao}>{produto.description}</Text>
      <Text style={estilos.preco}>{formatarPreco(produto.price)}</Text>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff', alignItems: 'center' },
  imagem: { width: 220, height: 220, resizeMode: 'contain', marginBottom: 16 },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  categoria: {
    fontSize: 13,
    color: '#fff',
    backgroundColor: '#888',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
  },
  descricao: {
    fontSize: 14,
    color: '#444',
    textAlign: 'justify',
    marginBottom: 20,
  },
  preco: { fontSize: 24, fontWeight: 'bold', color: '#2f6fed' },
});