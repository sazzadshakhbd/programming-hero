/*
    Write an arrow function where it will do the following:
    a) It will take an array where the array elements will be the name of your friends
    b) Check if the length of each element is even, push elements with even length to a new array and return the result
    Print the result.
*/

const friends = ['Tamim', 'Musfiq', 'Bejoy', 'Sommo', 'Sakib', 'Liton', 'Mehedi', 'Riad', 'Mustafiz', 'Rubel'];

const bestFriends = (friends) => {
    const evenPush = [];
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length % 2 === 0) {
            evenPush.push(friends[i]);
        }
    }
    return evenPush;
}

console.log(bestFriends(friends));