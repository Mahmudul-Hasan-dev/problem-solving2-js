function light(signalColor) {
    if (signalColor == 'green') {
        var msg = 'you can go';
        return msg;
    }
    else if (signalColor == 'yellow') {
        var msg = 'wait here';
        return msg;
    }
    else if (signalColor == 'red') {
        var msg = 'stop';
        return msg;
    }
    else {
        var msg = 'traffic light churi hyse';
        return msg;
    }

}

var signal = 'yellow';
var result = light(signal);
console.log(result);