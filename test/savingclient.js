const mocha = require ('mocha');
const assert = require('assert');
const Client = require('./models/mariochar');

//describe tests
describe('Saving a client', () => {

    //create tests
    it('saving client to database', (done) => {
        var char = new Client({
            firstName:'Allotey'
        })
        char.save().then(() => {
            assert(char.isNew === false);
            done()
        })
    });
});