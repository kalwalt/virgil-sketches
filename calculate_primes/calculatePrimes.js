const importObject = {
    console: {
        log(arg) {
            console.log(arg);
        },
    }
}


WebAssembly.instantiateStreaming(fetch("./calculatePrimes.wasm"), importObject).then(

    (obj) => {
        console.log(obj);


        const importMainObject = {
            calcPrimes: {
                FindPrimes(arg, arg1) {
                    console.log(arg);
                    obj.instance.exports.FindPrimes(arg, arg1);
                },
            },
        };

        WebAssembly.instantiateStreaming(fetch("./main.wasm"), importMainObject).then(

            (obj2) => {
                console.log(obj2);

                //obj.instance.exports.printPlus33();
                obj2.instance.exports.main();
            },
        );
    })