const { writeFile } = require("fs");

console.log('start')
writeFile('./temporary/fileB.txt', 'utf8', { flag: 'a' }, (err) => {
  console.log("1");
  if (err) {
    console.log(err)
    return
  }
 
 writeFile("./temporary/fileB.txt", "utf8", { flag: "a" }, (err) => {
   console.log("2");
   if (err) {
     console.log(err);
     return;
   }
  
   writeFile(
     "./temporary/fileB.txt", "utf8", { flag: "a" }, (err) => {
      console.log("3")
       if (err) {
         console.log(err);
         return;
       }
       console.log("done with this task");
     }
   );
 });
})
console.log('starting next task')



