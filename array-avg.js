//function declare
function array_avg(arr, length) {
    //initially sum is set to 0
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        //sum will be added with each number and set the value of sum as added value
        sum = sum + arr[i];
    }
    console.log(sum);
    //average calculation
    var avg = sum / length;
    // console.log(avg);
    return avg;

}
var number = [10, 12, 13, 14];
//function call
var average = array_avg(number, number.length);
console.log(average);