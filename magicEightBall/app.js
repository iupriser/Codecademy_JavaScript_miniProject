let userName = "";
userName?console.log(`Hello, ${userName}!`):console.log("Hello!");
let userQuestion = "will i be successful";
console.log(`${userQuestion}`);
randomNumber = Math.floor(Math.random()*8);
console.log(randomNumber);
let eightBall = "";
switch(randomNumber){
	case 0: eightBall = 'It is certain';
	break;
	case 1: eightBall = 'It is decidely so';
	break;
	case 2: eightBall = 'Reply hazy try again';
	break;
	case 3: eightBall = 'Cannot predict now';
	break;
	case 4: eightBall = 'Do not count on it';
	break;
	case 5: eightBall = 'My source say no';
	break;
	case 6: eightBall = 'Outlook not so good';
	break;
	case 7: eightBall = 'Signs point to yes';
	break;
}

console.log(eightBall);
