var fs = require('fs');
var dummyjson = require('dummy-json');

/*
var template = fs.readFileSync('dataTemplate.hbs', {encoding: 'utf8'});
var result = dummyjson.parse(template);
*/

fs.readFile('./dataTemplate.hbs', { encoding: 'utf8' }, function (err, data) {
  if (err) throw err;
  console.log('Successfully read template file.')
  var result = dummyjson.parse(data);
  fs.writeFile('./dummy-data.json', result, function(err) {
    if (err) throw err;
    console.log('Successfully wrote file');
  });
});
