const {createReadStream} = require('fs');

const stream = createReadStream('../content/big.txt', { highWaterMark: 200, encoding: 'utf8'
})
//default 64kb
//last buffer - remainder
//highWaterMark - control size
let counter = 0; 

stream.on('data', (result) => {
    counter++;
    console.log(`${counter}:`)
    console.log(result)
})

stream.on('end', () => {
    console.log(`end: ${counter}`)
})

stream.on("error", (err) => console.log(err));
