# Java JS GraalVm interop

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
