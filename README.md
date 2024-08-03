
# YouTube Music App

Um aplicativo Electron para ouvir música no YouTube Music com suporte para execução em segundo plano e configuração personalizada.

## Funcionalidades

- **Reprodução de Música**: Reproduza músicas diretamente do YouTube Music.
- **Execução em Segundo Plano**: Continue ouvindo música enquanto usa outros aplicativos.
- **Janela de Confirmação**: Receba uma confirmação ao tentar fechar o aplicativo, com opções para continuar ouvindo ou fechar a aplicação.
- **Interface Personalizada**: Interface personalizada com tema escuro e ícones do YouTube.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (recomendado: versão LTS)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) (ou [npm](https://www.npmjs.com/get-npm))

## Instalação

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/usuario/repo.git
   cd repo
   ```

2. **Instale as Dependências**

   Se você estiver usando Yarn:

   ```bash
   yarn install
   ```

   Ou, se preferir npm:

   ```bash
   npm install
   ```

## Desenvolvimento

Para iniciar o aplicativo em modo de desenvolvimento:

```bash
yarn start
```

Isso abrirá o aplicativo em uma janela do Electron.

## Construção

Para criar um instalador para o seu aplicativo, execute:

```bash
yarn build
```

Os instaladores gerados serão salvos no diretório `dist`.

## Configuração do `package.json`

A configuração do `package.json` inclui:

- **Scripts**: Scripts úteis para iniciar o aplicativo e construir o instalador.
- **Dependências**: Inclui Electron e Electron Builder.
- **Configuração de Construção**: Configuração para empacotamento e criação de instaladores para diferentes plataformas.

## Configuração de Ícones

Certifique-se de ter os ícones apropriados nas seguintes resoluções e formatos:

- **Windows**: Arquivo `.ico` (várias resoluções).
- **Mac**: Arquivo `.icns`.
- **Linux**: Arquivo `.png`.

Atualize a seção `build` no `package.json` com os caminhos corretos para seus ícones.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Crie um pull request ou abra uma issue para discutir mudanças.

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).
