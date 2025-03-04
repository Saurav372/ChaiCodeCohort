function findLargest(a, b, c) {
    if (a > b) {
        if (a > c) {
            return a;
        }
        else {
            return c;
        }
    }
    else {
        if (b > c) {
            return b;
        } else {
            return c;
        }
    }
}

const largestNumber = findLargest (10, 20, 30);

console.log(largestNumber);