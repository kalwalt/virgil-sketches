const importObject = {
    MyImports: {
      print(arg) {
        console.log(arg);
      },
    },
  };
 
  WebAssembly.instantiateStreaming(fetch("./ImportExport.wasm"), importObject).then(

    (obj) => {
        console.log(obj);
        
      obj.instance.exports.printPlus33();
    },
  );
  