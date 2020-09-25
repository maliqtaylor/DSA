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
    //counts number of spaces in string and adds it to counter variable
    let textArr = text.split(" ").filter((el) => {
        if (el !== " ") {
            return el
        }
    });
    //converts input string into array so long as char / element is not a space itself
    if (textArr.length === 1) {
        ansStr = textArr.toString();
        return ansStr += " ".repeat(counter)
    };
    // checks if there is only one element and if so, converts it back into a string and adds all spaces to end
    let numSpaces = counter / (textArr.length - 1);
    // counts how many spaces should be divided evenly by words aka counter / elements (or words) in array
    if (!numSpaces) {
        return text
    }
    // if there are no spaces at all, return the string itself
    else if (numSpaces % 1 !== 0) {
        let extraSpacesNum = counter % (textArr.length - 1);
        let evenSpacesNum = Math.floor(numSpaces);
        let ansStr = textArr.join(" ".repeat(evenSpacesNum));
        let extraSpaces = " ".repeat(extraSpacesNum);
        return ansStr += extraSpaces;
    }
    // if the amount of spaces isnt evenly distributed with the amount of words, calculate how many should be distributed and append any extras to the end
    else {
        return textArr.join(" ".repeat(numSpaces));
    }
    // if the amount of spaces is even then just distrubute them evenly amongs the words / elements and return as a string
};
console.log(reorderSpaces("  this   is  a sentence "));
console.log(reorderSpaces("  walks  udp package   into  bar a"));
console.log(reorderSpaces("hello   world"));
console.log(reorderSpaces(" practice   makes   perfect"));
console.log(reorderSpaces("   hello"));
console.log(reorderSpaces("a b c "));