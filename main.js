const fs = require('fs');

// TODO: Write the message "Hello, World!" to the file "output.txt"

fs.writeFile('./output.txt',"Hello, World!",(err)=> console.log(err));

