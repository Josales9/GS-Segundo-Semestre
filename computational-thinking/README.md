# Global Solutions - Blue Future
O diretório hospeda os artefatos desenvolvidos durante a Global Solutions, edição Blue Future

# Integrantes
- Gabriel Mediotti Marques - RM 552632
- Jó Sales - RM 552679

## Descrição
Este script Python foi desenvolvido para monitorar a concentração de amônia (NH4) na água do mar, utilizando um sensor conectado a um microcontrolador ESP32. O sensor envia as leituras de NH4 para um servidor MQTT através de conexão Wi-Fi. O script se conecta ao servidor MQTT, coleta essas leituras e calcula a média das leituras recebidas nos últimos 10 segundos.

Importância
Monitorar os níveis de NH4 na água do mar é crucial para a preservação dos ecossistemas marinhos. A amônia é um subproduto de muitas atividades humanas, como a agricultura e a produção animal. Concentrações elevadas de NH4 na água podem indicar poluição e impactar negativamente a vida marinha, prejudicando corais, peixes e outros organismos aquáticos.

Este sistema proporciona um monitoramento em tempo real das condições da água, permitindo uma resposta rápida a anomalias e melhorando a capacidade de gestão ambiental. Detectar e remediar problemas precocemente é essencial para proteger a biodiversidade marinha e sustentar recursos naturais essenciais para as comunidades costeiras.

Além disso, o uso de tecnologias como o ESP32 e MQTT possibilita a integração de sistemas de monitoramento ambiental em plataformas mais amplas de IoT (Internet das Coisas), contribuindo para um monitoramento contínuo e sustentável do ambiente marinho.

Este script Python exemplifica um passo inicial na implementação de soluções tecnológicas para proteção ambiental, com potencial para ser escalado e adaptado para diferentes cenários de monitoramento ambiental em larga escala.

## Instruções de Execução

1. **Instalação das Dependências**

   Antes de executar o script, é necessário garantir que as seguintes dependências estejam instaladas:

   - Python 3.x
   - Biblioteca `paho-mqtt` para Python

     Você pode instalar a biblioteca executando o seguinte comando:
     ```bash
     pip install paho-mqtt
     ```

2. **Configuração do Hardware**

   - Conecte o sensor de amônia (NH4) ao microcontrolador ESP32 conforme a documentação do sensor.
   - Certifique-se de que o ESP32 esteja configurado para enviar os dados de concentração de NH4 ao servidor MQTT.

3. **Configuração do Script Python**

   - Abra o script Python em um editor de texto ou IDE de sua escolha.

   - Edite as configurações do MQTT conforme necessário:

     ```python
     # Configurações do MQTT
     MQTT_BROKER = "broker.hivemq.com"  # Substitua pelo endereço do seu broker MQTT
     MQTT_PORT = 1883
     MQTT_TOPIC = "sensor/nh4"  # Substitua pelo seu tópico MQTT
     ```

     Certifique-se de substituir `broker.hivemq.com` pelo endereço do seu servidor MQTT e `sensor/nh4` pelo tópico correto onde os dados estão sendo publicados.

4. **Execução do Script**

   - Execute o script Python:

     ```bash
     python monitor_nh4.py
     ```

   - O script irá se conectar ao servidor MQTT, receberá as leituras de concentração de NH4 e calculará a média das leituras recebidas nos últimos 10 segundos.

5. **Parando a Execução**

   - Para interromper a execução do script, pressione `Ctrl + C` no terminal onde o script está sendo executado.

## Dependências

- Python 3.x
- Biblioteca `paho-mqtt`:
   ```bash
   pip install paho-mqtt

