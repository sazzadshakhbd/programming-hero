// Javascript Object Notation(JSON)
const user = { id: 1, name: 'sazzad', job: 'develoopment' };
const stringfied = JSON.stringify(user);
// console.log(user);
// console.log(stringfied);

const shop = {
    owner: 'Alia',
    address: {
        street: 'voot er goli',
        city: 'Dhaka',
        country: 'bangladesh'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenew: 45000,
    isOpen: true,
    isNew: false
}

const shopJson = JSON.stringify(shop);
console.log(shopJson);
const shopObj = JSON.parse(shopJson);
console.log(shopObj);
