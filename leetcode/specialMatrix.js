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

// const numSpecial = (mat) => {
//     let stack = [];
//     for (let i = 0; i < mat.length; i++) {
//         for (let j = 0; j < mat.length; j++) {
//             let sum = 0;
//             if(mat[i][j] === 1){
//                 sum = mat[j].reduce((acc, curr) => {
//                     return acc + curr
//                 });
//                 for(let a = 0; a < mat.length; a++){
//                     sum = sum + mat[a][j]
//                 }
//                 stack.push(sum)
//             }
//         }
//     }
//     return stack.filter((el) => {
//         el === 2
//     }).length
// };

// const numSpecial = (mat) => {
//     let numSpecial = 0;
//     for(let i = 0; i < mat.length; i++){
//         if(mat[i].reduce((acc, curr) => {return acc + curr}) === 1){
//         for(let j = 0; j < mat.length; j++){
//             if (mat[i][j] === 1){
//                 console.log(j)
//             }
//         }
//     }
//     }
// };


const numSpecial = (mat) => {
    let xAxis = {}
    let yAxis = {}
    let num = 0

    //If a 1 shows up add its x and y axis to corresponding objs
    for (let i = 0; i < mat.length; i++) {
        let arr = mat[i]

        for (let j = 0; j < arr.length; j++) {
            let curr = arr[j]
            if (curr === 1) {
                xAxis[i] ? xAxis[i] += 1 : xAxis[i] = 1
                yAxis[j] ? yAxis[j] += 1 : yAxis[j] = 1
            }
        }
    }

    //Loop the second time to see if the 1 only shows up on the x and y axis 1 time
    //If it does add 1 to the output 
    for (let i = 0; i < mat.length; i++) {
        let arr = mat[i]

        for (let j = 0; j < arr.length; j++) {
            let curr = arr[j]
            if (curr === 1) {
                if (xAxis[i] === 1 && yAxis[j] === 1) num += 1
            }

        }
    }
    return num
};
console.log(numSpecial([[1, 0, 0],
[0, 0, 1],
[1, 0, 0]]))

let mat = [
    [0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1]
]

console.log(numSpecial(mat));
console.log(numSpecial([[1, 0, 0],
[0, 0, 1],
[1, 0, 0]]))

