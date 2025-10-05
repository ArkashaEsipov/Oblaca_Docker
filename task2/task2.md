### 2. Dockerfile
```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
```
curl http://localhost

![alt text](/img/image-2-1.png)

`
docker build -t webserver-image:v1 .
docker run -d -p 80:80 --name my-webserver webserver-image:v1
`
![alt text](/img/image-2-2.png)