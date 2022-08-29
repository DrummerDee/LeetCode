let re = /[W_]/
let noPunc= s.toLowerCase().replace(/[^A-Za-z]+/g,'');
let newStr = noPunc.split('').reverse().join('');
    if(newStr === s){
        return true
    }else{
        return false
    }
    
// Mocha Test
    
    let assert = require('assert');
    describe('Parentheses that match', function () {
      describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
          assert.equal([1, 2, 3].indexOf(4), -1);
        });
      });
    });