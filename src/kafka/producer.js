function getConfig() {
    const Props = Java.type("java.util.Properties");
    const props = new Props();
    props.put("bootstrap.servers", "localhost:9092");
    props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
    props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");
    props.put("batch.size", "1");

    return props;
}

function getProducer(config) {
    return new (Java.type("org.apache.kafka.clients.producer.KafkaProducer"))(config);
}

function createRecord(topic, value) {
    const Record = Java.type("org.apache.kafka.clients.producer.ProducerRecord");
    return new Record(topic, value)
}

function main() {
    const producer = getProducer(getConfig());

    for (let i = 0; i < 1000; i++) {
        producer.send(createRecord("topic_1", "value_" + i));
        //Java.type("java.lang.Thread").sleep(500);
        console.log("message sent");
    }
    producer.close();
}

main();