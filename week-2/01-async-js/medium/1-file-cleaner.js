// File cleaner
//Read a file, remove all the extra spaces and write it back to the same file.

//For example, if the file input was

//hello     world    my    name   is       raman

//After the program runs, the output should be

//hello world my name is raman

const fs = require("fs");

function NoExtraSpaces() {
  fs.readFile("unclean-file.txt", "utf8", function (err, data) {
    console.log("data before cleaning the file : ");
    console.log(data);

    data = data.replace(/\s+/g, " ");

    //now inside this we write the same file with the cleaned data
    fs.writeFile("unclean-file.txt", data, function (err) {
      console.log("data after cleaning the file :");
      console.log(data);
    });
  });
}
NoExtraSpaces();
