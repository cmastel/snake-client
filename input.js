const stdin = process.stdin;

// setup user interface

const setupInput = function() {
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
  })
}

module.exports = {
  setupInput
}