// Reading the contents of a file

//Write code to read contents of a file and print it to the console.
//You can use the fs library to as a black box, the goal is to understand async tasks.
//Try to do an expensive operation below the file read and see how it affects the output.
//Make the expensive operation more and more expensive and see how it affects the output.

const fs = require("fs");

function read() {
  fs.readFile("a.txt", "utf8", function (err, data) {
    console.log("file has been read , here's what we got");
    console.log(data);
  });
}

read();

setTimeout(function () {
  console.log("Waited for 4 seconds after sync task got completed");
}, 4000);

console.log("Let's start");
for (let i = 0; i < 300000; i++) {}
