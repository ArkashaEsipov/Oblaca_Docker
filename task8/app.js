const express = require('express');
const redis = require('redis');

const client = redis.createClient(6379, 'redis'); // подключение к Redis
const app = express();

// Установим visits = 0 при старте
client.set('visits', 0);

app.get('/', (req, res) => {
  client.incr('visits', (err, visits) => {
    if (err) return res.status(500).send(err.toString());
    res.send(`<h1>Hello!</h1><p>Visited ${visits} times.</p>`);
  });
});

app.listen(3002, () => console.log('Server running on port 3002'));
