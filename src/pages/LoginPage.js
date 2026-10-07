import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import api from '../services/api';

export default function LoginPage({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');

  async function entrar() {
    setErro('');
    if (!usuario.trim() || !senha.trim()) {
      setErro('Preencha usuário e senha.');
      return;
    }

    setCarregando(true);
    try {
      const { data } = await api.post('/auth/login', {
        username: usuario.trim(),
        password: senha,
        expiresInMins: 60,
      });

      if (data && data.accessToken) {
        navigation.replace('Home');
      } else {
        setErro('Falha na autenticação. Tente novamente.');
      }
    } catch (err) {
      console.error(err);
      if (err.response && err.response.status === 400) {
        setErro('Usuário ou senha inválidos.');
      } else if (err.request) {
        setErro('Erro de conexão. Verifique sua internet.');
      } else {
        setErro('Ocorreu um erro inesperado.');
      }
    } finally {
      setCarregando(false);
    }
  }

  function preencherCredencialTeste() {
    setUsuario('emilys');
    setSenha('emilyspass');
    setErro('');
    }

  function mostrarUsuarios() {
    Alert.alert(
      'Credenciais de teste (DummyJSON)',
      'Consulte: https://dummyjson.com/users\n\n' +
        'Exemplos:\n' +
        '• emilys / emilyspass\n' +
        '• michaelw / michaelwpass\n' +
        '• sophiab / sophiabpass\n' +
        '• jamesd / jamesdpass',
      [{ text: 'OK' }]
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={estilos.container}
    >
      <ScrollView
        contentContainerStyle={estilos.conteudoScroll}
        keyboardShouldPersistTaps="handled"
      >
        <View style={estilos.cartao}>
          <Text style={estilos.titulo}>Fake Store</Text>
          <Text style={estilos.subtitulo}>Faça login para continuar</Text>

          <Text style={estilos.rotulo}>Usuário</Text>
          <TextInput
            style={estilos.entrada}
            placeholder="Digite seu usuário"
            autoCapitalize="none"
            autoCorrect={false}
            value={usuario}
            onChangeText={setUsuario}
            editable={!carregando}
          />

          <Text style={estilos.rotulo}>Senha</Text>
          <TextInput
            style={estilos.entrada}
            placeholder="Digite sua senha"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            value={senha}
            onChangeText={setSenha}
            editable={!carregando}
          />

          {erro ? <Text style={estilos.erro}>{erro}</Text> : null}

          <TouchableOpacity
            style={[estilos.botao, carregando && estilos.botaoDesabilitado]}
            onPress={entrar}
            disabled={carregando}
            activeOpacity={0.8}
          >
            {carregando ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={estilos.textoBotao}>Entrar</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={estilos.botaoDemonstracao}
            onPress={preencherCredencialTeste}
            disabled={carregando}
          >
            <Text style={estilos.textoDemonstracao}>
              Usar credencial de teste
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={estilos.botaoLink}
            onPress={mostrarUsuarios}
            disabled={carregando}
          >
            <Text style={estilos.textoLink}>Ver usuários disponíveis</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f2f2f2' },
  conteudoScroll: { flexGrow: 1, justifyContent: 'center', padding: 20 },
  cartao: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#222',
  },
  subtitulo: {
    fontSize: 14,
    textAlign: 'center',
    color: '#777',
    marginBottom: 24,
  },
  rotulo: {
    fontSize: 13,
    color: '#444',
    marginBottom: 4,
    marginTop: 8,
    fontWeight: '600',
  },
  entrada: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  botao: {
    backgroundColor: '#2f6fed',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  botaoDesabilitado: { opacity: 0.7 },
  textoBotao: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  botaoDemonstracao: {
    marginTop: 12,
    padding: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#2f6fed',
    alignItems: 'center',
  },
  textoDemonstracao: { color: '#2f6fed', fontSize: 13, fontWeight: '600' },
  botaoLink: { marginTop: 12, padding: 8, alignItems: 'center' },
  textoLink: { color: '#777', fontSize: 13, textDecorationLine: 'underline' },
  erro: { color: '#c0392b', marginTop: 12, textAlign: 'center', fontSize: 14 },
});