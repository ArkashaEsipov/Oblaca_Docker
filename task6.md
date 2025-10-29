## Задание 6

## Игнорирование конфиденциальных данных

### DockerFile
```
FROM alpine
ADD . /app
COPY cmd.sh /cmd.sh
RUN chmod +x /cmd.sh
CMD ["sh", "-c", "/cmd.sh"]
```

### ls -la без .dockerignore

```
ark@Ubuntu:~/MyCode/Oblaca_Docker/task6$ docker run with-secrets ls -la /app
total 24
drwxr-xr-x    3 root     root          4096 Oct 29 09:35 .
drwxr-xr-x    1 root     root          4096 Oct 29 09:36 ..
-rw-rw-r--    1 root     root            91 Oct 29 09:33 DockerFile
drwxrwxr-x    2 root     root          4096 Oct 29 09:33 app
-rw-rw-r--    1 root     root           110 Oct 29 09:33 cmd.sh
-rw-rw-r--    1 root     root            62 Oct 29 09:33 passwords.txt
```

### .dockerignore

```
passwords.txt
```

### ls -la с .dockerignore

```
ark@Ubuntu:~/MyCode/Oblaca_Docker/task6$ docker run --name no-secret  no-secrets ls -la /app
total 24
drwxr-xr-x    3 root     root          4096 Oct 29 10:02 .
drwxr-xr-x    1 root     root          4096 Oct 29 10:04 ..
-rw-rw-r--    1 root     root            14 Oct 29 09:46 .dockerignore
-rw-rw-r--    1 root     root            91 Oct 29 09:33 DockerFile
drwxrwxr-x    2 root     root          4096 Oct 29 09:33 app
-rw-rw-r--    1 root     root           110 Oct 29 09:33 cmd.sh
```

## Игнорирование больших данных

### DockerFile
```
FROM alpine
ADD . /app
COPY cmd.sh /cmd.sh
RUN chmod +x /cmd.sh
CMD ["sh", "-c", "/cmd.sh"]
```

### ls -la без .dockerignore

```
ark@Ubuntu:~/MyCode/Oblaca_Docker/task6_BigFilse$ docker run --name big-data big-data ls -la /app
total 10260
drwxr-xr-x    3 root     root          4096 Oct 29 10:57 .
drwxr-xr-x    1 root     root          4096 Oct 29 10:58 ..
-rw-rw-r--    1 root     root            91 Oct 29 10:54 DockerFile
drwxrwxr-x    2 root     root          4096 Oct 29 10:54 app
-rw-rw-r--    1 root     root      10485760 Oct 29 10:54 big-temp-file.img
-rw-rw-r--    1 root     root           110 Oct 29 10:54 cmd.sh
```

### .dockerignore

```
big-temp-file.img
```

### ls -la с .dockerignore

```
ark@Ubuntu:~/MyCode/Oblaca_Docker/task6_BigFilse$ docker run --name no-big-data no-big-data ls -la /app
total 24
drwxr-xr-x    3 root     root          4096 Oct 29 11:01 .
drwxr-xr-x    1 root     root          4096 Oct 29 11:02 ..
-rw-rw-r--    1 root     root            17 Oct 29 11:00 .dockerignore
-rw-rw-r--    1 root     root            91 Oct 29 10:54 DockerFile
drwxrwxr-x    2 root     root          4096 Oct 29 10:54 app
-rw-rw-r--    1 root     root           110 Oct 29 10:54 cmd.sh
```