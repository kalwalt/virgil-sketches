WebAssembly.instantiateStreaming(fetch("./IsPrime.wasm")).then(

    (obj) => {
        console.log(obj);


        const importFindPrimesObject = {
            PrimeChecker: {
                isPrime(arg) {
                    return obj.instance.exports.isPrime(arg);
                },
            },
            console: {
                log(arg) {
                    console.log(arg);
                },
            }
        }


        WebAssembly.instantiateStreaming(fetch("./FindPrimes.wasm"), importFindPrimesObject).then(

            (obj2) => {
                console.log(obj2);

                obj2.instance.exports.FindPrimes(0, 10100);
            },
        );
    })