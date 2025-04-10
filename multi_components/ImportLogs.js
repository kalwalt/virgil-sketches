const importObject = {
    console: {
      logi(arg) {
        console.log(arg);
      },
      logf(arg){
        console.log(arg);
      }
    },
  };
 
  WebAssembly.instantiateStreaming(fetch("./multi_components.wasm"), importObject).then(

    (obj) => {
        console.log(obj);
        
      obj.instance.exports.main();
    },
  );
  