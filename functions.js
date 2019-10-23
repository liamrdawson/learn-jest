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
    }

}

module.exports = functions;