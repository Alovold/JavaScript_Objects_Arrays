// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];
function arraySum (arr1) {
    let sum = 0;
    arr1.forEach ((num) => {
        sum = sum + num;
    });
    return sum;
}

//arraySum.forEach((element)=>{return sum+=element})


console.log(arraySum(numbers));



// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let book = {
    title: "Homeland",
    pages: 352,
    readCount: 1,
};

book.info = function info() {
    let message = book.title + " by R.A. Salvatore, " + book.pages + " pages, read " + book.readCount + " time(s).";
    return message;
}

console.log(book.info());



console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";
let splitSentence = sentence.split(" ");

for (let i = 0; i < splitSentence.length; i++) {
    let reverseWord = splitSentence[i].split('').reverse().join('');
    splitSentence[i] = reverseWord;
}

let newSentence = splitSentence.join(' ');
console.log(newSentence);



console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
let rowSplit = csvData.split('\n');
let strHeaders = rowSplit[0].split(',');
let hobbitArr = [];

for (let i = 1; i < rowSplit.length; i++) {
    let objSplit = rowSplit[i].split(',');
    let obj = {}
    obj[strHeaders[0]] = objSplit[0]
    obj[strHeaders[1]] = objSplit[1]
    hobbitArr.push(obj)
}

console.log(hobbitArr);