// Given a string s and an integer array indices of the same length.
// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.


const shuffleStr = (s, indices) => {
    let arrStr = s.split('');
    let indexStre = {};
    for (let i = 0; i < arrStr.length; i++) {
        if (!indexStre[arrStr[i]]) {
            indexStre[arrStr[i]] = [indices[i]]
        }
        else {
            indexStre[arrStr[i]] = [...indexStre[arrStr[i]], indices[i]]
        }
    }
    let returnStr = '';
    let i = 0;
    while (i <= arrStr.length) {
        for (let letter in indexStre) {
            if (indexStre[letter].includes(i)) {
                returnStr += letter
            }
        }
        i++
    }
    return returnStr
};

console.log(shuffleStr('aaiougrt', [4, 0, 2, 6, 7, 3, 1, 5]))