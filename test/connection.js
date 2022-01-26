const mongoose = require ('mongoose')

//Es6 promise library
mongoose.Promise = global.Promise;


//connect to database before tests run
before((done) => {
    //connecting to database
mongoose.connect('mongodb://localhost/testaroo');

mongoose.connection.once('open', function(){
    console.log('connection has been made now')
    done()
}).on('error', function(error){
    console.log('connection error:', error)
})
})

//drop(delete) the client collection before each test
beforeEach((done)=>{
    //drop collection
    mongoose.connection.collections.clients.drop(()=> {
        done()
    })
})


