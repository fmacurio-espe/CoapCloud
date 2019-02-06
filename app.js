const coap = require("node-coap-client").CoapClient;

var target="coaps://localhost:49506";
var timeout=10000;
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