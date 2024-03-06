import { createClient } from 'redis';

function redisConnect() {
  const client = createClient();

  client.on('connect', function() {
    console.log('Redis client connected to server');
  }).on('error', (err) => {
    console.log(`Redis client not connected to server: ${err}`);
  });

};

redisConnect();
