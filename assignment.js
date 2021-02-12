function kilometerToMeter(km) {
    if (km < 0)
        return "distance can't be negative";
    return km * 1000;
}

function budgetCalculation(watch, phone, laptop) {
    if (watch < -1 || watch != Math.round(watch))
        return "watch count can't be negative or fraction";

    if (phone < -1 || phone != Math.round(phone))
        return "phone count cant be negative or fraction";
    if (laptop < -1 || laptop != Math.round(laptop))
        return "laptop count can't be negative or fraction";

    return (watch * 50) + (phone * 100) + (laptop * 500);
}

function hotelCost(days) {
    if (days < 0 || days != Math.round(days))
        return "days count can't be negative or fraction";

    if (days <= 10)
        return days * 100;
    if (days <= 20)
        return ((days - 10) * 80) + 1000;

    return ((days - 20) * 50) + 800 + 1000 ;
}

function megaFriend(names) {
    if (names.length == 0)
        return "array is empty";
    var length = -1;
    var name;
    for (var i = 0; i < names.length; i++)
        if (names[i].length > length) {
            length = names[i].length;
            name = names[i];
        }
    return name;
}