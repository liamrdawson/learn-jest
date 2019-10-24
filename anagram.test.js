const isAnagram = require('./anagram');

test('isAnagram exists and is a function', () => {
    expect(typeof isAnagram).toEqual('function');
});

test('"Cinema" is anagram of "Iceman"', () => {
    expect(isAnagram('Cinema', 'Iceman')).toBeTruthy();
});

test('"Tom Marvolo Riddle" is anagram of "I am Lord Voldemort"', () => {
    expect(isAnagram('Tom Marvolo Riddle', 'I am Lord Voldemort')).toBeTruthy();
});

test('"Fortitude" is anagram of "Tried tofu##"', () => {
    expect(isAnagram('Fortitude', 'Tried tofu##')).toBeTruthy();
});

test('"How Now" is NOT an anagram of "Brown Cow"', () => {
    expect(isAnagram('How Now', 'Brown Cow')).toBeFalsy();
});