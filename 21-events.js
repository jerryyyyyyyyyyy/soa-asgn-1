// EVENTS - event dirven programming

const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id)=>{
    console.log(`Data Recieved ${name} Roll No: ${id}`)
})

customEmitter.on('response', ()=>{
    console.log(`Other Logic`)
})

customEmitter.emit('response', 'Asad',106)