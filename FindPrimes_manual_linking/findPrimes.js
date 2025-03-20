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

                // FindPrimes works only invoked in main. YTry to invoke it directly ( uncomment the line below) and rebuild the .wasm file
                obj2.instance.exports.FindPrimes(0, 100)
                console.log (obj2.instance.exports.FindPrimes2(0, 100));
                obj2.instance.exports.main();
            },
        );
    })