// calculate the average of 4 scores and show the grade
function showAverageScore(scoreA, scoreB, scoreC, scoreD) {
    let averageScore = (scoreA + scoreB + scoreC + scoreD) / 4;

    if (averageScore > 90) {
        console.log("grade: A");
    }
    else if (averageScore > 70) {
        console.log("grade: B");
    }
    else if (averageScore > 50) {
        console.log("grade: C");
    } else {
        console.log("grade: F");
    }
}

showAverageScore(100, 90, 80, 70);
