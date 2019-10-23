const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

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
 */

test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

test('Should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});