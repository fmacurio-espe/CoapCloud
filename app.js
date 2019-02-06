const coap = require("node-coap-client").CoapClient;

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