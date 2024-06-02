// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return (`This Saturday, I want to ${activity}!`);
}
saturdayFun()

function mondayWork(activity2= "go to the office") {
    return `This Monday, I will ${activity2}.`
}
mondayWork()

function wrapAdjective(wrapper){
    return function(adj) {
        return `You are ${wrapper}${adj}${wrapper}!`
    }
} 
wrapAdjective(`*`)(`a hard worker`)
wrapAdjective(`||`)(`a dedicated programmer`)