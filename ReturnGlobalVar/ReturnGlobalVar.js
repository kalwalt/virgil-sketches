const importObject = {
    env: {
      add(arg1, arg2) {
        return arg1 + arg2;
      },
      log(arg) {
        console.log("result from main: ", arg);
      },
    },
  };
 
  WebAssembly.instantiateStreaming(fetch("./ReturnGlobalVar.wasm"), importObject).then(

    (obj) => {
        console.log(obj);
        
      let nothing = obj.instance.exports.returnGlobalVar();
      console.log(nothing);
      obj.instance.exports.main();
    },
  );
  