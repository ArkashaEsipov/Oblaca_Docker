## Задание 6
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