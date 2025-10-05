### 1. Поиск образа
`docker search redis`

![alt text](img/image-1.png)

### 2. Запуск в фоне
`docker run -d --name my-redis redis`

![alt text](/img/image-2.png)

### 3. Проверка работающих контейнеров
`docker ps`

![alt text](/img/image-3.png)

### 4. Инспекция и логи
`docker inspect my-redis`

![alt text](/img/image-4.png)

`docker logs my-redis`

![alt text](/img/image-5.png)

### 5. Запуск с пробросом порта
`docker run -d --name redis-with-port -p 6379:6379 redis:latest`

![alt text](/img/image-6.png)
![alt text](/img/image-7.png)

### 6. Запуск с томом для данных
`docker run -d --name redis-with-volume -v ~/docker-data/redis:/data redis`

![alt text](/img/image-8.png)
![alt text](/img/image-9.png)
