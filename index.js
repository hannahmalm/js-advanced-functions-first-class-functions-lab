// Code your solution in this file!

// returnFirstTwoDrivers()
    //declare a variable with const that is assigned an anonymous function
    // the assigned function should accept an array of drivers as an argument
    // the fujction should return the first two drivers in the array 
// In the console, type "drivers = ["Hannah", "Hank", "Bob", "Billy"]"
//drivers.slice(-2) <- returns Bob and Billy
//drivers.slice(0,2) <- returns Hannah Hank
//drivers.slice(1) <- returns Hank Bob Billy
//drivers.slice(3) <- returns Billy - slices out the first two
//.slice is the easiest way to find elements within an array 
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}


// returnLastTwoDrivers()
    //Declare a variable with const that is assigned an anonymous function
    // Assigned function should accept an array of drivers as an argument and return the last two drivers in array
    //see example above for logic - Used the console to figure this out
const returnLastTwoDrivers = function(drivers){
        return drivers.slice(-2);
    }

//selectingDrivers 
    // Array contsints two elements 
    // previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers())
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];



//createFareMultiplier()
    //higher order function takes in one argument, an integer
    //returns a function that will multiply a fare for a ride accordingly
    //EX: receives an argument of 4 and returns a function that takes in the fare as argument and quadruples the fare (multiply by 4)
const createFareMultiplier = function(integer) {
    return function(ride) {
        return integer * ride
    }
}
 
//fareDoubler()
    //Declare a variable with const and assign a function returned by createFareMultiplier()
    //Invoke creatFareMultiplier() so the fareDoubler() accepts a fare as the lone argument and doubles it
    const fareDoubler = createFareMultiplier(2);
    
//fareTripler()
    //declare a variable with const and assign a function returned by createFareMultiplier()
    //Invoke createFareMultipler() so the new fareTripler() function accpets a fare as its lone argument and triples it

    const fareTripler = createFareMultiplier(3);

//selectDifferentDrivers()
    //takes 2 arguments - array of drivers and either returnFirstTwoDrivers() or returnLastTwoDrivers()
    // Based on the arguemnts, return either the first two drivers or the last two drivers
    //Do this in the consoler
        //drivers = drivers = ["Hannah", "Hank", "Bob", "Billy"]
        // returnFirstTwoDrivers = drivers.slice(0,2)
        // returnLastTwoDrivers = drivers.slice(-2)

     const selectDifferentDrivers = function(drivers, firstOrLastTwoDrivers){
        return firstOrLastTwoDrivers(drivers);
    }