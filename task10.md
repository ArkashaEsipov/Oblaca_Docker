## Задание 10

### Запуск контейнера с подключением тома
`docker run -v /docker/redis-data:/data --name r1 -d redis \redis-server --appendonly yes`

`cat data | docker exec -i r1 redis-cli --pipe`

### Бэкап данных в другой контейнер
```
ark@Ubuntu:~/MyCode/Oblaca_Docker/task10/docker/redis-data$ docker run --rm -v /docker/redis-data:/backup ubuntu ls /backup
appendonlydir
```

### Shared Volumes - том из базового контейнера (прописаного при запуске)
```
ark@Ubuntu:~/MyCode/Oblaca_Docker/task10/docker/redis-data$ docker run --rm  --volumes-from r1 -it ubuntu ls /data
appendonlydir
```
### Read-only тома - пробуем прочитать данные, после создать файл
```
ark@Ubuntu:~/MyCode/Oblaca_Docker/task10/docker/redis-data$ docker run -it --rm  -v /docker/redis-data:/data:ro  ubuntu bash -c "ls -la data && echo 'Trying to write...' && touch /data/test.txt"
total 12
drwxrwxrwx 3 root root 4096 Oct 29 20:10 .
drwxr-xr-x 1 root root 4096 Oct 29 20:55 ..
drwx------ 2  999  999 4096 Oct 29 20:10 appendonlydir
Trying to write...
touch: cannot touch '/data/test.txt': Read-only file system
```