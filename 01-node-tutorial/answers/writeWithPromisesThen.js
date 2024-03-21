const { writeFile, readFile } = require("fs").promises;

writeFile('temp.txt', "Line 1 ")
 .then(() => {  
    console.log("line one written")
    return writeFile('temp.txt', "Line 2 ")  
 })  
 .then(() => {
    console.log("line two written")

    return writeFile('temp.txt', "Line 3 ")
 }) 
 .then(() => {
    console.log("line three written")

    return readFile('temp.txt', "utf8")
 })
 .then((data) => {
    console.log("file content: ", data)
 })
 .catch((error) => {  
     console.log("An error occurred: ", error)  
 })  