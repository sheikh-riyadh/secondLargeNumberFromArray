/* 1st way to find second large number */

const numbers = [10, 15, 80, 72, 30, 95, 99, 54];

function secondLarge(numbers) {
    numbers.sort()
    let largeNumber = 0;
    let length = numbers.length;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[length - 2] < numbers[length - 1]) {
            largeNumber = numbers[length - 2];
            break;
        }
        else {
            length--;
        }
    }
    return largeNumber;

}

const secondLargeNumber = secondLarge(numbers);
console.log(secondLargeNumber);

/* 2nd way to find second large number */
function findSecondLargest(a, n) {
    a.sort();
    let second_largest = 0;
    for (let i = n - 2; i >= 0; i--) {
        if (a[i] != a[n - 1]) {
            second_largest = a[i];
            break;
        }
    }

    return second_largest;
}

const a = [12, 35, 1, 10, 34, 1];
let n = a.length;
let answer = findSecondLargest(a, n);
console.log("The second largest element in the array is: " + answer);
