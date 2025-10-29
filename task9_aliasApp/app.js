const express = require('express');
const redis = require('redis');

const client = redis.createClient(6379, 'db'); 
const app = express();

client.set('visits', 0);

app.get('/', (req, res) => {
  client.incr('visits', (err, visits) => {
    if (err) return res.status(500).send(err.toString());
    res.send(`<h1>Hello!</h1><p>Visited ${visits} times.</p>`);
  });
});

app.listen(3004, () => console.log('Server running on port 3004'));