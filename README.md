# Lógica Monitoramento

## Sobre

Lógica Monitoramento é um protótipo de um sistema de monitoramento de redes de um provedor de internet. A aplicação é divida em frontend e backend, a documentação para ambas as partes são encontradas aqui: 
- [Frontend](frontend/README.md)
- [Backend](backend/README.md)

## Objetivo

O objetivo dessa aplicação é servir como um teste para a primeira etapa de um processo seletivo para a vaga de Desenvolvedor Full Stack na empresa Lógica Sistemas.

## Tecnologias

- ReactJS
- NodeJS

## Requisitos

- :white_check_mark: Mostrar um gráfico por vez e o cliente escolher o gráfico através de um botão.
- :white_check_mark: Os gráficos deverão mostrar a média da última hora, na unidade de medida Mbps (megabits por segundo).
- :white_check_mark: No gráfico de barras empilhadas, cada barra representa a média dos conteúdos no intervalo de 1 minuto da coleta de dados.
- :white_check_mark: No gráfico de pizza, deverá ser apresentado, em porcentagem, a média geral dos quatros conteúdos na última hora.
- :white_check_mark: Os gráficos deverão apresentar uma legenda quando o mouse é passado sobre o gráfico (chart tooltip).

### Opcionais

- :white_check_mark: Seria interessante para o cliente,a possibilidade de uma legenda abaixo do gráfico contendo as seguintes informações por conteúdo, por exemplo: “máximo” (máximo valor do conteúdo na última hora), “média” (média do conteúdo na última hora) e “atual” (último valor coletado para o conteúdo).
- :white_check_mark: Construção de uma RESTFulAPI, na linguagem de sua preferência, para a consulta do JSON de dados.
- :x: Pensando em clientes internacionais, poderá ser disponibilizada uma opção para a troca do idioma do sistema para Inglês ou Espanhol, acarretando na mudança dos textos de legenda, botões, nome do gráfico e etc.
- :x: Implementar, via Docker, toda a infraestrutura de frontend e backend.