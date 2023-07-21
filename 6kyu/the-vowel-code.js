/*DESCRIPTION:
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.*/


function encode(str){
    let vowToStr = ''
    for(let i = 0; i < str.length; i++){
        if(str[i] == "a"){
            vowToStr += "1"
        }else if(str[i] == "e"){
            vowToStr += "2"
        }else if(str[i] == "i"){
            vowToStr += "3"
        }else if(str[i] == "o"){
            vowToStr += "4"
        }else if(str[i] == "u"){
            vowToStr += "5"
        }else{
            vowToStr += str[i]
        }
    }
    return vowToStr
}
console.log(encode("hello"))

function decode(str){

    let newStr = ''
    for(let i = 0; i < str.length; i++){
        if(str[i] == 1){
            newStr += "a"
        }else if(str[i]== 2){
            newStr += "e"
        }else if(str[i] == 3){
            newStr += "i"
        }else if(str[i]== 4){
            newStr += "o"
        }else if(str[i] ==5){
            newStr += 'u'
        }else{
            newStr += str[i]
        }
    }
    return newStr
}
console.log(decode("h3 th2r2"))
