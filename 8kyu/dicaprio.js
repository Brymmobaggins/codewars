/* DESCRIPTION:
You have to write a function that describe Leo:

function leo(oscar) {

}
if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
 if it was not 88 or 86 (and below88) you should return "When will you give Leo an Oscar?"
if it was over 88 you should return "Leo got one already!" */

function leo(oscar) {

    if (oscar === 88) {              // if oscar was (integer) 88
        return "Leo finally won the oscar! Leo is happy"
    } else if (oscar === 86) {       //  if oscar was 86
        return "Not even for Wolf of wallstreet?!"
    } else if (oscar < 88) {        //  if it was not 88 or 86 (and below88)
        return "When will you give Leo an Oscar?"
    } else {                        // if it was over 88
        return "Leo got one already!"
    }

}

console.log(leo(89))