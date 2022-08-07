var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboards: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}
// console.log(shoppingCart);

var shoppingItem = ['books', 'sunglass', 'keyboards', 'mouse', 'pen', 'shoes'];
// console.log(shoppingItem);

const keys = Object.keys(shoppingCart);
// console.log(keys);

const values = Object.values(shoppingCart);
// console.log(values);

for (var i = 0; i < keys.length; i++) {
    var propertName = keys[i];
    // console.log(propertName);
    var propertValues = values[i];
    // console.log(propertValues);
}

// For in Loop
for (var propertName in shoppingCart) {
    // console.log(propertName);
    const value = shoppingCart[propertName];
    console.log(propertName, value)
}

