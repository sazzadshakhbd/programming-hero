/*
    function functionalName (parameter) {
        function body
        return
    }
    functionName (parameter value)

    var return value = functionName (parameter value)

    // Basic structur

*/
function add(num1, num2) {
    var total = num1 + num2;
    return total;
}
const result1 = add(10, 15);
const result2 = add(20, 30);
const totalMarks = add(result1, result2);
console.log(totalMarks);

