
// You have an award - winning garden and every day the plants need exactly 40mm of water.You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day.Your jealous neighbour hacked your computer and filled your code with bugs.

// Your task is to debug the code before your plants die!


function rain(rainAmount){
    
    if(rainAmount < 40){
        return "You need give your plan " + `${40-rainAmount}` + "mm of water"
    }else{
        return "Your plant has had more than enough of water today "
    }
}
console.log(rain(3)) // you need give your plan 30mm of water