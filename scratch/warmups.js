var fs = require('fs');

var filename = process.argv[2];

fs.readFile(filename, function(err, data) {
  if (err) throw error;
  fs.writeFile(filename + '.copy', data, function (error){
    if (err) throw err;
    console.log(data.toString());
  })
});
