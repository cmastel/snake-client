const net = require('net');

// Establish connection with the game server

const connect = function() {
  const conn = net.createConnection({
    host: '192.168.15.225',
    port: 50541,
    })


  // interpret incoming data as text
  conn.setEncoding('utf8');
  
  conn.on('close', () => {
    console.log('you ded cuz you idled');
  });

  return conn;
}

console.log('Connecting....');
connect()