const EventEmitter  = require("events")

const myEmitter = new EventEmitter
//listner
myEmitter.on("birhdayEvent", () =>{
    console.log("happy birthday to you ")
})


myEmitter.on('birhdayEvent' , (emoji)=>{
    console.log(`when her birthday i will send a ${emoji}`)
})

myEmitter.emit("birhdayEvent" , "bus")