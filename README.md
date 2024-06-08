# Global Solutions - Blue Future

Este repositório contém os artefatos desenvolvidos durante a Global Solutions, edição Blue Future.

## Descrição Geral

Este projeto utiliza um sensor de amônia (NH4) conectado a um microcontrolador ESP32 para monitorar a concentração de amônia na água do mar. A leitura do sensor é enviada via Wi-Fi a um servidor MQTT, permitindo o monitoramento remoto em tempo real. O monitoramento dos níveis de amônia é crucial para a saúde marinha, detectando poluição precoce e contribuindo para a preservação dos ecossistemas marinhos.

## Integrantes
- Gabriel Mediotti Marques - RM 552632
- Jó Sales - RM 552679

## Entregas por Matéria

### Edge Computing

- **Código ESP32:**
  - Implementação de um sistema de monitoramento contínuo de amônia na água do mar utilizando o microcontrolador ESP32.
  - Responsável por capturar dados do sensor de amônia e enviar para um servidor MQTT.
  - Localização do código: `edge-computing`

### Computational Thinking

- **Script Python:**
  - Desenvolvimento de um script Python para se conectar a um servidor MQTT, receber e calcular a média das leituras de amônia nos últimos 10 segundos.
  - Responsável por receber os dados do ESP32 e processá-los para geração de relatórios.
  - Localização do script: `computational-thinking`

### Differentiated Problem Solving

- **Artigo Científico:**
  - Desenvolvimento de um artigo científico sobre o sistema de monitoramento contínuo de amônia na água do mar.
  - Apresenta uma introdução, desenvolvimento e conclusão sobre a importância do monitoramento de amônia e os métodos utilizados.
  - Localização do artigo: `differentiated-problem-solving`

### Software Design and Total Experience

- **Backlog:**
  - Criação e gerenciamento do backlog do projeto, detalhando as funcionalidades a serem implementadas e suas prioridades.
  - Localização do backlog: `software-design/Aquicultura_Tecnologica_Backlog.xlsx`

- **Descritivos da Solução:**
  - Documentação detalhada da solução proposta, incluindo a arquitetura do sistema, fluxos de dados, e especificações técnicas.
  - Localização dos descritivos: `software-design/Descritivos da Solução.docx`

### Storytelling

- **Pitch:**
  - Desenvolvimento de um pitch para apresentar o projeto, destacando o problema abordado, a solução proposta e o impacto esperado.
  - Localização do pitch: [`storytelling/pitch`](storytelling/WhatsApp Video 2024-06-07 at 21.46.04.mp4)

### Frontend

- **Projeto em React:**
  - Desenvolvimento de uma interface frontend em React para visualização dos dados de amônia coletados pelo sistema.
  - A interface permite a visualização em tempo real das leituras de amônia e fornece gráficos e alertas para anomalias detectadas.
  - Localização do projeto: `frontend`