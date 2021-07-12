const sum = (a, b) => {
    if (typeof(a) === 'number' && typeof(b) === 'number'){
        return a + b;
    }
    else {
        return 0;
    }
}

module.exports = sum;