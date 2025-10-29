## Задание 7

### Создаем контейнер данных
`docker create -v /config --name dataContainer busybox`

### копируем в контейнер данных файл конфига
`docker cp config.conf dataContainer:/config/`

### Проверяем наличие файла в томе
```
ark@Ubuntu:~/MyCode/Oblaca_Docker/task7$ docker run --volumes-from dataContainer ubuntu ls /config
config.conf
```

### Пролверяем файл + читаем его содержимое
```
ark@Ubuntu:~/MyCode/Oblaca_Docker/task7$ docker run --volumes-from dataContainer ubuntu bash -c "ls -la /config && cat /config/config.conf"
total 12
drwxr-xr-x 2 root   root   4096 Oct 29 11:44 .
drwxr-xr-x 1 root   root   4096 Oct 29 11:45 ..
-rw-rw-r-- 1 ubuntu ubuntu   25 Oct 29 11:41 config.conf
some=3332
some_new = 1912ark@Ubuntu:~/MyCode/Oblaca_Docker/task7$ 
```
### Экспорт контейнера

`docker export dataContainer >/home/ark/Documents/dataContainer.tar`

### Импорт контейнера

`docker import dataContainer.tar`

### Экспорт тома
```
sudo tar czvf config_volume.tar.gz -C /var/lib/docker/volumes/01d1339234eb0c163aae38260db77fd2f4ecf84a67db73a329b69bf4130da988/_data .
```

### Путь берем из 'docker inspect dataContainer'
```
        "Mounts": [
            {
                "Type": "volume",
                "Name": "01d1339234eb0c163aae38260db77fd2f4ecf84a67db73a329b69bf4130da988",
                "Source": "/var/lib/docker/volumes/01d1339234eb0c163aae38260db77fd2f4ecf84a67db73a329b69bf4130da988/_data",
                "Destination": "/config",
                "Driver": "local",
                "Mode": "",
                "RW": true,
                "Propagation": ""
            }
        ],
```