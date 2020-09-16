// Given a string s and an integer array indices of the same length.
// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.


const shuffleStr = (s, indecies) => {
    Array.prototype.insert = function ( index, item ) {
        this.splice( index, 0, item );
    };
    let arrStr = s.split('');
    let returnArr = [];
    for(let i = 0; i < indecies.length; i++){
        returnArr.insert(indecies[i], arrStr[i])
    }
    return returnArr.join('')
};

console.log(shuffleStr('aaiougrt', [4,0,2,6,7,3,1,5]))