var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 5) {
        break;
    }
    else if (numbers[i] === 3) {
        continue;
    }
}
var sum = function (a, b) { return a + b; };
sum(2, 4);
