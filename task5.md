## Задание 5
### DockerFile.onbuild
```
FROM node:10-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ONBUILD COPY package.json /usr/src/app/
ONBUILD RUN npm install
ONBUILD COPY . /usr/src/app
CMD [ "npm", "start" ]
```
Родительский образ - служит основой для дочерних, команды ONBUILD выполняются когда за базовый образ выбирается родительский (в самом образе действия не выполняются)

### DockerFile
```
FROM parent_t5
EXPOSE 3001
```
Дочерний образ - создается из нашего ранее созданого родительского. При создании выполняются команды прописанные в родительском с инструкцией ONBUILD, т.е. выполняются:
```
COPY package.json /usr/src/app/
RUN npm install
. /usr/src/app
```
### Команды работы:

`docker build -t parent_t5 -f DockerFile.onbuild . ` - сборка родительского образа

`docker build -t child_t5 -f DockerFile . ` - сборка дочернего образа

`docker run -d --name onbild_t5 -p 3001:3001 child_t5 ` - запуск дочернего контейнера с пробросом порта 3001

### Проверка работы контейнера:

``` 
ark@Ubuntu:~/MyCode/Oblaca_Docker/task5$ curl http://localhost:3001/
Hello World from Node.js Docker Container! It`s task 5.ark@Ubuntu:~/MyCode/Oblaca_Docker/task5$ 
```
