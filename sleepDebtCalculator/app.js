// const getSleepHours = day => {
// 	switch(day){
// 		case 'monday':
// 			return 8;
// 		case 'tuesday':
// 			return 7;
// 		case 'wednesday':
// 			return 6;
// 		case 'thrusady':
// 			return 9;
// 		case 'friday':
// 			return 6;
// 		case 'saturday':
// 			return 10;
// 		case 'sunday':
// 			return 9;
// 	}	
// };

// console.log(getSleepHours('tuesday'));

// const getActualSleepHours = () => {
// 	return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday')
// 	+ getSleepHours('thrusady') + getSleepHours('friday') + getSleepHours('saturday')
// 	+ getSleepHours('sunday');
// }

// const getIdealSlepHours = () => {
// 	let idealHours = 8 ;
// 	return idealHours * 7;
// }

// console.log(getIdealSlepHours());
// console.log(getActualSleepHours());

// const calculateSleepDebt = () => {
// 	let actualSleepHours = getActualSleepHours();
// 	let idealSleepHours = getIdealSlepHours();

// 	if (actualSleepHours === idealSleepHours) {
// 		console.log('user got the perfect amount of sleep.');
// 	}
// 	else if (actualSleepHours > idealSleepHours) {
// 		console.log(`user got more sleep than needed by ${actualSleepHours - idealSleepHours} hour(s).`);
// 	}
// 	else{
// 		console.log(`user should get some rest by ${idealSleepHours - actualSleepHours} hour(s).`);
// 	}
// }

// calculateSleepDebt();

const workoutJournal = (miles, avgTime) => {
  console.log('I ran ' + miles + ' miles at an average of ' + avgTime + ' per mile.');
};

workoutJournal('3');