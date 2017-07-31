var brain = require('brain.js');
var langJson = require('./lang.json');
var fs = require('fs');

var net = new brain.recurrent.LSTM();
fs.open('./docs/net.json', 'r', (err, fd) => {
  if (err) {
    net.train(langJson, {
      log: true,
      iterations: 400
    });
    var json = net.toJSON();
    fs.writeFileSync('./docs/net.json', JSON.stringify(json));
  } else {
    net.fromJSON(require('./docs/net.json'));
  }
  console.log('children',' => ',net.run('children'));
  console.log('children of blood',' => ',net.run('children of blood'));
  console.log('children of blood and of the sun',' => ',net.run('children of blood and of the sun'));
  console.log('children of Medivh',' => ',net.run('children of medivh'));
});
