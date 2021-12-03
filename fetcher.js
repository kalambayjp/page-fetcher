const req = require('request');
const fs = require('fs');

const args = process.argv.slice(2,4);

req(args[0], (err, response, body) => {
  if (err) {
    return console.log('Error requesting file -->', err)
  };
  
  console.log('Status Code -->', response && response.statusCode);

  let fileSize = body.length
 
  fs.writeFile(args[1], body, (err) => {
    if (err) {
      console.log('Error writing file data -->', err)
    } else {
      console.log(`File was written successfully! \n downloaded and saved ${fileSize} bytes to ${args[1]}`)
    }
  }) 
});


