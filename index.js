//Test 1
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2);
}

//Test 2
const returnLastTwoDrivers = function (drivers){
    return drivers.slice(-2);
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
function selectDifferentDrivers(drivers, someFunction){
   if (someFunction = returnFirstTwoDrivers)
   return drivers.slice(0,2);
   else if (someFunction = returnLastTwoDrivers)
   return drivers.slice(-2);
}
