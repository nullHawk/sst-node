const fs = require("fs");


const data = fs.readFileSync("file.txt");

console.log(""+data);

// fs.writeFile("file.txt", "Hello World","utf-8",(err)=>{
//     console.log("file modified");
// });

// fs.appendFile("file.txt"," class is going on","utf-8",(err)=>{
//     console.log("file modified");
// });

// fs.mkdir('dir1',(err) => {
//     if(err){
//         console.log(err);
//     }
//     console.log("fir formated");
// });

// fs.rmdir('dir1',(err) => {
//     if(err){
//         console.log(err);
//     }
//     console.log("fir deleted");
// });

//move file.txt to dir1

// fs.rename("file.txt", "dir1/file.txt", (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log("file moved to dir1");
// });


const path = require("path");
const filePath = path.join(__dirname, "file.txt");
console.log(filePath);

fs.copyFile(filePath, "dir1/file.txt", (err) => {
    if (err) {
        console.log(err);
    }
    console.log("file copied to dir1");
});

