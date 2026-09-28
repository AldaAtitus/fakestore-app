import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import LoginPage from './src/pages/LoginPage';
import HomePage from './src/pages/HomePage';
import DetalhesProdutoPage from './src/pages/DetalhesProdutoPage';
import InfoGrupoPage from './src/pages/InfoGrupoPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetalhesProduto"
          component={DetalhesProdutoPage}
          options={{ title: 'Detalhes do Produto' }}
        />
        <Stack.Screen
          name="InfoGrupo"
          component={InfoGrupoPage}
          options={{ title: 'Informações do Grupo' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}