function decide(number) {
    if (number % 2 == 0) {
        var msg1 = 'even'
        // console.log('even');
        return msg1;
    }
    else {
        var msg2 = 'odd';
        // console.log('odd');
        return msg2;
    }

}
var decision = decide(5);
console.log(decision);