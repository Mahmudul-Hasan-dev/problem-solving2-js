function array_avg(arr, length) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log(sum);
    var avg = sum / length;
    // console.log(avg);
    return avg;

}
var number = [10, 12, 13, 14];
var average = array_avg(number, number.length);
console.log(average);