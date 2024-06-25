//node average_score.js

function getAverage(scores) {
    let sum = 0; //

    for (const somar of scores) { 
        sum += somar; 
    }

    return sum / scores.length; 
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])); //The local var (scores) is storaged like an array 
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));