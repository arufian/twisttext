#!/usr/bin/env node

var utils = require('util'),
    twisttext = require('../index'),
    argv = require('minimist')(process.argv.slice(2)),
    argStr = '';

var usage = function (){
    console.log('Usage: twisttext [options] <your_text>');
    console.log('options:');
    console.log('  -h, --help       show usage');
    console.log('  -t, --time       in miliseconds. default: 2000');
    console.log('                   input \'infinite\' to infinite time');
    process.exit(1);
}

// remove all unavailable options
for(var i in argv){
    if(i !== 'h' && i !== 'help' && i !== 't' && i !== 'time' && i !== '_') {
        delete  argv[i];
    }
}

if(argv['h'] || argv['help']){
    usage();
}

if(argv['_'].length === 0) {
    console.log('unable to twist your text. please input a text');
    usage();
}
argStr = argv['_'][0];

var runtime = 2000, infinite = false;
if(argv['t'] || argv['time']) {
    runtime = argv['t'] ? argv['t'] : argv['time']; 
    if(runtime === 'infinite') {
        infinite = true;
        console.log('(press ctrl+c to exit)');
    } else if(typeof runtime !== 'number' || (runtime === 'true' || runtime === 'false')) {
        usage();
    }
}

var spinnerInterval, isEven = false;
var spinnerFunct = function (prefix, end) {
    if (end) {
        utils.print('\n' + twisttext.twist(prefix, false) + '\n');
        return clearInterval(spinnerInterval);
    }
    var spinner = ['-','\\','|','/'], i = 0, l = spinner.length;
    spinnerInterval = setInterval(function () {
        utils.print('\u000D' + spinner[i++] + ' '+ twisttext.twist(prefix, isEven));
        isEven = !isEven;
        if (i == l) i = 0;
    }, 200);
};

spinnerFunct(argStr, false);
if(!infinite){
    setTimeout(function () {
        spinnerFunct(argStr, true);
    }, runtime);
}

