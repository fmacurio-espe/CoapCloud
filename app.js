const coap = require("node-coap-client").CoapClient;
var hostname="localhost";
var params={
    psk: { 
        "identity": "AAAAAAAAAAAAAAAA"
        // ... potentially more psk identities
    }
};
coap.setSecurityParams(hostname /* string */, params /* SecurityParameters */);

coap
    .tryToConnect(target /* string */)
    .then((result /* true or error code or Error instance */) => {
        // do something with the result */ 
        console.log("ok try");
        console.log(result);
    }).catch(err=>{
        console.log("error try");
        console.log(err);
    })
    ;
var target="coaps://192.168.0.13:45585/";
var timeout=1000;

/* var options={
    keepAlive: boolean,
    confirmable: boolean,
    retransmit: boolean
};
coap
    .request(
        resource ,
        method ,
        [payload ,
        [options ]]
    )
    .then(response => { })
    .catch(err => {  })
    ;
 */
coap
    .ping(
        target /* string | url | Origin */,
        [timeout /* number, time in ms */]
    )
    .then((success /* boolean */) => { 
        console.log("ok try");console.log(success);
        /* handle response */})
        .catch(err=>{
            console.log("error ping");
            console.log(err);
        })
    ;

    // cd iot/iotivity/out/linux/armv7l/release/examples/OCFSecure/