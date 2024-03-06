import { createClient, print } from 'redis';

const client = createClient();

client.on('connect', function() {
  console.log('Redis client connected to server');
});

client.on('error', function (err) {
  console.log(`Redis client not connected to server: ${err}`);
});

function setNewSchool(schoolName, value) {
  client.set(schoolName, value, print);
};

function displaySchoolValue(schoolName) {
  client.get(schoolName, function(error, result) {
    if (error) {
      console.log(error);
      throw error;
    }
    console.log(result);
  });
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');
