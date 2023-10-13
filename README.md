# solid-node-backend
Projeto muito muito simples, feito para estudo de programação com conceitos do SOLID na construção de API Rest feito com nodejs, typescript.

## Tecnologias usadas
- Javascript
- Typescript
- Node.js
- npm (gerenciador de pacotes do Node.js)
- Prisma ORM (para mapear objetos ao paradigma do banco de dados relacional)
- @prisma/client (client para executar comandos do prisma localmente no projeto via terminal)
- Postgres
- docker
- docker-compose

## Passo a passo
**Aviso:** Para poder testar a aplicação é necessário você ter conhecimento em: prisma ORM, container, docker, postgres, comandos de terminal.

### Clonando e configurando o projeto
**1º passo: clone o repositório para sua máquina com github.**
```bash
git clone https://github.com/Marlinsk/solid-node-backend.git
```

**2º passo: entre na pasta do projeto.**
```bash
cd solid-node-backend
```

**3º passo: antes de usar o docker-compose up, crie um arquivo .env fora da pasta src e insira as seguintes variáveis.**
```bash
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"
```
**Link da documentação de referência:** https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-postgresql

**4º passo: instalar as dependências**
```bash
npm install
```

### Subindo o banco de dados Postgresql com Docker
**1º passo: rode o comando abaixo para rodar o docker-compose e subir a imagem.**
```bash
docker-compose up
```

**2º passo: execute este comando para listar os containers e ver se estão rodando e em que porta.**
```bash
docker ps
```

Após seguir estes passos o banco de dados já está criado e agora você pode rodar a aplicação utilizando o seguinte comando.
```bash
npm run start:dev
```

Agora é só testar e se divertir. 
