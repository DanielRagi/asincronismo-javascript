// Con valores específicos
function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next().value);    // 1
console.log(g.next().value);    // 2
console.log(g.next().value);    // 3
console.log(g.next());          // value: undefined, done: true


// Con array
function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['Daniel', 'Fernando', 'Ramirez', 'Giraldo']);
console.log(it.next().value);   // Daniel
console.log(it.next().value);   // Fernando
console.log(it.next().value);   // Ramirez
console.log(it.next().value);   // Giraldo