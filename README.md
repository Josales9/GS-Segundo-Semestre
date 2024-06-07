# Global Solutions - Blue Future

Este repositório contém os artefatos desenvolvidos durante a Global Solutions, edição Blue Future.

## Descrição Geral

Este projeto utiliza um sensor de amônia (NH4) conectado a um microcontrolador ESP32 para monitorar a concentração de amônia na água do mar. A leitura do sensor é enviada via Wi-Fi a um servidor MQTT, permitindo o monitoramento remoto em tempo real. O monitoramento dos níveis de amônia é crucial para a saúde marinha, detectando poluição precoce e contribuindo para a preservação dos ecossistemas marinhos.

# Integrantes
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

