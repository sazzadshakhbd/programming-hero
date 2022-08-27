const users = [{ id: 1, name: 'sazzad', age: 40, married: true, }];
// console.log(users[0].married);

const data = {
    count: 5000,
    data: [
        { id: 1, name: 'babaul', job: 'leader' },
        { id: 1, name: 'sabul', job: 'leader' }
    ]
}
// console.log(data.data[0].name);

const user = {
    id: 5001,
    name: 'thomas',
    address: {
        street: {
            first: '35/A Kochukhet Lane',
            second: 'Third Floor',
            third: 'Right Side'
        },
        pastOffice: 'Cantonment',
        city: 'Dhaka'
    }
}
const result = user.address.stret?.second;
console.log(result);