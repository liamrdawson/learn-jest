const functions = require('./functions');

const nameCheck = () => console.log('Checking name ...')

describe('Checking Names', () => {
    beforeEach(() => nameCheck());
    test('User is Liam', () => {
        const user = 'Liam';
        expect(user).toBe('Liam');
    });
    test('User is Louise', () => {
        const user = 'Louise';
        expect(user).toBe('Louise');
    });
});

//  .toBe
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

//  .not.toBe
test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

/**
 *  NOTES
 *  
 *  TO CHECK FOR TRUTHY OR FALSY VALUES...
 *  .toBeNull       matches  null
 *  .toBeUndefined  matches  undefined
 *  .toBeDefined    matches  undefined
 *  .toBeTruthy     matches  truthy
 *  .toBeFalsy      matches  falsy
 * 
 * 
 *  .toBe will match strict primitives, if you want to match something that isn't a strict primitive such as an array or an object, then use .toEqual.
 * 
 */

//  .toBeNull 
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

//  .toBeFalsy 
test('User should be falsy', () => {
    expect(functions.checkFalsy(null)).toBeFalsy();
});

//  .toEqual
test('User should be Liam Dawson object', () => {
    expect(functions.createUser()).toEqual({
        firstName: "Liam",
        lastName: "Dawson"
    });
});

//  .toBeLessThan
test('Should be less than 1600', () => {
    const load1 = 600;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});

//  REGEX
//  .toMatch
test('There is no "I" in "Team"', () => {
    expect('team').not.toMatch(/I|i/);
});

//  .toMatch
test('But there is an "I" in "Pie"', () => {
    expect('pie').toMatch(/I|i/);
});

//  ARRAYS
//  .toContain
test('Admin should be in usernames', () => {
    usernames = ['Liam', 'Louise', 'Admin', 'Guest'];
    expect(usernames).toContain('Admin');
});

//  WORKING WITH ASYNC DATA
//  PROMISE
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual("Leanne Graham");
        })
});

//  ASYNC AWAIT
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual("Leanne Graham");

});