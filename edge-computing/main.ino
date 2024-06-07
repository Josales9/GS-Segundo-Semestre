#include <WiFi.h>
#include "PubSubClient.h"

const char* wifiSsid = "Wokwi-GUEST";
const char* wifiPassword = "";
const char* mqttBroker = "broker.hivemq.com";
int mqttPort = 1883;

String macAddress;
char macAddressChar[50];
char mqttClientId[50];

const int nh4SensorPin = 34;
float nh4Reading, nh4Concentration;

WiFiClient wifiClient;
PubSubClient mqttClient(wifiClient);

const int ledPin = 2;

void setup() {
  Serial.begin(115200);
  randomSeed(analogRead(0));
  delay(10);

  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(wifiSsid);

  connectToWiFi();

  Serial.println();
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
  Serial.println(WiFi.macAddress());

  macAddress = WiFi.macAddress();
  macAddress.replace(":", "_");
  Serial.println(macAddress);

  mqttClient.setServer(mqttBroker, mqttPort);
  pinMode(ledPin, OUTPUT);
}

void connectToWiFi() {
  WiFi.mode(WIFI_STA);
  WiFi.begin(wifiSsid, wifiPassword);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
}

void reconnectToMQTT() {
  while (!mqttClient.connected()) {
    Serial.print("Attempting MQTT connection...");
    long randomClientId = random(1000);
    sprintf(mqttClientId, "clientId-%ld", randomClientId);
    if (mqttClient.connect(mqttClientId)) {
      Serial.print(mqttClientId);
      Serial.println(" connected");
      mqttClient.subscribe("sensor/nh4");
    } else {
      Serial.print("failed, rc=");
      Serial.print(mqttClient.state());
      Serial.println(" try again in 5 seconds");
      delay(5000);
    }
  }
}

void loop() {
  nh4Reading = analogRead(nh4SensorPin);
  nh4Concentration = (nh4Reading * 120 / 4095) - 40;
  
  if (mqttClient.connected()) {
    String nh4ConcentrationString = String(nh4Concentration, 2);
    Serial.println("\nNH4 Concentration: " + String(nh4Concentration));
    mqttClient.publish("sensor/nh4", nh4ConcentrationString.c_str());
  }
  
  if (!mqttClient.connected()) {
    reconnectToMQTT();
  }
  
  mqttClient.loop();
  delay(500);
}
