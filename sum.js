const sum = (a, b) => {
    if (typeof(a) === 'number' && typeof(b) === 'number'){
        return a + b;
    }
    else {
        throw "pass numbers"
    }
}

module.exports = sum;