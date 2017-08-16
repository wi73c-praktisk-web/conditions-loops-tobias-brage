var number = [78,14,65,32,99,23,48,9,55,37];
var numberCount = 0;
var nextNumber = 0;
var arrayLen = number.length;

number.forEach(function(number, index, arr){
    numberCount++;
    nextNumber = arr[numberCount];
    if(number > nextNumber) {
        console.log(number + " Er større end " + nextNumber);
    }
 });