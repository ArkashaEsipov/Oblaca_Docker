

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

