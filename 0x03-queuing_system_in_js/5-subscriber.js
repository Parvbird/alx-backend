import { createClient } from 'redis';

const redisClient = createClient();

//connect to redis server
redisClient.on('connect', function () {
    console.log('Redis client connected to server');
});

redisClient.on('error', function (error) {
    console.log(`Redis client not connected to server: ${error.message}`);
});

//subscribes holberton school channel
redisClient.subscribe('holberton school channel');

//listen for messages on channel print message when received
redisClient.on('message', function (channel, message) {
  console.log(`${message}`);
  if (message === 'KILL_SERVER') {
//unsubscribe from channel and cancel server connection
    redisClient.unsubscribe('holberton school channel');
    redisClient.end(true);
  }
});
