function getConfig() {
    const Props = Java.type("java.util.Properties");
    const props = new Props();

    props.put("bootstrap.servers", "localhost:9092");
    props.put("group.id", "my-consumer-group");
    props.put("key.deserializer", "org.apache.kafka.common.serialization.StringDeserializer");
    props.put("value.deserializer", "org.apache.kafka.common.serialization.StringDeserializer");

    return props;
}

function getConsumer(config) {
    const Consumer = Java.type("org.apache.kafka.clients.consumer.KafkaConsumer");
    return  new Consumer(config)
}

function main() {
    const consumer = getConsumer(getConfig());
    consumer.subscribe(["topic_1"]);

    while (true) {
        const records = consumer.poll(100);
        if (records.count() > 0) {
            const iterator = records.iterator();
            while (iterator.hasNext()) {
                const record = iterator.next();
                console.log(`Received message: ${record.value()} from partition ${record.partition()}`);
            }
        }
    }

    consumer.close();
}

main();