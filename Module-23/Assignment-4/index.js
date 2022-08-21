// Problem:1

function radianToDegree(radian) {
    const convertToDegree = radian * 57.2958;
    const degreeToFixed = convertToDegree.toFixed(2);
    const degree = parseFloat(degreeToFixed);
    return degree;
};

// Problem:2

function isJavaScriptFile(string) {
    const fileName = string.endsWith('js');
    return fileName;
};


// Problem:3 
function oilPrice(digelPerLiter, petrolPerLiter, octenPerLiter) {

    const digelPrice = 114;
    const petrolPrice = 130;
    const octenPrice = 135;

    const digel = digelPerLiter * digelPrice;
    const petrol = petrolPerLiter * petrolPrice;
    const octen = octenPerLiter * octenPrice;

    const totalOilPrice = digel + petrol + octen;
    return totalOilPrice;
};



// Problem:5

function isBestFriend(object1, object2) {
    if (object1.name === object2.friend && object2.name === object1.friend) {
        return true;
    } else {
        return false;
    }
};
