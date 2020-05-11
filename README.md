# Projeto [DragonBall][l-DragonBall] - Versão 1.0

[![SQUADRA Tecnologia}][i-Squadra]][l-Squadra]

## O que este repositório contém

1. Aplicação em [ReactJS][l-ReactJS] com listagem de planetas e personagens do [DragonBall][l-DragonBall].

---

## Quais as funcionalidades esperadas

```todo
- [] Espaço para Planetas e Personagens.
- [] Lista de cards para exibir os - personagens com nome e imagem.
- [] Usuário possa buscar personagens.
- [] Lista de planetas.
- [] Na lista de planetas o usuário pode ir para a página de residentes do planeta.
- [] Testes unitários.
```

---

## Qual o objetivo deste repositório

1. Processo seletivo para a empresa [SQUADRA Tecnologia][l-Squadra].
2. Criar uma aplicação em [ReactJS][l-ReactJS] consumindo dados da API do [DragonBall][l-DragonBall].

---

## O que é necessário para configurar

1. Node >= 10.16.0 [Node][l-Node].

---

## Como instalar

```shell script
# Instalar todos os pacotes necessários para executar o aplicativo.
> yarn install
```

---

## Como executar

```shell script
# O comando abaixo irá iniciar o projeto na url http://localhost:3000.
> yarn start
```

---

## Como testar

```shell script
# O comando abaixo irá gerar testes da aplicação.
> yarn test
```

---

## Como gerar uma release

```shell script
# O comando abaixo irá gerar os arquivos da release na pasta build.
> yarn build
```

---

## Como posso ver as rotas da API

### Todos os links se encontram na documentação do [DragonBall][l-DragonBall]

## Endpoits da API

> <https://dragon-ball-api.herokuapp.com/api/>

```json
{
  "characters": "https://dragon-ball-api.herokuapp.com/api/character",
  "planets": "https://dragon-ball-api.herokuapp.com/api/planet",
}
```

---

## Módulos adicionais

---

## Módulos adicionais para desenvolvimento

> [ESLint][l-ESLint] - Manter o padrão de código.

```shell script
# Instalar
> yarn add eslint -D

# Configurar
> yarn eslint --init

> * To check syntax, find problems, and enforce code style
> * JavaScript modules (import/export)
> * React
> * No
> * Browser
> * Use a popular style guide
> * Airbnb
> * JSON
```

---

> [ESLint Import Helpers][l-ESLint-Import-Helpers] - Odenar imports de arquivos

```shell script
# Instalar
> yarn add eslint-plugin-import-helpers -D
```

---

> [Tailwindcss][l-Tailwindcss] - Estrutura de CSS

```shell script
# Instalar
> yarn add tailwindcss -D

# Configurar
> npx tailwind init --full
```

---

> 1. [CLI PostCSS][l-Postcss-Cli] - Minificar arquivos
> 2. [Autoprefixer][l-Autoprefixer] - Analisar CSS e adicionar prefixos

```shell script
# Instalar
> yarn add postcss-cli autoprefixer -D

# Configurar
> touch postcss.config.js
```

---

> [ESLint React Hooks][l-ESLint-React-Hooks] - Validar React Hooks

```shell script
# Instalar
> yarn add eslint-plugin-react-hooks -D
```

[i-Squadra]: doc/img/logo.svg "SQUADRA Tecnologia"

[l-Squadra]: https://www.squadra.com.br
[l-Node]: https://nodejs.org/en/download
[l-ReactJS]: https://pt-br.reactjs.org
[l-DragonBall]: https://dragon-ball-api.herokuapp.com/documentation

[l-Tailwindcss]: https://tailwindcss.com
[l-ESLint]: https://github.com/eslint/eslint
[l-ESLint-Import-Helpers]: https://github.com/Tibfib/eslint-plugin-import-helpers
[l-Postcss-Cli]: https://github.com/postcss/postcss-cli
[l-Autoprefixer]: https://github.com/postcss/autoprefixer
[l-ESLint-React-Hooks]: https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
