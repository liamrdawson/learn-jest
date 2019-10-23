const axios = require('axios');

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkFalsy: x => x,
    createUser: () => {
        const user = {
            firstName: "Liam"
        };
        user["lastName"] = "Dawson";
        return user;
    },
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => 'error')
}

module.exports = functions;