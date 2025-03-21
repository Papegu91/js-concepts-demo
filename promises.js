let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise resolved!"), 2000);
});

promise.then(console.log);
