import paho.mqtt.client as mqtt
import time

# Configurações do MQTT
MQTT_BROKER = "broker.hivemq.com"  # Substitua pelo endereço do seu broker
MQTT_PORT = 1883
MQTT_TOPIC = "sensor/nh4"  # Substitua pelo seu tópico

# Variáveis para armazenar as leituras
readings = []

# Função callback quando uma mensagem é recebida
def on_message(client, userdata, message):
    try:
        # Convertendo a mensagem recebida para um valor numérico
        reading = float(message.payload.decode("utf-8"))
        readings.append(reading)
    except ValueError:
        print("Mensagem recebida não é um número válido")

# Função callback para conexão
def on_connect(client, userdata, flags, rc):
    if rc == 0:
        print("Conectado com sucesso ao broker")
        client.subscribe(MQTT_TOPIC)
    else:
        print(f"Falha na conexão. Código de retorno: {rc}")

# Configurando o cliente MQTT
client = mqtt.Client()
client.on_connect = on_connect
client.on_message = on_message

# Conectando ao broker
client.connect(MQTT_BROKER, MQTT_PORT, 60)

# Iniciando o loop do cliente em um thread separado
client.loop_start()

try:
    while True:
        # Aguarda 10 segundos
        time.sleep(10)
        
        # Calculando a média das leituras
        if readings:
            average_reading = sum(readings) / len(readings)
            print(f"Média das leituras nos últimos 10 segundos: {average_reading:.2f}")
            # Limpa as leituras após calcular a média
            readings.clear()
        else:
            print("Nenhuma leitura recebida nos últimos 10 segundos.")
except KeyboardInterrupt:
    # Parando o loop e desconectando ao interromper o programa
    client.loop_stop()
    client.disconnect()
    print("Programa interrompido.")
