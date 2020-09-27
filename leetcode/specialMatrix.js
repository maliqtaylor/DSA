// Given a rows x cols matrix mat, where mat[i][j] is either 0 or 1, return the number of special positions in mat.

// A position (i,j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).

// Input: mat = [[1,0,0],
//               [0,0,1],
//               [1,0,0]]
// Output: 1
// Explanation: (1,2) is a special position because mat[1][2] == 1 and all other elements in row 1 and column 2 are 0.

// Input: mat = [[1,0,0],
//               [0,1,0],
//               [0,0,1]]
// Output: 3
// Explanation: (0,0), (1,1) and (2,2) are special positions.

// Input: mat = [[0,0,0,1],
//               [1,0,0,0],
//               [0,1,1,0],
//               [0,0,0,0]]
// Output: 2

// Special positions are when a 1 has only 0's in its neighboring columns and rows

const numSpecial = (mat) => {
    let stack = [];
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            let sum = 0;
            if(mat[i][j] === 1){
                sum = mat[j].reduce((acc, curr) => {
                    return acc + curr
                })
                console.log(mat[i], sum)
            }
        }
    }
};
numSpecial([[1,0,0],
            [0,0,1],
            [1,0,0]])