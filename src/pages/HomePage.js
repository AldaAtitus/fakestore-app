import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import api from '../services/api';
import CartaoProduto from '../components/CartaoProduto';
import FiltroCategorias from '../components/FiltroCategorias';
import IndicaCarregando from '../components/IndicaCarregando';
import MensagemErro from '../components/MensagemErro';
import Botao from '../components/Botao';

const CATEGORIAS = [
  { rotulo: 'Todos', valor: '' },
  { rotulo: 'Eletrônicos', valor: 'electronics' },
  { rotulo: 'Joias', valor: 'jewelery' },
  { rotulo: 'Roupas Masculinas', valor: "men's clothing" },
  { rotulo: 'Roupas Femininas', valor: "women's clothing" },
];

export default function HomePage({ navigation }) {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Produtos',
      headerLeft: () => (
        <Botao rotulo="Sair" aoPressionar={() => navigation.replace('Login')} />
      ),
      headerRight: () => (
        <Botao rotulo="Info" aoPressionar={() => navigation.navigate('InfoGrupo')} />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    buscarProdutos();
  }, [categoriaSelecionada]);

  async function buscarProdutos() {
    setCarregando(true);
    setErro('');
    try {
      const url = categoriaSelecionada
        ? `/products/category/${encodeURIComponent(categoriaSelecionada)}`
        : '/products';
      const { data } = await api.get(url);
      setProdutos(data);
    } catch (err) {
      console.error(err);
      setErro('Não foi possível carregar os produtos.');
    } finally {
      setCarregando(false);
    }
  }

  if (carregando) return <IndicaCarregando mensagem="Carregando produtos..." />;
  if (erro)
    return <MensagemErro mensagem={erro} aoTentarNovamente={buscarProdutos} />;

  return (
    <View style={estilos.container}>
      <FiltroCategorias
        categorias={CATEGORIAS}
        selecionada={categoriaSelecionada}
        aoSelecionar={setCategoriaSelecionada}
      />

      <FlatList
        data={produtos}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <CartaoProduto
            produto={item}
            aoPressionar={() =>
              navigation.navigate('DetalhesProduto', { id: item.id })
            }
          />
        )}
        contentContainerStyle={{ padding: 12 }}
        ListEmptyComponent={
          <Text style={estilos.vazio}>Nenhum produto encontrado.</Text>
        }
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2' },
  vazio: { textAlign: 'center', marginTop: 40, color: '#777' },
});