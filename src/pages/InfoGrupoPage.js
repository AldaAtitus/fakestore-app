import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import CartaoIntegrante from '../components/CartaoIntegrante';

// 🔽 INTEGRANTES DO GRUPO
const INTEGRANTES = [
  { nome: 'Aldacir Stanguerlin Junior', ra: '1137226' },
  { nome: 'Ronaldo Castelani', ra: '1130584' },
  { nome: 'Luis Henrique Mezzomo', ra: '1137815' },
  { nome: 'Henrique Machado de Lima', ra: '1136129' },
];

const DESCRICAO =
  'Este aplicativo foi desenvolvido pelos integrantes abaixo para o trabalho ' +
  'de React Native – Consumo de API (Fake Store API).';

export default function InfoGrupoPage() {
  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <Text style={estilos.titulo}>Desenvolvedores do App</Text>
      <Text style={estilos.subtitulo}>{DESCRICAO}</Text>

      {INTEGRANTES.map((integrante, index) => (
        <CartaoIntegrante
          key={index}
          nome={integrante.nome}
          ra={integrante.ra}
        />
      ))}
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#f2f2f2' },
  titulo: { fontSize: 22, fontWeight: 'bold', marginBottom: 8, color: '#222' },
  subtitulo: { fontSize: 14, color: '#555', marginBottom: 20 },
});