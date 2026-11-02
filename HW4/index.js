
const fs = require("fs");
const path = require("path");
// array for every file
const files = [
    "a1.txt", "a2.txt", "a3.txt", "a4.txt", "a5.txt",
    "a6.txt", "a7.txt", "a8.txt", "a9.txt", "a10.txt"
];
//empty string for result
let result = "";
// for loop that go over all files in the file array
for (let i = 0; i < files.length; i++) {
    const filePath = path.join(__dirname, "input", files[i]);
    //reads the file and split them 
    const text = fs.readFileSync(filePath, "utf-8");
    const lines = text.split(/\r?\n/);
    //for to put all the new lines in result
    for (let j = 0; j < i + 1 && j < lines.length; j++) {
        result += lines[j] + "\n";
    }
}

fs.writeFileSync(path.join(__dirname, "output.txt"), result);
// to check if the file run and all good 
console.log("Done!");
