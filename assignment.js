// Task 01: kilometerToMeter
function kilometerToMeter(kilometer){
    if (kilometer < 0){
        return "Attention! You have to take a positive number to convert the value into meter.";
    }
    else {
        return 1000 * kilometer; // as though 1 kilometer is equal to 1000 meter
    }
}

// Task 02: budgetCalculator
function budgetCalculator(clock, phone, laptop){
    if(clock < 0 || phone < 0 || laptop < 0){
        return "Please provide the appropriate value of clock or phone or laptop. The number of product quantity can't accept in negative value.";
    }
    else {
        return 50 * clock + 100 * phone + 500 * laptop; // clock price $50, phone price $100, laptop price $500
    }
}

// Task 03: hotelCost
function hotelCost(numberOfNight){
    var totalCost = 0;
    if (numberOfNight <= 0){
        return "Who are you!! You don't even checked-in this hotel.";
    }
    else if (numberOfNight <= 10){
        totalCost = 100 * numberOfNight; // if anyone stayed between 10 days in this hotel
    }
    else if (numberOfNight <= 20){
        var firstTenDaysCost = 100 * 10;
        var remainigDays = numberOfNight - 10;
        totalCost = firstTenDaysCost + remainigDays * 80; // if anyone stayed between 20 days in this hotel
    }
    else {
        var firstTenDaysCost = 100 * 10;
        var secondTenDaysCost = 80 * 10;
        var remainigDays = numberOfNight - 20;
        totalCost = firstTenDaysCost + secondTenDaysCost + remainigDays * 50; // if anyone stayed more than 20 days in this hotel
    }
    return totalCost;
}

// Task 04: megaFriend
function megaFriend(friendsName){
    if (friendsName === undefined || friendsName.length == 0){
        return "Please put your friends name first. Don't you have any friends!!!";
    }
    var largestName = friendsName[0]; // indexing first name into largestName variable
    for(var i = 0; i < friendsName.length; i++){
        var name = friendsName[i];
        if (largestName.length < name.length){
            largestName = name;
        } // checking the letter of giving names and putting largest length of a name into largestName variable
    } // define a new variable name where the friends name is primarily stored
    return largestName;
}


// You can find all the solutions here:

var totalMeter = kilometerToMeter(32); // input for kilometerToMeter
console.log('After converting into meter:',totalMeter); // output for kilometerToMeter

var totalBudget = budgetCalculator(3, 7, 5); // input for budgetCalculator
console.log('Total amount of budget = $',totalBudget); // output for budgetCalculator

var totalHotelCost = hotelCost(29); // input for hotelCost
console.log('Total amount of bill for staying in our hotel = $',totalHotelCost); // output for hotelCost

var nameOfFriends = megaFriend(['Ridoy', 'Miraj', 'Ratul', 'Dip', 'Tameem']); // input for megaFriend
console.log('Largest Friend name:',nameOfFriends); // output for megaFriend