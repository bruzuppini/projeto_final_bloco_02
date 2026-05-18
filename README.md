# 💊 Farmácia Backend

Projeto backend desenvolvido com **NestJS**, **TypeScript** e **Node.js**, criado para simular uma API de gerenciamento de uma farmácia.

A aplicação foi desenvolvida com foco na criação de uma **API REST**, organização em camadas e estruturação de funcionalidades relacionadas ao recurso de categorias.

---

## ✨ Sobre o projeto

O projeto **Farmácia Backend** tem como objetivo praticar o desenvolvimento de APIs utilizando NestJS, aplicando conceitos de arquitetura backend, organização de módulos, controllers, services e entidades.

Nesta etapa, o sistema possui funcionalidades relacionadas ao gerenciamento de categorias de produtos farmacêuticos.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Descrição |
|---|---|
| NestJS | Framework backend para Node.js |
| TypeScript | Linguagem principal do projeto |
| Node.js | Ambiente de execução JavaScript |
| TypeORM | ORM para integração com banco de dados |
| MySQL | Banco de dados relacional |
| Insomnia | Testes das requisições HTTP |

---

## 📚 Conceitos praticados

- Criação de API REST
- Estrutura de projeto com NestJS
- Controllers
- Services
- Modules
- Entities
- Injeção de dependência
- CRUD
- Validações
- Integração com banco de dados
- Organização de código backend
- Testes de endpoints com Insomnia

---

## ⚙️ Funcionalidades

### 📂 Categorias

- Cadastrar categoria
- Listar todas as categorias
- Buscar categoria por ID
- Buscar categoria por nome
- Atualizar categoria
- Deletar categoria

---

## 📁 Estrutura do projeto

```txt
farmacia-backend/
├── src/
│   ├── categorias/
│   │   ├── controllers/
│   │   │   └── categoria.controller.ts
│   │   ├── entities/
│   │   ├── services/
│   │   │   └── categoria.service.ts
│   │   └── categoria.module.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── test/
├── README.md
├── package.json
├── package-lock.json
├── nest-cli.json
├── eslint.config.mjs
├── tsconfig.json
└── tsconfig.build.json
```

---

## 🚀 Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/bruzuppini/projeto_final_bloco_02.git
```

### 2. Acesse a pasta do projeto

```bash
cd SEU-REPOSITORIO
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Configure o banco de dados

Verifique as configurações do banco de dados no arquivo `app.module.ts`.

Exemplo de configuração com TypeORM:

```ts
TypeOrmModule.forRoot({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "sua_senha",
  database: "db_farmacia",
  entities: [__dirname + "/**/*.entity{.ts,.js}"],
  synchronize: true,
});
```

### 5. Execute a aplicação

```bash
npm run start:dev
```

A API será iniciada normalmente em:

```txt
http://localhost:4000
```

ou na porta configurada no projeto.

---

## 🔗 Endpoints principais

### Categorias

```http
GET /categorias
GET /categorias/:id
GET /categorias/nome/:nome
POST /categorias
PUT /categorias
DELETE /categorias/:id
```

> Os endpoints podem variar de acordo com os nomes definidos no controller do projeto.

---

## 🧪 Testes com Insomnia

A API pode ser testada utilizando o **Insomnia** ou outra ferramenta de requisições HTTP.

Exemplo de corpo para cadastro de categoria:

```json
{
  "nome": "Medicamentos",
  "descricao": "Produtos relacionados a medicamentos e cuidados com a saúde"
}
```

Exemplo de corpo para atualização de categoria:

```json
{
  "id": 1,
  "nome": "Dermocosméticos",
  "descricao": "Produtos voltados para cuidados com a pele"
}
```

---

## 🎯 Objetivo

Este projeto foi desenvolvido para praticar a construção de uma API backend com **NestJS**, reforçando conceitos de CRUD, banco de dados, organização em camadas e boas práticas no desenvolvimento com TypeScript.

---

## 👩‍💻 Autor

Desenvolvido por **Bruna Zuppini Bacchiega**.

---

```txt
☾ backend, organização e lógica em cada endpoint
```
