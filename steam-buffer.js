const http = require("http");
const fs = require('fs');

// creating server using row node js 

const server = http.createServer()

// listener 
server.on('request', (req, res)=>{
    if (req.url === '/read-file' && req.method === 'GET');

    // steaming file reading 

    const readableSteam = fs.createReadStream(__dirname +'/texts/read.txt')
    
    readableSteam.on('data', (buffer)=>{
        res.statusCode = 200;
        res.write(buffer)
    })

    readableSteam.on('end', () =>{
        res.statusCode = 200;

        res.end("Steaming is over!")

    })

    readableSteam.on('error', (error) =>{
        console.log(error)
        res.statusCode = 500;
        res.end('Something went wrong')
    })

})


server.listen(5000, () =>{
    console.log(`server is running on port 5000`)
})