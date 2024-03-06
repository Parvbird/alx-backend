import { createClient } from 'redis';

const publisher = createClient();

//connect to redis server
publisher.on('connect', function () {
    console.log('Redis client connected to server');
});

publisher.on('error', function(error) {
    console.log(`Redis client not connected to server: ${error.message}`);
});

//function which publishs message to holberton school channel
function publishMessage(message, time) {
  //message (str): message to publish, time (int): time in milliseconds to wait before sending 
  setTimeout(function () {
    console.log(`About to send ${message}`);
    publisher.publish('holberton school channel', message);
  }, time);
}

publishMessage("Holberton Student #1 starts course", 100);
publishMessage("Holberton Student #2 starts course", 200);
publishMessage("KILL_SERVER", 300);
publishMessage("Holberton Student #3 starts course", 400);
