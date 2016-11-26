var UF = require('./index')

var uf = new UF()

function start(a, b, type) {
    uf.goto(type, a, b)
}

uf.label('multiply')(function multiply(a, b) {
    console.log('multiply', a, b)
    uf.goto('output', a * b)
})

uf.label('sum')(function sum(a, b) {
    console.log('sum', a, b)
    uf.goto('output', a + b)
})

uf.label('output')(function output(result) {
    console.log('output', result)
})

start(2, 8, 'multiply')
