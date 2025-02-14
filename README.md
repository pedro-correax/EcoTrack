# EcoTracker - Monitore sua Pegada Ecológica

## 📋 Sobre o Projeto

O EcoTracker é uma aplicação web desenvolvida para ajudar usuários a monitorar e reduzir sua pegada ecológica. Através dela, é possível registrar e acompanhar o consumo diário de água, energia elétrica e produção de resíduos, além de receber dicas personalizadas para um estilo de vida mais sustentável.

## 🚀 Tecnologias Utilizadas

- React.js
- TypeScript
- Firebase (Authentication e Firestore)
- Context API
- React Router DOM
- Framer Motion
- Tailwind CSS
- Recharts

## 🔧 Pré-requisitos

- Node.js (versão 14 ou superior)
- NPM ou Yarn
- Conta no Firebase

## ⚙️ Configuração

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/ecotracker.git
cd ecotracker
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Configure o Firebase:
   - Crie um projeto no [Firebase Console](https://console.firebase.google.com)
   - Ative o Authentication com email/senha
   - Ative o Firestore Database
   - Copie as credenciais do projeto

4. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto baseado no `.env.sample`
   - Preencha com suas credenciais do Firebase:
```
REACT_APP_FIREBASE_API_KEY=sua_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=seu_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=seu_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=seu_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=seu_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=seu_app_id
```

## 🚀 Executando o Projeto

1. Inicie o servidor de desenvolvimento:
```bash
npm start
# ou
yarn start
```

2. Acesse `http://localhost:3000` no seu navegador

## 📱 Funcionalidades

- **Autenticação de Usuários**
  - Login com email e senha
  - Proteção de rotas para usuários autenticados

- **Dashboard**
  - Visualização de métricas de consumo
  - Gráficos de histórico
  - Dicas personalizadas

- **Perfil do Usuário**
  - Edição de informações pessoais
  - Registro diário de consumo
  - Histórico de registros

## 🌐 Deploy

O projeto está configurado para deploy na Vercel ou Firebase Hosting. Para fazer o deploy:

### Vercel
1. Instale a CLI da Vercel:
```bash
npm install -g vercel
```

2. Execute o deploy:
```bash
vercel
```

### Firebase Hosting
1. Instale a Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Faça login no Firebase:
```bash
firebase login
```

3. Inicialize o projeto:
```bash
firebase init hosting
```

4. Faça o build do projeto:
```bash
npm run build
```

5. Execute o deploy:
```bash
firebase deploy
```

## 📝 Estrutura do Projeto

```
src/
├── components/        # Componentes reutilizáveis
├── context/          # Contextos da aplicação
├── pages/            # Páginas da aplicação
├── config/           # Configurações (Firebase, etc)
├── types/            # Tipos TypeScript
└── utils/            # Funções utilitárias
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autor

Seu Nome - [GitHub](https://github.com/seu-usuario)

---

Desenvolvido como parte do projeto da disciplina de Desenvolvimento Web.