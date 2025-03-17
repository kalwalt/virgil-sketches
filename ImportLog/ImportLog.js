const importObject = {
    console: {
      log(arg) {
        console.log(arg);
      },
    },
  };
 
  WebAssembly.instantiateStreaming(fetch("./ImportLog.wasm"), importObject).then(

    (obj) => {
        console.log(obj);
        
      obj.instance.exports.logIt();
    },
  );
  