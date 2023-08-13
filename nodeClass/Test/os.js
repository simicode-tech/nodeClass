// const os = require("os");
// console.log(os.release());
// const path = require("path");
// console.log(path.basename);
const { log } = require("console");
const fs = require("fs");

// console.log(fs);

// const todo = () => {
//   try {
//     fs.mkdirSync("./Test/Todo2");
//     console.log(" folder created successfully");
//   } catch (err) {
//     console.log(err);
//     // throw new Error("file already exists");
//   }
// };

// todo();

// const myFile = fs.writeFileSync("./Test/Todo2/file.txt", "Hello world");

// console.log(myFile);

fs.mkdir("./Test/Todo3", (err) => {
  if (err) throw err;
  console.log(" folder created successfully");
  fs.writeFile("./Test/Todo3/file2.txt", "Test", (err) => {
    if (err) throw err;
    console.log(" file created successfully");
  });
});
