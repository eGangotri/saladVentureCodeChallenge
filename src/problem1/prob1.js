

var sum_to_n_a = function(n) {
    // your code here
    let _sum = 0
    for(let x = 1; x <= n; x++){
        _sum += x
    }
    return _sum;
};

/**
 * Sum of Integers Formula:
S = n(a + l)/2

where,

S = sum of the consecutive integers
n = number of integers
a = first term
l = last term
 * @param {*} n 
 */
var sum_to_n_b = function(n) {
    let a_plus_l = 1+n
    let a_plus_l_by_n = a_plus_l * n
    return a_plus_l_by_n/2
};

var sum_to_n_c = function(n) {
    let _sum = 0
    while ( n > 0){
        _sum+=n
        n--;
    }
    return _sum;
};

const result1 = sum_to_n_a(5)
const result2 = sum_to_n_b(5)
const result3 = sum_to_n_c(5)
console.log(`result1 : ${result1}`);
console.log(`result2 : ${result2}`);
console.log(`result3 : ${result3}`);