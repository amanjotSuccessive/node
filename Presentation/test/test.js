let assert = require('assert').assert;
//1 done cannot be called multiple times
/* 
describe('Array', function () {
    describe('#indexOf()', function () { //sub test suit
        it('double done', function (done) {
            setImmediate(done);
            setImmediate(done);
        });
    });
});
 */
 
// done can handle callback by its own
        //    if(err) done(err);
        //    else done();

/*2 instead of using done callback, you may return a Promise. */
/*3 This is useful if the APIs you are testing return promises instead of callbacks */

/*4. beforeEach(function(){
    return db.clear()
    .then(function (){
        return db.save([tobi, loki, jane]);
    });
});

describe('#find()', function(){
    it('respond with matching records', function(){
        return db.find({ type: 'User'}).should.eventually.have.length(3); 
    });
});

 */

/* 
it('should complete this test', function (done) {
    return new Promise(function (resolve) {
        assert.ok(true);
        resolve();
    })
    .then(done);
}); 
*/


/* 
beforeEach(async function () {
    await db.clear();
    await db.save([tobi, loki, jane]);
});

describe('#find()', function () {
    it('response with matching records', async function () {
        const user = await db.find({ type: 'User' });
        user.should.have.length(3);
    });
}); */

/* describe('Array', function(){
    describe('#indexOf()', function(){
        it('should return -1 when the value is not present',function(){
            console.log("hello",[1,2,3].indexOf(0))//.should.equal(-1);
           
            let ar = [1,2,3]
            ar.indexOf(0).should.equal(-1);
        })
    })
})
 */
/*....Explained in Presentation......... Arrow functions...........*/
/* 
 describe('my suite', ()=>{
     it('my test', ()=>{
         this.timeout(1000);
         assert.ok(true);
     });
 });
 */

/* 
 describe('my suite', function(){
    it('my test', function(){
        this.timeout(1000);
        assert.ok(true);
    });
}); */

/*................... HOOKS................ */
//https://mochajs.org/#asynchronous-hooks

/* import { Mongo } from "meteor/mongo";

export const User = new Mongo.Collection("anyDb");

describe('connection', function () {
    var db = new Connection,
        tobi = new User('tobi'),
        loki = new User('loki'),
        jane = new User('jane');

    beforeEach(function (done) {
        console.log('beforeEach');
        db.clear(function (err) {
            if (err) return done(err);
            db.save([tobi, loki, jane]);
        })
    })


    describe('#find', function () {
        it('respond with matching records', function (done) {
            db.find({
                type: 'User'
            }, function (err, res) {
                if (err) return done(err);
                res.should.have.length(3);
                done();
            });
        });
    });
});
 */

/* ........... Delayed Root suit ......  */
/* Pending Tests */
/* A pending test is not considered as failed Test */


// Explained in Presentation


/* Exclusive
allow you to run only specified suit or test case by 
appending .only() to a function

*/

/* 
 //case 1
describe('Array', function(){
    describe('#indexOf()', function(){
        it('should return 1', function(){
            console.log(1);
        });
        it('should return 2', function(){
            console.log(2);
        });
    });

    describe.only('#Slice',function(){
        it('should return 3',function(){
            console.log(3);
        });
        it('should return 4',function(){
            console.log(4);
        });
    });
});
 */

/* 
//case 3
describe('Array', function(){
    describe.only('#indexOf()', function(){
        it.only('should return 1', function(){
            console.log(1);
        });
        it('should return 2', function(){
            console.log(2);
        });
    });

    describe.only('#Slice',function(){
        it('should return 3',function(){
            console.log(3);
        });
        it('should return 4',function(){
            console.log(4);
        });
    });
});

 */

/* Inclusive Tests  using skip */
/* //case 1
describe('Array', function(){
    describe('#indexOf',function(){
        it.skip('should return -1 unless present', function(){
            console(1)
        });

        it('should return the index when present', function(){
            console.log(2);
        })
    })
}) */
/* 
//case 2
describe('Array', function(){
    describe('#indexOf',function(){
        it.skip('should return -1 unless present', function(){
            console(1)
        });

        it('should return the index when present', function(){
            console.log(2);
        });

        it('should only test in the correct environment',function(){
            if(false){
                console.log(3);
            } else {
                console.log(4);
                this.skip();  //will abort the test
                console.log(5)
            }
        });
    })
})
 */