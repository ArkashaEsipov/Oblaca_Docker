const express = require('express');
const { createClient } = require('redis');

const app = express();
const redis = createClient({ url: 'redis://redis:6379' });

redis.connect().then(() => redis.set('visits', 0));

app.get('/', async (req, res) => {
  const visits = await redis.incr('visits');
  res.send(`<h1>Hello!</h1><p>Visited ${visits} times.</p>`);
});

app.listen(3002, () => console.log('Server running on port 3002'));
