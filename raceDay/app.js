let raceNumber = Math.floor(Math.random() * 1000);
//console.log(raceNumber);
let isRegistered = false;
let runnerAge = 18;
if (runnerAge >= 18 && isRegistered === true) {
	raceNumber += 1000;
}

if (runnerAge > 18 && isRegistered === true) {
	console.log(`Race will start at 9:30 am with race number ${raceNumber}`);

}
else if (runnerAge > 18 && isRegistered === false) {
	console.log(`Race will start at 11:00 am with race number ${raceNumber}`);
}
else{
	console.log("Runner, please see the registration desk");
}