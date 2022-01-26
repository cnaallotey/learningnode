const assert = require('assert');
const Client = require('./models/mariochar');

//describe tests
describe('updating records in Database ', () => {
    var char;
    beforeEach((done) => {
         char = new Client({
            firstName:'Allotey'
        })
        char.save().then(() => {
            done()
        });
    });
    //create tests

it('Updtes one record from database', (done)=>{
    Client.findOneAndUpdate({firstName:'Allotey'},{firstName:'Mensah'}).then(()=> {
        Client.findOne({_id:char._id}).then((result)=> {
            assert(result.firstName === "Mensah")
        done()
        })
        
    })
})
});

