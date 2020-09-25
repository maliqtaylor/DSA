// You are given a string text of words that are placed among some number of spaces. Each word consists of one or more lowercase English letters and are separated by at least one space. It's guaranteed that text contains at least one word.

// Rearrange the spaces so that there is an equal number of spaces between every pair of adjacent words and that number is maximized. If you cannot redistribute all the spaces equally, place the extra spaces at the end, meaning the returned string should be the same length as text.

// Return the string after rearranging the spaces.
// Input: text = "  this   is  a sentence "
// Output: "this   is   a   sentence"
// Explanation: There are a total of 9 spaces and 4 words. We can evenly divide the 9 spaces between the words: 9 / (4-1) = 3 spaces.

const reorderSpaces = (text) => {
    let counter = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
            counter += 1
        }
    };
    let textArr = text.split(" ").filter((el) => {
        if (el !== " ") {
            return el
        }
    });
    if(textArr.length === 1){
        ansStr = textArr.toString();
        return ansStr += " ".repeat(counter)
    }
    let numSpaces = counter / (textArr.length - 1);
    if (numSpaces % 1 === 0) {
        return textArr.join(" ".repeat(numSpaces));
    }
    else if (!numSpaces) {
        return text
    }
    else {
        let roundedSpaces = Math.floor(numSpaces);
        let extraSpacesNum = counter % (roundedSpaces);
        let ansStr = textArr.join(" ".repeat(roundedSpaces));
        let extraSpaces = " ".repeat(extraSpacesNum);
        return ansStr += extraSpaces;
    }
};
// console.log(reorderSpaces("  this   is  a sentence "))
// console.log(reorderSpaces("  walks  udp package   into  bar a"))
// console.log(reorderSpaces("hello   world"))
console.log(reorderSpaces(" practice   makes   perfect"))
// console.log(reorderSpaces("   hello"));
// console.log(reorderSpaces("a b c "))