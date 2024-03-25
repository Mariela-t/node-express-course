const { writeFile, readFile } = require("fs").promises;

async function writer() {
    try{
        await writeFile('./temp.txt', "line 1 ", {flag: 'a'})
        console.log("first text written")

        await writeFile("./temp.txt", "line 2 ", { flag: "a" });
        console.log("second text written");

        await writeFile("./temp.txt", "line 3 ", { flag: "a" });
        console.log("third text written");

    } catch (error) {
        console.error("Error writting file:", error)
    }
}



const reader = async () => {
    try {
const data = await 
readFile('./temp.txt', 'utf8')
console.log(data)
    } catch(error) {
        console.log("Error reading file:", error)
    }
}


const readWrite = async () => {
    await writer()
    await reader()
}

readWrite()