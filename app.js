const coap = require("node-coap-client").CoapClient;
var hostname="localhost";
var params={
    psk: { 
        "identity": "12345678-1234-1234-1234-123456789012"
        // ... potentially more psk identities
    }
};
coap.setSecurityParams(hostname /* string */, params /* SecurityParameters */);

coap
    .tryToConnect(target /* string */)
    .then((result /* true or error code or Error instance */) => {
        // do something with the result */ 
        console.log(result);
    }).catch(err=>{
        console.log(err);
    })
    ;
var target="coaps://192.168.0.13:41283/switch";
var timeout=1000;
coap
    .ping(
        target /* string | url | Origin */,
        [timeout /* number, time in ms */]
    )
    .then((success /* boolean */) => { 
        console.log(success);
        /* handle response */})
        .catch(err=>{
            console.log(err);
        })
    ;

    // cd iot/iotivity/out/linux/armv7l/release/examples/OCFSecure/