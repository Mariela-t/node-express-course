// const { readFileSync, writeFileSync } = require("fs");
// console.log("start");
// const first = readFileSync("./content/first.txt", "utf8");
// const second = readFileSync("./content/second.txt", "utf8");
// const third = writeFileSync("./content/third.txt", "utf8");

// writeFileSync(
//   "./temporary/fileA.txt",
//   `Here is the result : ${first}, ${second}, ${third}`,
//   { flag: "a" }
// );

// console.log("done with this task");
// console.log("starting the next one");
// console.log("starting the last one");



const { readFileSync, writeFileSync } = require("fs");
console.log("start");
 writeFileSync("./temporary/fileA.txt", "First\n", { flag: "a" });
 writeFileSync("./temporary/fileA.txt", "Second\n", { flag: "a" });
 writeFileSync("./temporary/fileA.txt", "Third\n", { flag: "a" });

const fileContent= readFileSync(
  "./temporary/fileA.txt",'utf8'
);

console.log(fileContent);

