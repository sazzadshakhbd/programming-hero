/*
    function functionalName (parameter) {
        function body
        return
    }
    functionName (parameter value)

    var return value = functionName (parameter value)

    // Basic structur

*/

function getTotal(assignment1, assignment2, assignment3) {
    const totalMarks = assignment1 + assignment2 + assignment3;
    const avearage = totalMarks / 3;
    return avearage;
}
const assignmentMarks1 = 60;
const assignmentMarks2 = 58;
const assignmentMarks3 = 59;

var myAverageMarks = getTotal(assignmentMarks1, assignmentMarks2, assignmentMarks3);
console.log('My Mark is ', myAverageMarks);