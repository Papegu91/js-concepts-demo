let a = "Global";

function outer() {
    let b = "Outer";

    function inner() {
        console.log(a, b); // Can access both
    }

    inner();
}

outer();
