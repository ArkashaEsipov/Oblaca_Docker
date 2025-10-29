## Задание 8

### Подключение к контейнеру используя link с выводом переменных окружения (с фильтром на те, где встречается REDIS)
`docker run --link redisHostPort:redis alpine env | grep REDIS`

```
REDIS_PORT=tcp://172.17.0.5:6379
REDIS_PORT_6379_TCP=tcp://172.17.0.5:6379
REDIS_PORT_6379_TCP_ADDR=172.17.0.5
REDIS_PORT_6379_TCP_PORT=6379
REDIS_PORT_6379_TCP_PROTO=tcp
REDIS_NAME=/agitated_pare/redis
REDIS_ENV_REDIS_DOWNLOAD_URL=https://github.com/redis/redis/archive/refs/tags/8.2.2.tar.gz
REDIS_ENV_REDIS_DOWNLOAD_SHA=e355378d7f97efd06321fff881efc452a9673cc27b3a6d0dfd2a45fbcc83349c
```
### Вывод записи host контейнеров
`docker run --link redisHostPort:redis alpine cat /etc/hosts`

```
127.0.0.1	localhost
::1	localhost ip6-localhost ip6-loopback
fe00::	ip6-localnet
ff00::	ip6-mcastprefix
ff02::1	ip6-allnodes
ff02::2	ip6-allrouters
172.17.0.5	redis a4ec1821868d redisHostPort
172.17.0.7	e87d545b8f48
```

### Пингуем контейнер 
`docker run --link redisHostPort:redis alpine ping -c 2 redis`

```
PING redis (172.17.0.5): 56 data bytes
64 bytes from 172.17.0.5: seq=0 ttl=64 time=0.064 ms
64 bytes from 172.17.0.5: seq=1 ttl=64 time=0.043 ms

--- redis ping statistics ---
2 packets transmitted, 2 packets received, 0% packet loss
round-trip min/avg/max = 0.043/0.053/0.064 ms
```

### DockerFile приложения которое соединим с Redis
```
From parent_t5
EXPOSE 3002
```

### Запускаем приложение с link к Redis
`docker run -d --name node_t8 --link redisHostPort:redis -p 3002:3002 node_t8`

### Проверяем работу приложения
```
ark@Ubuntu:~/MyCode/Oblaca_Docker/task8$ curl http://localhost:3002
<h1>Hello!</h1><p>Visited 1 times.</p>

ark@Ubuntu:~/MyCode/Oblaca_Docker/task8$ curl http://localhost:3002
<h1>Hello!</h1><p>Visited 2 times.</p>

ark@Ubuntu:~/MyCode/Oblaca_Docker/task8$ curl http://localhost:3002
<h1>Hello!</h1><p>Visited 3 times.</p>

ark@Ubuntu:~/MyCode/Oblaca_Docker/task8$ curl http://localhost:3002
<h1>Hello!</h1><p>Visited 4 times.</p>

ark@Ubuntu:~/MyCode/Oblaca_Docker/task8$ curl http://localhost:3002
<h1>Hello!</h1><p>Visited 5 times.</p>
```