# Lógica Monitoramento - Frontend

## Visão geral

É mostrada uma visão geral do tráfego de entrada no equipamento A através de uma página Dashboard. Nessa página contêm dois gráficos, o primeiro gráfico do tipo Pizza (Pie Chart) mostra am média geral em porcentagem dos conteúdos obtidos durante 1h. O segundo gráfico do tipo Barras Empilhadas (Stacked Bar Chart) mostra a média das medições realizadas a cada minuto durante 1h.

O cliente pode alterar qual gráfico ele deseja visualizar através de botões na tela. Abaixo de cada gráfico se encontram legendas que contêm as informações de máximo valor do conteúdo em 1h, a média do conteúdo em 1h e o último valor coletado por conteúdo em 1h.

## Layout

O layout é simples, contendo um cabeçalho (header) com a logo da empresa e uma seção lateral contendo todas as páginas da aplicação, nesse caso, só possui a página Dashboard.

O layout também está responsivo.

## Bibliotecas

- React Google Charts: biblioteca usada para criação dos gráficos.
- Axios: para realizar a conexão com o endpoint fornecido pelo backend.
- Styled Components: para a criação de componentes estilizados.
- React Icons: para utilização de ícones.

## Estrutura

O projeto foi estruturado da seguinte forma:

```shell
├───public
└───src
    ├───components
    │   ├───Header
    │   └───Sidebar
    ├───services
    └───utils
```

### Diretório public

Como em todo projeto feito com 0 Create React App, este diretório contêm o arquivo index.html e arquivos como favicon.

### Diretório src

Este é o diretóro onde se encontra toda a aplicação.

O arquivo index.js irá fazer a conexão entre a aplicação e o arquivo index.html presente no diretório	public.

O arquivo App.js irá suportar a aplicação.

O arquivo styles.js irá estilizar o App.js.

O arquivo globalStyles.js são os estilos globais da aplicação.

#### Diretório src/components

Aqui se encontram todos os componentes criados para a aplicação.

- Header: componente que representa o cabeçalho (header) da aplicação.
- Sidebar: componente que representa a barra lateral da aplicação contendo a navegação entre as páginas.

#### Diretório src/services

Aqui se encontram configurações para o projeto, nesse caso, para a api utilizando a biblioteca axios.

#### Diretório src/utils

Neste diretório se encontram arquivos com funções que serão utilizadas pela aplicação, como exemplo o arquivo chartDataManipulation.js contém funções que pegam os dados vindos do backend e os transformam em dados nos quais a aplicação vai utilizar.

## Iniciar a aplicação

Após fazer o download dos arquivos, no diretório frontend, execute o comando para instalar as dependências do projeto.

```shell
npm install
```
ou
```shell
yarn
```

Com todas as dependências instaldas, execute o comando para iniciar a aplicação.

```shell
npm run start
```
ou
```shell
yarn start
```

Lembre-se de que o servidor backend deve estar executando para que a aplicação funcione corretamente.