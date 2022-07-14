
// DESCRIPTION:
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

function Clock(h, m, s) {
    let hour = h * 60 * 60 * 1000
    let minute = m * 60 * 1000
    let seconds = s * 1000

    return hour * minute * seconds


}
