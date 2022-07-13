// The cockroach is one of the fastest insects.Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer(= floored).

// solution
function cockroachSpeed(speed) {
    
    let secondsInHour = 3600
    let centimeterToKilometer = 100000

    return Math.floor((speed * centimeterToKilometer) / secondsInHour)
}
