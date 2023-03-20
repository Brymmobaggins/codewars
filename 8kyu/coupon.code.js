// STORY
// Your online store likes to give out coupons for special occasions.Some customers try to cheat the system by entering invalid codes or using expired coupons.


// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date.All dates will be passed as strings in this format: "MONTH DATE, YEAR".

function checkCoupon(enterCode, correctCode, currentDate,expireDate){

    if(enterCode === correctCode && Date.parse(currentDate) <= Date.parse(expireDate)){
        return true
    }else{
        return false
    }
}
console.log(checkCoupon("123","123","September 5, 2015",  "October 1 2014"))