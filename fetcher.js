const req = require('request');
const fs = require('fs');

const args = process.argv.slice(2,4);

req(args[0], (err, response, body) => {
  if (err) {
    console.log('Error message -->', err)
  };
  
  console.log('Status Code -->', response && response.statusCode);
 
  if (!err) {
    fs.writeFile(args[1], body, (err) => {
      if (err) {
        console.log('Error happend -->', err)
      } else {
        console.log('File was written successfully!')
      }
    }) 
  };

});