const chunkArray = require('./chunk');

test('chunkArray exists', () => {
    expect(chunkArray).toBeDefined();
});

test('chunk an array of 10 values with a length of 2', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const length = 2;
    const chunked = chunkArray(numbers, length);
    expect(chunked).toEqual([
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
        [9, 0]
    ]);
});