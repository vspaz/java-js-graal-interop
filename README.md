# Java JS GraalVM interop

## Installation

### Linux

1. Download graalvm + node.js from https://github.com/graalvm/graalvm-ce-builds/releases/
   
```shell
wget wget https://github.com/oracle/graaljs/releases/download/graal-24.0.2/graalnodejs-community-jvm-24.0.2-linux-amd64.tar.gz
```
2. extract the archive

```shell
tar -xvzf graalnodejs-community-jvm-24.0.2-linux-amd64.tar.gz
```

3. copy to the required location
```shell
sudo mkdir /opt/graalvm
sudo mv graalnodejs-community-24.0.2-linux-amd64/ /opt/graalvm/

ln -s /opt/graalvm/graalnodejs-community-24.0.2-linux-amd64/bin/node graalnodejs
ln -s /opt/graalvm/graalnodejs-community-24.0.2-linux-amd64/bin/npm graalnpm
```

4. test installation

```shell
./graalnodejs --version
v18.20.2

./graalnpm install colors

added 1 package in 4s
```

5. Download jar files from Maven repository (if applicable); in this case, 
we need `kafka-client` and `slf4j-simple` and `slf4j-api` that the Java kafka client relies on

6. run Kafka JS producer that relies on Java kafka client

```shell
./opt/graalvm/graalnodejs-community-24.0.2-linux-amd64/bin/node --vm.cp=kafka-clients-3.5.2.jar:slf4j-simple-2.0.16.jar:slf4j-api-2.0.16.jar kafka/producer.js
```

7. run Kafka JS consumer that relies on Java kafka client

```shell
/opt/graalvm/graalnodejs-community-24.0.2-linux-amd64/bin/node --vm.cp=kafka-clients-3.5.2.jar:slf4j-simple-2.0.16.jar:slf4j-api-2.0.16.jar kafka/consumer.js
```