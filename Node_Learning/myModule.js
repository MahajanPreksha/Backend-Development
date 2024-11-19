let add = (a, b) => {
    return a + b;
}

let prod = (a, b) => {
    return a * b;
}

//exporting multiple functions
module.exports = {
    add: add,
    prod:prod
}; 

//Or you can use: exports.function_name