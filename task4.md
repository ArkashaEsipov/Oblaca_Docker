### 3. Dockerfile

```
FROM node:10-alpine
RUN mkdir -p /src/app
WORKDIR /src/app
COPY package.json /src/app/package.json
RUN npm install
COPY . /src/app
EXPOSE 3000
CMD [ "npm", "start" ]
```

chmod +x bin/www

docker build -t nodejs_t4 .

docker run -d --name nodejs_t4 -p 3000:3000 nodejs_t4


curl http://localhost:3000
Hello World from Node.js Docker Container!ark@Ubuntu:~/MyCode/Oblaca_Docker/task4$


docker start a4ec1821868d

docker start 97494ba3a4ae

docker start 1c9ed9853546

docker start 0430ab90e050