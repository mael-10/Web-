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

console.log("\n \n"); 

function getGrade(score) {
    let resultGrade = ""; 

    if(score === 100) {
        resultGrade = "A++"; 
    } else if(score <= 99 && score >= 90) {
        resultGrade = "A"; 
    } else if(score <= 89 && score >= 80) {
        resultGrade = "B"; 
    } else if(score <= 79 && score >= 70) {
        resultGrade = "C"; 
    } else if(score <= 69 && score >= 60) {
        resultGrade = "D"; 
    } else {
        resultGrade = "F"; 
    }

    return resultGrade; 
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

console.log("\n \n"); 


function hasPassingGrade(score) {
    return getGrade(score) !== "F"; // Irá retornar um valor booleano para verificar se tudo aquilo for diferente de f vai retornar verdadeiro
}

console.log(hasPassingGrade(100)); 
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

console.log("\n \n"); 

function studentMsg(totalScores, studentScore){
    
    let studentAverage = getAverage(totalScores); 
    let gradeStudent =  getGrade(studentScore);
    let passingGrade = getGrade(gradeStudent);

    let studentPassingGrade = ""; 
    
    if (passingGrade === false) {
        studentPassingGrade = "You passed the course.";
    } else {
        studentPassingGrade = "You failed the course."; 
    }

    return "Class average: " + studentAverage  + ". " + " Your grade: " +  gradeStudent + ". " + studentPassingGrade;

}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));

//"Class average: 71.7. Your grade: F. You failed the course."