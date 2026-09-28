# Fake Store App — React Native + Expo

Aplicativo mobile desenvolvido em **React Native com Expo** (JavaScript) que consome a [Fake Store API](https://fakestoreapi.com/). O app possui autenticação, listagem de produtos, filtro por categoria, tela de detalhes, logout e tela de informações do grupo.

Trabalho desenvolvido para a disciplina de **React Native – Consumo de API**.

---

### Integrantes

- **Aldacir Stanguerlin Junior** — 1137226
- **Ronaldo Castelani** — 1130584
- **Luis Henrique Mezzomo** — 1137815
- **Henrique Machado de Lima** — 1136129

---

## Funcionalidades

- 🔐 **Login** com validação contra o endpoint `/users` e autenticação via `/auth/login`
- 🏠 **Home** com listagem de produtos (`FlatList`) exibindo imagem, nome e preço formatado em R$
- 🗂️ **Filtro por categoria** (electronics, jewellery, men's clothing, women's clothing) com opção "Todos" para limpar o filtro
- ⏳ **ActivityIndicator** durante todos os carregamentos de API
- 🧭 **Header personalizado** na Home: botão de logout (esquerda), título "Produtos" (centro) e botão de informações (direita)
- 📄 **Detalhes do Produto** consumindo `/products/{id}` (imagem, nome, categoria, descrição e preço)
- 👥 **Informações do Grupo** com nome completo e RA dos integrantes
- 🛡️ **Tratamento de erros** (login inválido, falha de rede, etc.)

---

## Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (versão 18 ou superior)
- Aplicativo **Expo Go** instalado no celular ([Android](https://play.google.com/store/apps/details?id=host.exp.exponent) / [iOS](https://apps.apple.com/app/expo-go/id982107779))
- Opcional: emulador Android (Android Studio) ou simulador iOS (Xcode)

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/fakestore-app.git
cd fakestore-app

# 2. Instale as dependências
npm install

# 3. Inicie o projeto com Expo
npx expo start
```

Após rodar `npx expo start`, o terminal exibirá um **QR Code**. Escolha uma das opções:

| Comando | Ação |
|---------|------|
| Escanear o QR Code com o **Expo Go** | Abre o app no celular físico |
| `a` | Abre no emulador Android |
| `i` | Abre no simulador iOS (macOS) |
| `w` | Abre no navegador (modo debug) |

> **Observação:** o celular precisa estar na **mesma rede Wi-Fi** que o computador para o Expo Go funcionar.

---

## Como verificar os usuários disponíveis para login

A autenticação é feita com contas **reais** retornadas pela Fake Store API. O app consulta primeiro o endpoint `/users` para validar as credenciais e depois autentica em `/auth/login`.

### Opção 1 — Pelo navegador

Acesse diretamente a listagem de usuários:

[https://fakestoreapi.com/users](https://fakestoreapi.com/users)

### Opção 2 — Pelo terminal (curl)

Execute o comando abaixo para ver todos os usuários cadastrados (com `username` e `password`):
```bash
curl https://fakestoreapi.com/users
```

### Opção 3 — Pelo próprio app

Na **tela de login**, toque em **"Ver usuários disponíveis"** para exibir um alerta com credenciais de exemplo. *(disponível ao rodar o app em celular)*

### Credenciais de teste válidas

| Username | Password |
|----------|----------|
| `johnd` | `m38rmF$` |
| `mor_2314` | `83r5^_` |
| `kevinryan` | `kev02937@` |
| `donero` | `ewedon` |
| `derek` | `jklg*_56` |
| `david_r` | `3478*#54` |
| `snyder` | `f238&@*$` |
| `hopkins` | `William56$hj` |
| `kate_h` | `kfejk@*_` |
| `jimmie_k` | `klein*#%*` |

> 💡 **Dica:** na tela de login, toque em **"Usar credencial de teste"** para preencher automaticamente o usuário `mor_2314` e a senha `83r5^_`.

---

## 🛠️ Tecnologias utilizadas

- **Expo** — framework para React Native
- **React Native** — desenvolvimento mobile
- **JavaScript** (ES6+)
- **Axios** — consumo da API
- **React Navigation** (Native Stack) — navegação entre telas
- **Hooks** — `useState`, `useEffect`, `useLayoutEffect`

---

## 📄 Licença

Projeto desenvolvido para fins **acadêmicos**. A Fake Store API é pública e de uso livre para testes e aprendizado.