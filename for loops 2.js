//Iterate Through an Array w a For Loop

/* Declare and initialize a variable total to 0. Use a for loop to add 
the value of each element of the myArr array to total. */

const myArr = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArr.length; i++) {
    console.log(myArr[i]);
    total += myArr[i];
    console.log(total);
}

//console output:
2
3
4
5
6
20


//Nesting for Loops

//Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

function multiplyAll(arr) {
    let product = 1;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        product *= arr[i][j];
        console.log(product);
    }
}
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

//console output:
1
2
6
24
120
720
5040

