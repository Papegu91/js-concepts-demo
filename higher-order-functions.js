function greet(name) {
    return `Hello, ${name}!`;
}

function processUser(name, callback) {
    console.log(callback(name));
}

processUser("Peter", greet);
