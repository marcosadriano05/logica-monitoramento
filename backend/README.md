# Lógica Monitoramento - Backend

## Visão geral

Aplicação construida em NodeJS com o intuito de servir os dados com o formato JSON para o frontend. Os dados foram criados aleatoriamente.

## Bibliotecas

- Express: para a criação das rotas endpoint.
- Cors: habilitar requisições de um mesmo domínio.

## Estrutura

Inicialmente a aplicação possui apenas o arquivo server.js, onde se encontram as configurações e rotas do servidor, e o arquivo data.json, que será as informações enviadas pelo endpoint da aplicação.

## Dados enviados

Abaixo está um exemplo de como está estruturado o arquivo JSON:

```json
[
  {
    "time": "05/05/2021 19:19:01",
    "content": "Netflix",
    "value": [
      { "1": 98, "2": 99, "3": 84, "4": 66, "5": 81 },
      { "1": 77, "2": 92, "3": 63, "4": 87, "5": 94 },
      .
      .
      .
      { "1": 82, "2": 63, "3": 62, "4": 97, "5": 70 }
    ]
  },
  {
    "time": "05/05/2021 19:19:01",
    "content": "Facebook",
    "value": [
      { "1": 42, "2": 43, "3": 44, "4": 47, "5": 42 },
      { "1": 42, "2": 44, "3": 41, "4": 48, "5": 43 },
      .
      .
      .
      { "1": 43, "2": 47, "3": 47, "4": 42, "5": 41 }
    ]
  },
  {
    "time": "05/05/2021 19:19:01",
    "content": "Google",
    "value": [
      { "1": 24, "2": 24, "3": 22, "4": 25, "5": 23 },
      { "1": 25, "2": 21, "3": 22, "4": 21, "5": 24 },
      .
      .
      .
      { "1": 23, "2": 23, "3": 25, "4": 24, "5": 23 }
    ]
  },
  {
    "time": "05/05/2021 19:19:01",
    "content": "Akamai",
    "value": [
      { "1": 11, "2": 12, "3": 14, "4": 11, "5": 15 },
      { "1": 13, "2": 12, "3": 11, "4": 12, "5": 12 },
      .
      .
      .
      { "1": 13, "2": 11, "3": 13, "4": 14, "5": 12 }
    ]
  }
]
```

O JSON consiste num array onde cada posição é um objeto que representa um dos conteúdos que estão sendo monitorados.

Esse objeto contém os campos time, content e value, onde:

- time: data e hora que foi realizada a medição.
- content: conteúdo da medição.
- value: array de 60 posições, onde cada posição contém um objeto que representa 1min durante a última hora de medição, cada objeto possui 5 campos, esses campos representam 5 medições feitas durante 1min.

## Rotas

- "/": método get. Resposta: JSON com as informações presentes no arquivo data.json.