// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'

// my solution

function getGrade(s1, s2, s3) {
    // Code here
    let averageScore = (s1 + s2 + s3) / 3
    if (averageScore >= 90) {
        return "A"
    } else if (averageScore >= 80) {
        return "B"
    } else if (averageScore >= 70) {
        return "C"
    } else if (averageScore >= 60) {
        return "D"
    } else {
        return "F"
    }
}