const mocha = require ('mocha');
const assert = require('assert');
const Client = require('./models/mariochar');

//describe tests
describe('Finding a record from the database', () => {
    var char;
    beforeEach((done) => {
         char = new Client({
            firstName:'Allotey'
        })
        char.save().then(() => {
            assert(char.isNew === false);
            done()
        });
    });
    //create tests
it('finds one record from database', (done)=>{
    Client.findOne({firstName:'Allotey'}).then((result)=> {
        assert(result.firstName==="Allotey")
        done()
    })
})

it('finds one record from database', (done)=>{
    Client.findOne({_id:char._id}).then((result)=> {
        assert(result._id.toString()===char._id.toString())
        done()
    })
})
});

