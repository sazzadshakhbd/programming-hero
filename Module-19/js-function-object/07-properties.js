var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 1,
    mouse: 1,
    pen: 25
}
// console.log(shoppingCart);

var penCount = shoppingCart.pen // When you know the property name use . notation
// console.log(penCount);

var penCount2 = shoppingCart['pen'] // alternative 
// console.log(penCount2);

var propertyName = 'mouse';
var propertyValuesMouse = shoppingCart[propertyName];
console.log(propertyName, propertyValuesMouse);

var properties = Object.keys(shoppingCart);
// console.log(properties);

var propertValues = Object.values(shoppingCart);
// console.log(propertValues);

// set property values
shoppingCart.mouse = 15;
console.log(shoppingCart);

shoppingCart['mouse'] = 29;
console.log(shoppingCart);

shoppingCart[propertyName] = 80;
console.log(shoppingCart);