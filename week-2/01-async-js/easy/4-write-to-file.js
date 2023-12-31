//## Write to a file
//Using the fs library again, try to write to the contents of a file.
//You can use the fs library to as a black box, the goal is to understand async tasks.const fs= require('fs');
const fs = require("fs");

function write(content) {
  fs.writeFile("a.txt", content, function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log("Writing done");

      // Read the file after writing
      read();
    }
  });
}

function read() {
  fs.readFile("a.txt", "utf8", function (err, data) {
    if (err) {
      console.error(err);
    } else {
      console.log("File content after writing:");
      console.log(data);
    }
  });
}

// Call the write function
write("Hello people of New Orleans");

console.log("I will be the first to get printed");
