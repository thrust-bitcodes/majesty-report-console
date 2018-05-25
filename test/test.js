let majesty = require('majesty')

function exec(describe, it, beforeEach, afterEach, expect, should, assert) {

    describe('1. Teste 1', function () {
        it('1.1 - XPTO', function () {
            expect(1).to.equal(1)
        })

        it('1.2 - XPTO', function () {
            expect(1).to.equal(1)
        })

        it('1.3 - ERROR', function () {
            expect(1).to.equal(2)
        })
    })
}

let res = majesty.run(exec);

var totalErrors = res.failure.length;
var expectedErrors = 1; //1.3

exit(totalErrors - expectedErrors)