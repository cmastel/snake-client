const stdin = process.stdin;

// setup user interface

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput();
  return stdin;
};

const handleUserInput = function() {
  stdin.on('data', (key) => {
    // if ctrl+c, thank the user and exit
    if (key === '\u0003') {
      console.log('Thanks for using me, ciao!')
      process.exit();
    }

    if (key === 'w') {
      connection.write('Move: up');
    };
    if (key === 'a') {
      connection.write('Move: left');
    }
    if (key === 's') {
      connection.write('Move down');
    }
    if (key === 'd') {
      connection.write('Move: down');
    }
    if (key === 'p') {
      connection.write('Say: ssssnnnaaakkesssss');
    }
    if (key = 'o') {
      connection.write('Say: Come get me!!!!');
    }
  })
}

module.exports = {
  setupInput
}