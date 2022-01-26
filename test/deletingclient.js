const assert = require('assert');
const Client = require('./models/mariochar');

//describe tests
describe('deleting records in Database ', () => {
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

it('deletes one record from database', (done)=>{
    Client.findOneAndRemove({firstName:'Allotey'}).then(()=> {
        Client.findOne({firstName:"Allotey"}).then((result)=> {
            assert(result === null)
        done()
        })
        
    })
})
});

