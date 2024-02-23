function calcSquereWithDaley(side, deley) {
    return new Promise((resolve, reject) => {
        if (typeof side !== "number") {
            reject(new Error("argument number should be here. I got " + typeof side + " instead"))
        }
        setTimeout(() => {
            console.log(`delay is = ${deley}`);
            resolve(getResult(side));
        }, deley);
        return promise;
    })
}

function getResult(n) {
    return n * n;
}

function random(from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
}

calcSquereWithDaley(1, random(1000, 3000))
    .then((result) => {
        console.log(result)
        return calcSquereWithDaley(2, random(1000, 3000));
    })
    .then((result) => {
        console.log(result)
        return calcSquereWithDaley(4, random(1000, 3000))
    })
    .then((result) => {
        console.log(result)
        return calcSquereWithDaley(6, random(1000, 3000))
    })
    .then((result) => {
        console.log(result)
        return calcSquereWithDaley(10, random(1000, 3000))
    })
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(`Error just happened ${err}`)
    });



async function callPromisseFunction() {
    try {
        await calcSquereWithDaley(1, random(1000, 3000));
        await calcSquereWithDaley(2, random(1000, 3000));
        await calcSquereWithDaley(3, random(1000, 3000));
        await calcSquereWithDaley(10, random(1000, 3000));
    }
    catch (err) {
        console.log("some error!!!")
    }
}

await getResult(10).then((result) => {
    console.log(result);
});

callPromisseFunction();