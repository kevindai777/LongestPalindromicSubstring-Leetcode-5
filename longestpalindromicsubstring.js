//Objective is to find the longest palindrome in a given string.

let string = "babad"


//O(n^2) solution that expands around the center and uses two pointers
//to update the longest palindromic string.

let start = 0
let end = string.length - 1
let max = 0

for (let i = 0; i < string.length; i++) {
    let tempStart = i
    let tempEnd = i

    //continue until you find a character that's not the same as given index
    //(expand width of center)
    while (string[i] == string[tempEnd + 1]) {
        tempEnd++
    }

    //expand left and right as long as the ends are the same
    //(expand around center)
    while (tempStart >= 0 && tempEnd < string.length && string[tempStart - 1] == string[tempEnd + 1]) {
        tempStart--
        tempEnd++
    }

    //If a new longest substring is found, update the start and end
    if (max < tempEnd - tempStart + 1) {
        start = tempStart 
        end = tempEnd 
        max = tempEnd - tempStart + 1
    }
}

return string.substring(start, end + 1)
