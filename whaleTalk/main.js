let input = "turpentine and turtles’";
input = input.toLowerCase();
const vowels = ['a','e','i','o','u'];
let resultArray = [];
for (let i = 0; i < input.length; i++) {
    //console.log(i);
    for (let j = 0; j < vowels.length; j++) {
        //console.log(j);
        if (input[i] === vowels[j]) {
            resultArray.push(input[i]);
            if(input[i] === "e" || input[i] === "u") {
                if(input[i] === "e") {
                    resultArray.push(input[i]);    
                }
                else {
                    resultArray.push(input[i]);
                }
            }
        }
    }
}
resultArray = resultArray.join('').toUpperCase()
console.log(resultArray);
