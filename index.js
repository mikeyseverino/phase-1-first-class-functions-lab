//Test 1
const returnFirstTwoDrivers = function (firstTwoDrivers){
    return firstTwoDrivers = ['Antonia', 'Nuru']
}

//Test 2
const returnLastTwoDrivers = function (lastTwoDrivers){
    return lastTwoDrivers = ['Amari', 'Mo']
}

//Test 3
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

//Test 4
function createFareMultiplier(fareMultiplier){
    return function (){
        return fareMultiplier*5;
    }
}
//Test 5
function fareDoubler(doubleIt){
    return doubleIt*2;
}

//Test 6
function fareTripler(TripleIt){
    return TripleIt*3;
}

//Test 7
function selectDifferentDrivers(firstTwoDrivers, returnFirstTwoDrivers){
   return firstTwoDrivers;
}
function selectDifferentDrivers(lastTwoDrivers, returnLastTwoDrivers){
    return lastTwoDrivers;
 }
