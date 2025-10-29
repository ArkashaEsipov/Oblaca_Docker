## Задание 2
### Dockerfile

```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
```
### Команды работы:

`docker build -t webserver-image:v1 .`

`docker run -d -p 8080:80 --name my-webserver webserver-image:v1`

### Проверка работы контейнера:
```
ark@Ubuntu:~/MyCode/Oblaca_Docker/task5$ curl http://localhost:8080/
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Лабораторная работа 2. HTML страница</h1>
</body>
</html>ark@Ubuntu:~/MyCode/Oblaca_Docker/task5$ 
```