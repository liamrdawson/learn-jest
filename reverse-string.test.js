const reverseString = require('./reverse-string');

test('reverseString function does exist', () => {
    expect(reverseString).toBeDefined();
});

test('String is reversed', () => {
    expect(reverseString('Hello')).toEqual('olleh');
});