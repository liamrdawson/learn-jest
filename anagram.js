const isAnagram = (str1, str2) => {
    return formatString(str1) === formatString(str2);
}

const formatString = (str) => {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}

module.exports = isAnagram;