// Given a string s and an integer array indices of the same length.
// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.


const shuffleStr = (s, indecies) => {
    let arrStr = s.split('');
    // let returnArr = [];
    let indexStre = {};
    for (let i = 0; i < arrStr.length; i++) {
        if (!indexStre[arrStr[i]]) {
            indexStre[arrStr[i]] = [indecies[i]]
        }
        else {
            indexStre[arrStr[i]] = [...indexStre[arrStr[i]], indecies[i]]
        }
    }
    return indexStre
    // return returnArr.join('')
};

console.log(shuffleStr('aaiougrt', [4, 0, 2, 6, 7, 3, 1, 5]))