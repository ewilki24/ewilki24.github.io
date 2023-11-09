const fizzBuzzParagraph = document.getElementById("fizzbuzzcontent");

/**
let text = createTextNode("SOMETHING");
fizzBuzzParagraph.appendChild(text);

fizzBuzzParagraph.innerTextContent;
**/

let output = "";

let word1 = "fizz";
let word2 = "buzz";
let word3 = "BANG!";

const main = document.createElement('main');
const ul = document.createElement('ul');

for (let i = 1; i <= 110; i++) {

    let thisLine = "";

    if (i % 3 === 0) {
        thisLine += word1;
    }

    if (i % 5 === 0) {
        thisLine += word2;
    } 

    if (i % 7 === 0) {
        thisLine += word3;
    }

    if (thisLine === "") {
        thisLine += i;
    }
    let li = document.createElement('li');
    li.innerText = thisLine;
    ul.appendChild(li);
}
main.appendChild(ul);
document.querySelector('body').appendChild(main);
